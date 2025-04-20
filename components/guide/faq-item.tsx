import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FaqItemProps {
  question: string
  answer: ReactNode
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700">{answer}</CardContent>
    </Card>
  )
}
