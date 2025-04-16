import Link from "next/link"
import DocSection from "@/components/docs/doc-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ExternalLink } from "lucide-react"

export default function SupportedRegionsSection() {
  return (
    <DocSection id="regions" title="Supported Regions">
      <p>
        SMSimple-API supports sending SMS messages to multiple countries worldwide. Each country has a different credit cost
        per message.
      </p>

      <Card className="mt-4">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Country Coverage
          </CardTitle>
          <CardDescription>
            View the complete list of supported countries, their area codes, and credit costs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/regions">
              View Country Coverage <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          Note: Service availability may change over time. The country coverage page always displays the most up-to-date
          information.
        </p>
      </div>
    </DocSection>
  )
}
