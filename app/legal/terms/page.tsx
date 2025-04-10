import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
    <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last Updated: 10/04/2025</p>
        </header>

        <div className="prose prose-lg">
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Service Overview</h2>
                <p>SMSimple-API provides a simplified API for sending and receiving SMS messages. When you sign up, you receive <strong>3 free credits</strong> (1 credit = 1 SMS). Additional credits can be purchased on our website.</p>
                
                <p className="mt-2">Key features:</p>
                <ul className="list-disc pl-5">
                    <li>Send SMS to any phone number</li>
                    <li>Receive replies via webhook (if configured in your dashboard)</li>
                    <li>No sender number control—messages are sent via our infrastructure</li>
                </ul>
                
                <p className="mt-2">Our service relies on <strong>Twilio</strong>, a third-party provider. SMSimple-API stores message metadata for 30 days but does not store message content after delivery.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Eligibility & Account</h2>
                <ul className="list-disc pl-5">
                    <li>You must be at least <strong>18 years old</strong> or have legal consent to use SMSimple-API</li>
                    <li>You are responsible for maintaining account security and all activity under your account</li>
                    <li>Free credits are for evaluation only. Abuse (e.g., spam) will result in account termination</li>
                    <li>You must implement reasonable security measures to protect your account credentials</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Purchases & Refunds</h2>
                <ul className="list-disc pl-5">
                    <li>Credits are non-refundable unless required by law</li>
                    <li>We reserve the right to modify pricing with notice</li>
                    <li>All payments are processed through third-party providers (Stripe, PayPal, etc.)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Prohibited Uses</h2>
                <p>You <strong>must not</strong> use SMSimple-API for:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Illegal, fraudulent, or harmful activities</li>
                    <li>Spam, phishing, or unsolicited messages (comply with <a href="https://www.twilio.com/docs/glossary/what-is-a2p-10dlc" className="text-blue-600 hover:underline">Twilio&apos;s A2P 10DLC</a> and carrier rules)</li>
                    <li>Harassment, threats, or violating privacy rights</li>
                    <li>Reverse-engineering or disrupting our service</li>
                </ul>
                <p>Violations may result in <strong>immediate suspension</strong> without refund.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Data & Privacy</h2>
                <ul className="list-disc pl-5">
                    <li>SMSimple-API stores message metadata (phone numbers, timestamps) for <strong>30 days</strong> but does not store message content after delivery</li>
                    <li>Twilio&apos;s privacy practices apply to message handling. Review their <a href="https://www.twilio.com/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                    <li>You are solely responsible for complying with data protection laws (e.g., GDPR, TCPA)</li>
                    <li>You may request account deletion at any time by contacting us</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Third-Party Services</h2>
                <p>Our service depends on:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Twilio</strong> for SMS delivery infrastructure</li>
                    <li><strong>Payment processors</strong> (Stripe, PayPal) for transactions</li>
                    <li><strong>Cloud providers</strong> for hosting</li>
                </ul>
                <p className="mt-2">Their terms and policies apply to their respective services.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Service Limitations</h2>
                <ul className="list-disc pl-5">
                    <li>Delivery depends on carriers and third-party providers. We <strong>do not guarantee</strong> 100% uptime or delivery</li>
                    <li>We may suspend service for maintenance, legal compliance, or abuse prevention</li>
                    <li>API rate limits may apply</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Termination</h2>
                <ul className="list-disc pl-5">
                    <li>We may terminate your access for violations, non-payment, or inactivity</li>
                    <li>You may request account deletion at any time</li>
                    <li>Upon termination, your right to use the service immediately ceases</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Disclaimer & Liability</h2>
                <p>SMSimple-API is provided <strong>&quot;as is.&quot;</strong> We disclaim all warranties (express or implied).</p>
                
                <p className="mt-2">We are <strong>not liable</strong> for:</p>
                <ul className="list-disc pl-5">
                    <li>Message content or recipient actions</li>
                    <li>Twilio-related issues (e.g., delivery failures, fees)</li>
                    <li>Indirect damages (e.g., lost profits)</li>
                    <li>Third-party service disruptions</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
                <p>We may update these Terms. Continued use after changes constitutes acceptance. We will notify users of material changes.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">11. Contact</h2>
                <p>Questions? Email us at <a href="mailto:ia.school.app@gmail.com" className="text-blue-600 hover:underline">ia.school.app@gmail.com</a>.</p>
                <p className="mt-2"><em>SMSimple-API is not affiliated with Twilio Inc. Twilio&apos;s terms apply to underlying messaging services.</em></p>
            </section>
        </div>
    </div>
</div>
  )
}

export default page