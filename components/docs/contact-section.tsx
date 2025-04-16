import DocSection from "@/components/docs/doc-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactSection() {
  return (
    <DocSection id="contact" title="Contact Us">
      <p>
        If you have any questions, feedback, or need assistance with our API, our team is here to help. Feel free to
        reach out to us.
      </p>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Support
            </CardTitle>
            <CardDescription>Get in touch with our technical team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:ia.school.app@gmail.com">ia.school.app@gmail.com</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              API Help
            </CardTitle>
            <CardDescription>Get help with API integration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">For technical questions about API integration, please include:</p>
            <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
              <li>Your account email</li>
              <li>Detailed description of the issue</li>
              <li>Code samples (if applicable)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          We typically respond to all inquiries within 48 hours during business days.
        </p>
      </div>
    </DocSection>
  )
}
