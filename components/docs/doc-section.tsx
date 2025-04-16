import type { ReactNode } from "react"

interface DocSectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function DocSection({ id, title, children }: DocSectionProps) {
  return (
    <section id={id} className="scroll-mt-16">
      <h2 className="text-2xl font-bold tracking-tight mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
