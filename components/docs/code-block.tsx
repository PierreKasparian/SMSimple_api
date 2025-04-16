import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <CopyButton code={code} />
      </div>
      <div className="rounded-lg bg-gray-900 p-4">
        <pre className="text-sm text-gray-100 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
      <div className="absolute left-4 bottom-2">
        <span className="text-xs text-gray-400">{language}</span>
      </div>
    </div>
  )
}
