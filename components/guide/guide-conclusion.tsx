import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function GuideConclusion() {
  return (
    <section id="conclusion">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Conclusion: Why Developers Love Our API</h2>

      <p className="text-gray-700 mb-6">Unlike legacy providers, SMSimple-API eliminates two pain points:</p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-2">
          <div className="mt-1 bg-primary/10 p-1 rounded-full">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium">Complex pricing</p>
            <p className="text-gray-600">No hidden fees—predictable costs even for global SMS.</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="mt-1 bg-primary/10 p-1 rounded-full">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium">Documentation hell</p>
            <p className="text-gray-600">Our interactive API playground lets you test calls without writing code.</p>
          </div>
        </div>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-xl">Ready to simplify SMS?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="secondary" asChild>
            <Link href="/login">Start Free Trial</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/docs">Read Developer Docs</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="mailto:ia.school.app@gmail.com">Book a Demo</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
