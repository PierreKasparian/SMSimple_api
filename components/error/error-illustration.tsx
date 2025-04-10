import { AlertTriangle } from "lucide-react"

export default function ErrorIllustration() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-40 h-40 rounded-full bg-red-500"></div>
        </div>
        <AlertTriangle className="h-24 w-24 text-red-500 relative z-10" />
      </div>
    </div>
  )
}
