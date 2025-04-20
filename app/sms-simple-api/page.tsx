import NavBar from "@/components/Navbar"
import GuideHero from "@/components/guide/guide-hero"
import GuideSection from "@/components/guide/guide-section"
import CodeBlock from "@/components/docs/code-block"
import ComparisonTable from "@/components/guide/comparison-table"
import FaqItem from "@/components/guide/faq-item"
import GuideConclusion from "@/components/guide/guide-conclusion"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MessageSquare, Shield, Bell, BarChart3 } from "lucide-react"

export default function GuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-1">
        <div className="px-4 md:px-6 py-12">
          <GuideHero
            title="The Complete Guide to SMS APIs in 2024: Simple, Global, and Cost-Effective"
            subtitle="Everything you need to know about implementing SMS in your applications"
          />

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction Section */}
            <GuideSection
              id="introduction"
              title="Introduction: Why Businesses Need an SMS API"
              icon={<MessageSquare className="h-5 w-5" />}
            >
              <p className="text-gray-700 leading-relaxed">
                In an era where 95% of text messages are read within 3 minutes (Source: Gartner), automating SMS
                communication isn&apos;t just convenient—it&apos;s a competitive necessity. Whether you&apos;re a developer building
                two-factor authentication (2FA) for a SaaS product or a marketer streamlining campaign workflows, a
                reliable SMS API bridges the gap between your systems and global mobile networks.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This guide covers everything from API basics to advanced use cases, with transparent comparisons to
                Twilio and actionable code samples. 
              </p>
            </GuideSection>

            <Separator />

            {/* Understanding SMS APIs Section */}
            <GuideSection
              id="understanding-sms-apis"
              title="1. Understanding SMS APIs: The Technical Foundation"
              icon={<Shield className="h-5 w-5" />}
            >
              <p className="text-gray-700 leading-relaxed">
                An SMS API (Application Programming Interface) allows software to send and receive text messages without
                manual intervention. Think of it as a digital postman: your application hands it a message (via HTTP
                requests), and the API delivers it to phones worldwide through partnerships with telecom carriers.
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Key Technical Advantages Over Manual SMS:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Scalability</span>: Send 10 or 10 million messages with identical
                    code.
                  </li>
                  <li>
                    <span className="font-medium">Speed</span>: Deliver messages in &lt;1 second (vs. manual typing).
                  </li>
                  <li>
                    <span className="font-medium">Integration</span>: Works with Python, Node.js, Ruby, and low-code
                    platforms like Zapier.
                  </li>
                </ul>
              </div>

              <Card className="mt-6 bg-gray-50 border-gray-200">
                <blockquote className="p-4 italic text-gray-700">
                  <p>
                    <em>
                      Example: A ride-sharing app uses an SMS API to notify drivers of new ride requests. Without
                      automation, dispatching teams would need to manually text hundreds of drivers hourly—a logistical
                      nightmare.
                    </em>
                  </p>
                </blockquote>
              </Card>
            </GuideSection>

            <Separator />

            {/* Use Cases Section */}
            <GuideSection
              id="use-cases"
              title="2. Top Use Cases Driving SMS API Adoption"
              icon={<Bell className="h-5 w-5" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transactional Notifications</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Transactional SMS—such as order confirmations, shipping updates, or appointment reminders—require
                    99.9% reliability. Traditional email alternatives suffer from inbox clutter (average open rate:
                    20%), whereas SMS achieves 98% open rates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Two-Factor Authentication (2FA)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Despite the rise of authenticator apps, SMS-based 2FA remains the most user-friendly option for
                    securing accounts. APIs enable instant OTP (one-time password) delivery without third-party
                    services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    <span className="font-semibold">Critical Note</span>: To avoid carrier filtering, 2FA messages must
                    comply with A2P 10DLC regulations—a process our API handles automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketing Campaigns</h3>
                  <p className="text-gray-700 leading-relaxed">
                    SMS marketing boasts a 45% average response rate (vs. 6% for email). However, spam filters are
                    stringent.
                  </p>
                </div>
              </div>
            </GuideSection>

            <Separator />

            {/* Comparison Section */}
            <GuideSection
              id="comparison"
              title="3. Twilio Alternative? How SMSimple-API Compares"
              icon={<BarChart3 className="h-5 w-5" />}
            >
              <p className="text-gray-700 leading-relaxed">
                Twilio dominates the SMS API market, but its pricing and complexity leave room for leaner alternatives.
                Here&apos;s a detailed breakdown:
              </p>

              <div className="my-6">
                <ComparisonTable />
              </div>
            </GuideSection>

            <Separator />

            {/* Tutorials Section */}
            <GuideSection
              id="tutorials"
              title="4. Sending Your First SMS: Python and Node.js Tutorials"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Python Implementation</h3>
                  <CodeBlock
                    language="Python"
                    code={`import requests

# Your API key
api_key = "your_api_key_here"

# API endpoint
url = "https://smsimple-api.vercel.app/sms-api/sendsms"

# Message details
payload = {
    "to": "+1234567890",
    "message": "Hello from SMSimple-API!"
}

# Headers
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# Send the request
response = requests.post(url, json=payload, headers=headers)

# Check the response
if response.status_code == 200:
    print("SMS sent successfully!")
    print(response.json())
else:
    print(f"Error: {response.status_code}")
    print(response.json())`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Node.js Implementation</h3>
                  <CodeBlock
                    language="JavaScript"
                    code={`// Send a message
const url = "https://smsimple-api.vercel.app/sms-api/sendsms";
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

const response = await fetch(url, {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${apiKey}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    to: "+1234567890", // Replace with recipient number
    message: "Hello from SMSimple-API!", // Replace with your message
  }),
})
console.log(response);`}
                  />

                </div>
              </div>
            </GuideSection>

            <Separator />

            {/* FAQ Section */}
            <GuideSection id="faq" title="5. Frequently Asked Questions">
              <div className="space-y-6">
                <FaqItem
                  question="How reliable is international SMS delivery?"
                  answer="Our API routes messages through reliable platforms achieving high delivery rates."
                />

                <FaqItem
                  question="Can I send SMS via REST API without SDKs?"
                  answer={
                    <>
                      <p>Absolutely. Here&apos;s a curl example:</p>
                      <div className="mt-2">
                        <CodeBlock
                          language="bash"
                          code={`curl -X POST "https://smsimple-api.vercel.app/sms-api/sendsms" ^
     -H "Authorization: Bearer YOUR_API_KEY" ^
     -H "Content-Type: application/json" ^
     -d "{"to": "+1234567890", "message": "Hello from SMSimple-API!"}"
`}
                        />
                      </div>
                    </>
                  }
                />

                <FaqItem
                  question="What's the cheapest way to send mass SMS?"
                  answer="For around 100k messages, our volume tier drops prices to $0.02/credit. For higher demand, you can contact us for custom plans."
                />
              </div>
            </GuideSection>

            <Separator />

            {/* Conclusion Section */}
            <GuideConclusion />
          </div>
        </div>
      </main>
    </div>
  )
}
