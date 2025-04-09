import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
    <div className=" flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <MessageSquare className="h-6 w-6" />
          <span>SMSimplAPI</span>
        </Link>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex md:gap-10">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline underline-offset-4">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} SMSimplAPI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-500 hover:text-gray-900">
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
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
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
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
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
              className="h-5 w-5"
            >
              <path d="M12 2H2v10h10V2zM22 2h-10v10h10V2zM12 12H2v10h10V12zM22 12h-10v10h10V12z"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer