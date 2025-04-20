interface GuideHeroProps {
    title: string
    subtitle: string
  }
  
  export default function GuideHero({ title, subtitle }: GuideHeroProps) {
    return (
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{title}</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    )
  }
  