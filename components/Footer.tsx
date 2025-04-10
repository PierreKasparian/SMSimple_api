import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
    <div className=" flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <MessageSquare className="h-6 w-6" />
          <span>SMSimple-API</span>
        </Link>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex md:gap-10">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm hover:underline underline-offset-4">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm hover:underline underline-offset-4">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#code-example" className="text-sm hover:underline underline-offset-4">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-sm hover:underline underline-offset-4">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm hover:underline underline-offset-4">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} SMSimple-API. All rights reserved.</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer