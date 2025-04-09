"use server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebhookForm } from "@/components/dashboard/WebhookForm"
import { NavBar } from "@/components/dashboard/Navbar"
import { Button } from "@/components/ui/button"
import ApiKeySection from "@/components/dashboard/ApiKeySection"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { randomBytes } from "crypto"
import bcrypt from 'bcrypt';

const API_KEY_BYTE_LENGTH = 32
const SALT_ROUNDS = 12

function generateSecureApiKey(): { hashedApiKey: string; apiKey: string } {
  const apiKey = randomBytes(API_KEY_BYTE_LENGTH).toString('hex')
  const hashedApiKey = bcrypt.hashSync(apiKey, SALT_ROUNDS)
  return { hashedApiKey, apiKey }
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ first_connection?: string }>
}) {
  let api_key: string | undefined
  const firstConnection = (await searchParams)?.first_connection
  if (firstConnection) {
    const supabase = await createClient()
  
    // create api key
    const { hashedApiKey, apiKey } = generateSecureApiKey()
    api_key = apiKey
    // save api key to database
    const { error: api_keys_error } = await supabase.from('API_KEY').insert({
      api_key: hashedApiKey
    })
    if (api_keys_error) {
      console.error('Error saving API key:', api_keys_error)
      redirect('/error')
    }
  }
  // Hardcoded credit information
  const usedCredits = 3450
  const remainingCredits = 6550
  const totalCredits = usedCredits + remainingCredits
  const usagePercentage = Math.round((usedCredits / totalCredits) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1  px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
            <p className="text-gray-500">Manage your API keys, credits, and webhook settings.</p>
          </div>

          <ApiKeySection apiKey={api_key} />

          {/* Credits Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">SMS Credits</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Used Credits</CardTitle>
                  <CardDescription>Current billing period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{usedCredits.toLocaleString()}</span>
                    <span className="text-gray-500">SMS</span>
                  </div>
                  <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${usagePercentage}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{usagePercentage}% of your plan used</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Remaining Credits</CardTitle>
                  <CardDescription>Current billing period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{remainingCredits.toLocaleString()}</span>
                    <span className="text-gray-500">SMS</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Plan renews on May 1, 2025</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/purchase-credits">Buy More</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Webhook Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Webhook Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Delivery Webhook</CardTitle>
                <CardDescription>
                Responses from the people you&apos;ve contacted will be sent to this URL.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookForm />
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
