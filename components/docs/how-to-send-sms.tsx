import DocSection from "@/components/docs/doc-section"
import LanguageTabs from "@/components/docs/language-tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function HowToSendSMS() {
  const codeExamples = [
    {
      language: "Python",
      code: `import requests

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
    print(response.json())`,
    },
    {
      language: "JavaScript",
      code: `// Send a message
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
console.log(response);`,
    },
    {
      language: "cURL",
      code: `curl -X POST "https://smsimple-api.vercel.app/sms-api/sendsms" ^
     -H "Authorization: Bearer YOUR_API_KEY" ^
     -H "Content-Type: application/json" ^
     -d "{\"to\": \"+1234567890\", \"message\": \"Hello from SMSimple-API!\"}"
`,
    },
  ]

  return (
    <DocSection id="send-sms" title="How to Send an SMS">
      <p>
        Sending an SMS with SMSimple-API is simple. Make a POST request to our endpoint with your message details and API
        key.
      </p>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          You need to have sufficient credits in your account to send SMS messages. Each message consumes a different
          number of credits depending on the destination country.
        </AlertDescription>
      </Alert>

      <h3 className="text-xl font-semibold mt-6 mb-2">API Endpoint</h3>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>POST /sms-api/sendsms</CardTitle>
          <CardDescription>Send an SMS message to a specified phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h4 className="font-medium mb-2">Headers</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <span className="font-mono text-primary">Authorization</span>: Bearer Your_API_KEY
                </li>
                <li>
                  <span className="font-mono text-primary">Content-Type</span>: application/json
                </li>
                
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Request Body</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <span className="font-mono text-primary">to</span>: Recipient's phone number (E.164 format)
                </li>
                <li>
                  <span className="font-mono text-primary">message</span>: The text message to send
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-xl font-semibold mt-6 mb-2">Code Examples</h3>
      <LanguageTabs examples={codeExamples} />
    </DocSection>
  )
}
