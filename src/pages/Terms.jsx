import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — reconfintech.com</title>
        <meta name="description" content="Terms of Service for reconfintech.com. Please read these terms carefully before using our website or services." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Policies</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-body/70">Last updated: July 1, 2026</p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl text-body">
          <h2 className="mb-4 text-xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p className="mb-6 leading-relaxed">By accessing or using the reconfintech.com website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">2. Services</h2>
          <p className="mb-6 leading-relaxed">reconfintech.com provides FinTech advisory and engineering services. The specific terms of any engagement will be governed by a separate service agreement executed between you and reconfintech.com.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">3. Intellectual Property</h2>
          <p className="mb-6 leading-relaxed">All content on this website, including text, graphics, logos, and software, is the property of reconfintech.com and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">4. Limitation of Liability</h2>
          <p className="mb-6 leading-relaxed">reconfintech.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or our services.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">5. Governing Law</h2>
          <p className="mb-6 leading-relaxed">These terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">6. Contact</h2>
          <p className="mb-6 leading-relaxed">For questions about these terms, please contact us at hello@reconfintech.com.</p>
        </div>
      </section>
    </>
  )
}
