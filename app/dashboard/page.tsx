"use server"

import { NavBar } from "@/components/dashboard/Navbar"
import ApiKeySection from "@/components/dashboard/ApiKeySection"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { randomBytes } from "crypto"
import bcrypt from 'bcrypt';
import CreditSection from "@/components/dashboard/CreditSection"
import { getUsedCredits, getCredits } from "@/utils/supabase/queries"
// import WebhookSection from "@/components/dashboard/WebhookSection"
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
  const supabase = await createClient()
  const { data: user_data } = await supabase.auth.getUser()
  const user_id = user_data.user!.id
  const usedCredits = await getUsedCredits(user_id)
  const remainingCredits = await getCredits(user_id)
  const totalCredits = usedCredits + remainingCredits
  const usagePercentage = totalCredits === 0 ? 100 : Math.round((usedCredits / totalCredits) * 100)

  return (
    <div className="flex flex-col">
      <NavBar />
      
      <main className="flex-1  px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
            <p className="text-gray-500">Manage your API keys and credits.</p>
          </div>

          <ApiKeySection apiKey={api_key} />

          <CreditSection usedCredits={usedCredits} remainingCredits={remainingCredits} usagePercentage={usagePercentage} />

          {/* <WebhookSection /> */}
        </div>
      </main>
    </div>
  )
}
