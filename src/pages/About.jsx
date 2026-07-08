import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const stats = [
  { value: '$50B+', label: 'Transactions Audited' },
  { value: '200+', label: 'Financial Experts Worldwide' },
  { value: '15+', label: 'Global Jurisdictions' },
  { value: '99.99%', label: 'Reconciliation Accuracy' },
]

const values = [
  {
    title: 'Reconciliation Precision',
    desc: 'Recon FinTech Consultancy was founded on a simple principle: financial reconciliation should be automated, auditable, and absolute. Our AI-driven ledger matching software and automated transaction reconciliation systems deliver 99.99% accuracy for every engagement, eliminating the systemic risk of manual reconciliation errors in enterprise financial operations.',
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'Regulatory Compliance First',
    desc: 'Every solution we design at Recon FinTech Consultancy is built with compliance-first thinking. SOC 2 Type II, ISO 27001, and GDPR form the baseline of our delivery standards. Our FinTech compliance data auditing frameworks are deployed at regulated financial institutions across 15+ jurisdictions, ensuring full auditability and regulatory readiness.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  {
    title: 'Enterprise-Grade Partnership',
    desc: 'We embed with our clients, share their risk, and measure our success by the reconciliation accuracy and operational efficiency they achieve. Recon FinTech Consultancy builds multi-year partnerships with tier-1 banks, neo-challenger startups, and enterprise financial platforms, delivering automated transaction reconciliation systems that scale with their growth.',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
]

const leadership = [
  { name: 'Dr. Arjun Mehta', role: 'CEO & Co-Founder', bg: 'from-amber-200 to-amber-400' },
  { name: 'Sarah Chen', role: 'CTO & Co-Founder', bg: 'from-sky-200 to-sky-400' },
  { name: 'Rahul Kapoor', role: 'Head of Reconciliation Engineering', bg: 'from-emerald-200 to-emerald-400' },
  { name: 'Priya Sharma', role: 'VP Compliance & Audit', bg: 'from-violet-200 to-violet-400' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Recon FinTech Consultancy — Enterprise Reconciliation &amp; Compliance Experts</title>
        <meta name="description" content="Recon FinTech Consultancy is a specialist automated reconciliation and FinTech compliance data auditing firm. 200+ financial experts, $50B+ transactions audited, SOC 2 Type II certified. Top FinTech consultancy in India serving banks and neo-challenger platforms across 15+ jurisdictions." />
        <meta name="keywords" content="Recon FinTech Consultancy, Recon FinTech India, about Recon FinTech, best finance reconciliation architects, B2B financial data consulting agency, enterprise financial reconciliation solutions" />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">About Recon FinTech Consultancy</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Enterprise Automated Reconciliation, <br />
          <span className="text-primary">Built Different</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Recon FinTech Consultancy is the best finance reconciliation architects for enterprise financial
          institutions and neo-challenger startups. Founded in 2010, we have audited over $50 billion in
          transactions across 15+ jurisdictions, deploying automated transaction reconciliation systems
          and FinTech compliance data auditing frameworks that reduce financial close cycles from weeks
          to minutes and eliminate manual reconciliation risk at scale.
        </p>
      </section>

      <section className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border-soft bg-surface p-6 text-center shadow-soft">
              <span className="block text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">{s.value}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-body/70">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-heading" className="section-container pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">Our Principles</span>
          <h2 id="values-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            What Sets Recon FinTech Apart
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className="card-surface flex flex-col p-6 sm:p-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                </svg>
              </span>
              <h3 className="mb-2 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-body">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className="section-container pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">Leadership</span>
          <h2 id="leadership-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Meet the Recon FinTech Team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
            Our leadership team brings together decades of experience across financial reconciliation,
            payment infrastructure, regulatory compliance, and enterprise technology.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {leadership.map((person) => (
            <div key={person.name} className="card-surface overflow-hidden p-0">
              <div className={`flex h-40 items-end justify-center bg-gradient-to-br p-6 md:h-48 ${person.bg}`}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-ink shadow-md md:h-24 md:w-24 md:text-xl">
                  {person.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-base font-bold text-ink">{person.name}</h3>
                <p className="mt-1 text-sm text-body">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container pb-16 md:pb-20 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-surface-soft px-8 py-14 text-center shadow-soft sm:rounded-3xl sm:px-14 sm:py-20 lg:px-20">
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Join the Recon FinTech Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            We are always looking for exceptional reconciliation engineers, compliance analysts, and
            financial data architects who share our passion for automated financial infrastructure.
          </p>
          <div className="mt-8">
            <Link to="/careers" className="btn-primary">View Open Positions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
