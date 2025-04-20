import type { ReactNode } from "react"

interface GuideSectionProps {
  id: string
  title: string
  children: ReactNode
  subtitle?: string
  icon?: ReactNode
}

export default function GuideSection({ id, title, children, subtitle, icon }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          {title}
        </h2>
        {subtitle && <p className="text-sm text-gray-500 mt-1 italic">{subtitle}</p>}
      </div>
      <div>{children}</div>
    </section>
  )
}
