import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
        <Navbar />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: 10/04/2025</p>
        </header>

        <div className="prose prose-lg">
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p>SMSimple-API (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the SMS API service that allows developers to send and receive SMS messages. We are committed to protecting your privacy and being transparent about how we handle your information.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="font-medium mb-2">Account Information:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Email address</li>
                    <li>Password (hashed)</li>
                    <li>Credit balance and transaction history</li>
                    <li>Webhook URLs you configure</li>
                </ul>

                <h3 className="font-medium mb-2">SMS Data:</h3>
                <ul className="list-disc pl-5">
                    <li>Phone numbers you send messages to</li>
                    <li>Message metadata (timestamps, delivery status)</li>
                    <li>Message content is processed but <strong>not stored</strong> after delivery</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. How We Use Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Provide and maintain our service</li>
                    <li>Process transactions and prevent fraud</li>
                    <li>Deliver replies via your configured webhooks</li>
                    <li>Respond to support requests</li>
                </ul>
                <p>We <strong>do not</strong> sell your data or use it for marketing.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Third-Party Services</h2>
                <p>Our service relies on Twilio for SMS delivery. When you send messages:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Twilio receives phone numbers and message content</li>
                    <li>Their <a href="https://www.twilio.com/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> applies to their processing</li>
                </ul>
                <p>We may use other subprocessors for:</p>
                <ul className="list-disc pl-5">
                    <li>Payment processing (Stripe, PayPal)</li>
                    <li>Hosting infrastructure</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Data Retention</h2>
                <ul className="list-disc pl-5">
                    <li>Account information: Retained while your account is active</li>
                    <li>SMS metadata: 30 days for operational purposes</li>
                    <li>Message content: Not stored after delivery</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
                <p>You may:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Access or delete your account data</li>
                    <li>Request export of your transaction history</li>
                    <li>Opt out of non-essential communications</li>
                </ul>
                <p>Contact us at [Your Email] to exercise these rights.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Security</h2>
                <p>We implement measures including:</p>
                <ul className="list-disc pl-5">
                    <li>Encryption in transit (HTTPS/TLS)</li>
                    <li>Secure hashing for passwords</li>
                    <li>Regular security reviews</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
                <p>We may update this policy. Continued use after changes constitutes acceptance.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p>Questions? Email <a href="mailto:ia.school.app@gmail.com" className="text-blue-600 hover:underline">ia.school.app@gmail.com</a>.</p>
            </section>
        </div>
    </div>
</div>
  )
}

export default page