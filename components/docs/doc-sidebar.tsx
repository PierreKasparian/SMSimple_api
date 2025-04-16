"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, Globe, Mail } from "lucide-react"

export default function DocSidebar() {
  const [activeSection, setActiveSection] = useState("send-sms")

  const sections = [
    { id: "send-sms", name: "Sending SMS", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { id: "responses", name: "API Responses", icon: <ArrowRight className="h-4 w-4 mr-2" /> },
    { id: "regions", name: "Supported Regions", icon: <Globe className="h-4 w-4 mr-2" /> },
    { id: "contact", name: "Contact", icon: <Mail className="h-4 w-4 mr-2" /> },
  ]

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-5 space-y-4">
        <div className="font-medium text-sm text-gray-500 mb-2">Documentation</div>
        <nav className="flex flex-col space-y-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={cn("justify-start", activeSection === section.id && "bg-gray-100 font-medium")}
              onClick={() => {
                setActiveSection(section.id)
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {section.icon}
              {section.name}
            </Button>
          ))}
        </nav>
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/purchase-credits">Purchase Credits</Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}
