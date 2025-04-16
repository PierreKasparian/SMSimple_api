

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeBlock from "@/components/docs/code-block"

interface CodeExample {
  language: string
  code: string
}

interface LanguageTabsProps {
  examples: CodeExample[]
}

export default function LanguageTabs({ examples }: LanguageTabsProps) {

  return (
    <Tabs defaultValue={examples[0].language} className="w-full">
      <TabsList className="mb-2">
        {examples.map((example) => (
          <TabsTrigger key={example.language} value={example.language}>
            {example.language}
          </TabsTrigger>
        ))}
      </TabsList>
      {examples.map((example) => (
        <TabsContent key={example.language} value={example.language}>
          <CodeBlock code={example.code} language={example.language} />
        </TabsContent>
      ))}
    </Tabs>
  )
}
