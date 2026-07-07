import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const officeHours = 'Mon–Fri, 9:00 AM – 6:00 PM EST'
const phone = '+91 87964 67671'
const email = 'hello@reconfintechconsultancy.com'
const waLink = 'https://wa.me/918796467671'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*New Inquiry from reconfintechconsultancy.com*\n\n` +
      `*Name:* ${form.firstName} ${form.lastName}\n` +
      `*Email:* ${form.email}\n` +
      `*Company:* ${form.company || 'N/A'}\n` +
      `*Interest:* ${form.interest || 'N/A'}\n` +
      `*Message:* ${form.message}`
    )
    window.open(`https://wa.me/918796467671?text=${msg}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <Helmet>
        <title>Contact Us — reconfintechconsultancy.com</title>
        <meta name="description" content="Get in touch with reconfintechconsultancy.com. Schedule a consultation with our FinTech advisory team." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Contact Us</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Let&apos;s <span className="text-primary">Build</span> Together
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Whether you have a specific project in mind or just want to explore
          how we can help, our team is standing by. Fill out the form below
          and we will get back to you within one business day.
        </p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          {/* Form */}
          <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-soft sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">First Name</label>
                  <input id="firstName" type="text" required value={form.firstName} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">Last Name</label>
                  <input id="lastName" type="text" required value={form.lastName} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">Work Email</label>
                <input id="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">Company</label>
                <input id="company" type="text" value={form.company} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Financial Institution Ltd." />
              </div>
              <div>
                <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">Area of Interest</label>
                <select id="interest" value={form.interest} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-body focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select a service</option>
                  <option>Payment Infrastructure</option>
                  <option>Risk &amp; Compliance</option>
                  <option>Data Engineering</option>
                  <option>Platform Architecture</option>
                  <option>Financial Analytics</option>
                  <option>Cybersecurity Advisory</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">Message</label>
                <textarea id="message" rows={4} required value={form.message} onChange={handleChange} className="w-full rounded-lg border border-border-soft bg-surface-soft px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </span>
              <h3 className="mb-1 mt-4 text-sm font-bold text-ink">Email Us</h3>
              <a href={'mailto:' + email} className="text-sm text-primary transition-colors hover:text-primary-dark">{email}</a>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </span>
              <h3 className="mb-1 mt-4 text-sm font-bold text-ink">Call Us</h3>
              <a href={'tel:' + phone} className="text-sm text-primary transition-colors hover:text-primary-dark">{phone}</a>
              <p className="mt-1 text-xs text-body/70">{officeHours}</p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </span>
              <h3 className="mb-1 mt-4 text-sm font-bold text-ink">WhatsApp</h3>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary transition-colors hover:text-primary-dark">Chat on WhatsApp</a>
              <p className="mt-1 text-xs text-body/70">We typically reply within 1 hour</p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="mb-1 mt-4 text-sm font-bold text-ink">Office Hours</h3>
              <p className="text-sm text-body">{officeHours}</p>
              <p className="text-xs text-body/70">Response within 1 business day</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
