import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MessageSquare className="h-6 w-6" />
            <span>SMSimplAPI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/billing-history" className="text-sm font-medium hover:text-primary transition-colors">
            Billing History
          </Link>
          <Link href="/sms-history" className="text-sm font-medium hover:text-primary transition-colors">
            SMS History
          </Link>
          <Link href="/purchase-credits" className="text-sm font-medium hover:text-primary transition-colors">
            Purchase Credits
          </Link>
          <Button variant="outline" asChild>
            <Link href="/logout">Logout</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}
