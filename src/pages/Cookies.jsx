import { Helmet } from 'react-helmet-async'

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — reconfintech.com</title>
        <meta name="description" content="Cookie policy for reconfintech.com. Learn about how we use cookies and similar technologies." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Policies</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-body/70">Last updated: July 1, 2026</p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl text-body">
          <h2 className="mb-4 text-xl font-bold text-ink">1. What Are Cookies</h2>
          <p className="mb-6 leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help us improve your browsing experience by remembering your preferences and understanding how you interact with our site.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">2. How We Use Cookies</h2>
          <p className="mb-6 leading-relaxed">We use essential cookies necessary for the website to function, analytics cookies to understand how visitors use our site, and preference cookies to remember your settings. We do not use advertising or tracking cookies.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">3. Managing Cookies</h2>
          <p className="mb-6 leading-relaxed">Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect the functionality of our website. For more information about managing cookies, visit aboutcookies.org.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">4. Changes to This Policy</h2>
          <p className="mb-6 leading-relaxed">We may update this Cookie Policy from time to time. We will notify you of any material changes by posting the new policy on this page.</p>

          <h2 className="mb-4 text-xl font-bold text-ink">5. Contact</h2>
          <p className="mb-6 leading-relaxed">If you have any questions about our use of cookies, please contact us at info@reconfintech.com.</p>
        </div>
      </section>
    </>
  )
}
