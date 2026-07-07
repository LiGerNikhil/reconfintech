import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — reconfintechconsultancy.com</title>
        <meta name="description" content="Privacy policy for reconfintechconsultancy.com. Learn how we collect, use, and protect your personal data." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Policies</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-body/70">Last updated: July 1, 2026</p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="prose prose-sm max-w-3xl text-body sm:prose-base">
          <h2 className="mb-4 text-xl font-bold text-ink">1. Introduction</h2>
          <p className="mb-6 leading-relaxed">reconfintechconsultancy.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">2. Information We Collect</h2>
          <p className="mb-6 leading-relaxed">We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, company name, and phone number.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">3. How We Use Your Information</h2>
          <p className="mb-6 leading-relaxed">We use the information we collect to respond to your inquiries, provide our services, improve our website, send marketing communications (with your consent), and comply with legal obligations.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">4. Data Protection</h2>
          <p className="mb-6 leading-relaxed">We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We are SOC 2 Type II certified and comply with GDPR requirements.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">5. Your Rights</h2>
          <p className="mb-6 leading-relaxed">Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us at hello@reconfintechconsultancy.com.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">6. Contact</h2>
          <p className="mb-6 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at hello@reconfintechconsultancy.com.</p>
        </div>
      </section>
    </>
  )
}
