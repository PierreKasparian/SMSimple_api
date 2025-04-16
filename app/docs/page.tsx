import NavBar from "@/components/Navbar"
import HowToSendSMS from "@/components/docs/how-to-send-sms"
import ResponsesSection from "@/components/docs/responses-section"
import SupportedRegionsSection from "@/components/docs/supported-regions-section"
import ContactSection from "@/components/docs/contact-section"
import DocSidebar from "@/components/docs/doc-sidebar"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="px-4 md:px-6 py-12 flex flex-col md:flex-row gap-8">
        <DocSidebar />

        <main className="flex-1 space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SMSimple-API Documentation</h1>
            <p className="text-xl text-gray-500">Learn how to integrate our SMS API into your applications</p>
          </div>

          <HowToSendSMS />
          <ResponsesSection />
          <SupportedRegionsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
