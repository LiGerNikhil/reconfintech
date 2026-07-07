import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const services = [
  {
    title: 'Payment Infrastructure',
    desc: 'Real-time payment rails, gateway integrations, settlement orchestration, and ISO\u00a020022 migration strategies built for high-throughput financial environments.',
    badges: ['Payments', 'Lending'],
    path: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    to: '/services/payment-infrastructure',
  },
  {
    title: 'Risk &amp; Compliance',
    desc: 'Enterprise AML/KYC programmes, real-time fraud detection engines, regulatory reporting pipelines, and audit-ready control frameworks.',
    badges: ['Compliance', 'Risk Analytics'],
    path: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    to: '/services/risk-compliance',
  },
  {
    title: 'Data Engineering',
    desc: 'Scalable data lakehouse architectures, real-time streaming pipelines, governance tooling, and BI layer design for data-driven decision-making.',
    badges: ['Data', 'Pipelines'],
    path: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    to: '/services/data-engineering',
  },
  {
    title: 'Platform Architecture',
    desc: 'Cloud-native microservices, Kubernetes orchestration, API gateway design, and resilient infrastructure patterns targeting 99.99% availability.',
    badges: ['Cloud', 'DevOps'],
    path: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    to: '/services/platform-architecture',
  },
  {
    title: 'Financial Analytics',
    desc: 'Executive dashboards, forecasting models, regulatory MIS, and real-time portfolio analytics powered by event-driven data architectures.',
    badges: ['Analytics', 'Reporting'],
    path: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    to: '/services/financial-analytics',
  },
  {
    title: 'Cybersecurity Advisory',
    desc: 'Penetration testing, SOC\u00a02/ISO\u00a027001 readiness, zero-trust architecture reviews, and incident response programme design for regulated entities.',
    badges: ['Security', 'Governance'],
    path: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    to: '/services/cybersecurity-advisory',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>reconfintechconsultancy.com — FinTech Consultancy</title>
        <meta name="description" content="We partner with financial institutions, fintechs, and regulatory bodies to design, build, and scale the technology that powers modern finance." />
      </Helmet>

      {/* HERO */}
      <section aria-labelledby="hero-heading" className="section-container overflow-hidden pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[6fr_4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="eyebrow-label">FinTech Advisory &amp; Engineering</span>
            <h1 id="hero-heading" className="display-heading text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
              Financial Infrastructure,<br />
              <span className="text-primary">Resilient</span> by Design
            </h1>
            <p className="max-w-[65ch] text-base leading-relaxed text-body sm:text-lg">
              We partner with financial institutions, fintechs, and regulatory
              bodies to design, build, and scale the technology that powers
              modern finance &mdash; from real-time payment rails to enterprise
              compliance frameworks.
            </p>
            <div className="flex flex-wrap gap-4 max-[400px]:flex-col">
              <Link to="/contact" className="btn-primary max-[400px]:w-full">Get Started</Link>
              <Link to="/services" className="btn-secondary max-[400px]:w-full">View Services</Link>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 border-t border-border-soft pt-8">
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">1000+</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Clients Advised</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">200+</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Engagements Delivered</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">99%</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Retention Rate</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-start">
            <div aria-hidden="true" className="hero-blob -top-10 right-0 h-[420px] w-[420px] max-sm:-right-10 max-sm:h-[300px] max-sm:w-[300px]" />
            <div className="hero-widget relative w-full max-w-md rounded-2xl border border-border-soft bg-surface p-6 shadow-soft sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-bold text-ink">Executive Briefing</span>
                  <span className="block text-xs text-body">Q3 2026 Market Outlook</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ['Regulatory Readiness', 'SOC\u00a02 &amp; ISO\u00a027001 certified infrastructure'],
                  ['Scalable Architecture', '99.99% uptime SLA design patterns'],
                  ['Global Coverage', 'Licensed across 15+ jurisdictions'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-ink">{title}</span>
                      <span className="block text-xs text-body/80" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="h-px flex-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" aria-hidden="true" />
                <Link to="/contact" className="ml-4 shrink-0 text-xs font-semibold text-primary transition-colors hover:text-primary-dark">
                  Download the brief&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section aria-label="Trusted by leading institutions" className="section-container py-12 md:py-16">
        <div className="marquee-track rounded-xl border border-border-soft bg-surface-soft/50 py-4 shadow-soft sm:py-5">
          <div className="marquee-content items-center gap-16 px-8 text-sm font-semibold uppercase tracking-widest text-body/50 sm:gap-24 sm:text-base">
            {[
              'JPMorgan Chase', 'Goldman Sachs', 'HSBC', 'Barclays',
              'BNP Paribas', 'Deutsche Bank', 'Morgan Stanley', 'Citibank',
              'UBS', 'Bank of America', 'Standard Chartered', 'Wells Fargo',
            ].map((name) => (
              <span key={name} className="mx-8 inline-block sm:mx-12">{name}</span>
            ))}
            {[
              'JPMorgan Chase', 'Goldman Sachs', 'HSBC', 'Barclays',
              'BNP Paribas', 'Deutsche Bank', 'Morgan Stanley', 'Citibank',
              'UBS', 'Bank of America', 'Standard Chartered', 'Wells Fargo',
            ].map((name) => (
              <span key={`dup-${name}`} className="mx-8 inline-block sm:mx-12">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section aria-labelledby="services-heading" className="section-container py-16 md:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">What We Do</span>
          <h2 id="services-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            End-to-End FinTech Capabilities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
            From legacy modernisation to greenfield platforms, our team delivers
            production-ready infrastructure, compliance frameworks, and data
            systems that scale with your ambition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((svc) => (
            <Link key={svc.title} to={svc.to} className="card-surface flex h-full flex-col p-6 sm:p-8 no-underline">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={svc.path} />
                </svg>
              </span>
              <h3 className="mb-2 text-lg font-semibold text-ink" dangerouslySetInnerHTML={{ __html: svc.title }} />
              <p className="mb-4 flex-1 text-sm leading-relaxed text-body">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.badges.map((b) => (
                  <span key={b} className="pill-badge">{b}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-container py-16 md:py-20 lg:py-24" aria-labelledby="cta-heading">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#0033AA] px-8 py-14 text-center shadow-mid sm:rounded-3xl sm:px-14 sm:py-20 lg:px-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.06] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-white/[0.04] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-8 top-1/3 h-40 w-40 rounded-full bg-white/[0.03] blur-xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build the Future of Finance?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you are scaling a neobank or modernising a tier-1
              institution, our team is standing by to help you move faster
              with confidence.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-250 hover:bg-white/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
                Start the Conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
