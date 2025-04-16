import DocSection from "@/components/docs/doc-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CodeBlock from "@/components/docs/code-block"

export default function ResponsesSection() {
  const successResponse = `{
  "response": {
    "body": "Hello from SMSimple-API !",
    "status": "queued"
  }
}`

  const errorResponses = [
    {
      status: 400,
      title: "Bad Request",
      description: "Missing required fields",
      example: `{
  "detail": "Missing \\"to\\" or \\"message\\" required fields"
}`,
    },
    {
      status: 403,
      title: "Forbidden",
      description: "Invalid API key or insufficient credits",
      example: `{
  "detail": "Invalid API key"
}

// OR

{
  "detail": "Insufficient credits"
}`,
    },
    {
      status: 500,
      title: "Server Error",
      description: "Internal server error",
      example: `{
  "detail": "Failed to update credits. SMS not sent"
}

// OR

{
  "detail": "An error occured sending the SMS"
}`,
    },
  ]

  return (
    <DocSection id="responses" title="API Responses">
      <p>
        Our API returns responses in JSON format. Below are the possible responses you might receive when using the
        SMSimple-API API.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Successful Response</h3>
      <p className="mb-2">
        When your SMS is sent successfully, you&apos;ll receive a 200 OK response with the following structure:
      </p>
      <CodeBlock code={successResponse} language="json" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Error Responses</h3>
      <p className="mb-4">
        If there&apos;s an issue with your request, you&apos;ll receive one of the following error responses:
      </p>

      <div className="grid gap-4">
        {errorResponses.map((error) => (
          <Card key={error.status}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{error.title}</CardTitle>
                <Badge variant="outline">{error.status}</Badge>
              </div>
              <p className="text-sm text-gray-500">{error.description}</p>
            </CardHeader>
            <CardContent>
              <CodeBlock code={error.example} language="json" />
            </CardContent>
          </Card>
        ))}
      </div>
    </DocSection>
  )
}
