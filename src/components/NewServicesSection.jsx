import { Link } from 'react-router-dom'

const techServices = [
  {
    title: 'Technology Consulting',
    desc: 'Strategic technology advisory for financial institutions and FinTech platforms. We architect scalable, secure, and compliant technology stacks that align with your business goals and regulatory obligations across global jurisdictions.',
    icon: 'M9.75 3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75m9 3.75a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'SaaS Platform Engineering',
    desc: 'End-to-end SaaS platform design and development for financial services. From multi-tenant architecture and subscription management to compliance-ready infrastructure, we build SaaS products that scale from thousands to millions of users.',
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
  },
  {
    title: 'Software Development',
    desc: 'Custom software engineering for financial platforms, reconciliation engines, compliance systems, and payment infrastructure. Our teams deliver production-ready code using modern frameworks, CI/CD pipelines, and test-driven development methodologies.',
    icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 9h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z',
  },
  {
    title: 'Technology Development',
    desc: 'Full-stack technology development services covering cloud-native architecture, API engineering, microservices deployment, and legacy modernisation. We build the critical technology infrastructure that powers modern financial operations at global scale.',
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
  },
]

export default function NewServicesSection() {
  return (
    <>
      {/* ===== TECHNOLOGY SOLUTIONS — Bento Glassmorphism ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1428] via-[#111D3A] to-[#0B1428] py-20 sm:py-28">
        <div className="absolute -right-6 top-6 hidden h-[260px] w-[340px] overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10 lg:block">
          <img
            src="https://media.istockphoto.com/id/2183468112/photo/two-professionals-in-formal-attire-examine-and-interact-with-flowing-digital-wave-on-colorful.jpg?s=612x612&w=0&k=20&c=zpHMGrzPVODgXRB9stnqJCG6sJURqIimrBy_7yqrfAE="
            alt="Technology professionals"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B8AFF]">
              Enterprise Technology
            </span>
            <h2
              className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Technology Solutions for
              <br />
              <span className="bg-gradient-to-r from-[#6B8AFF] via-[#A78BFA] to-[#6B8AFF] bg-clip-text text-transparent">
                Modern Finance
              </span>
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              From strategic technology consulting to full-stack software engineering,
              we deliver premium SaaS platforms and enterprise-grade technology solutions
              for the world&rsquo;s most ambitious financial institutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {techServices.map((svc, i) => (
              <div
                key={svc.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#6B8AFF]/5 sm:p-8 lg:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(107,138,255,0.08), rgba(167,139,250,0.05), transparent)',
                  }}
                />
                <div className="relative z-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-white ring-1 ring-white/[0.08] transition-all duration-500 group-hover:bg-[#6B8AFF]/10 group-hover:ring-[#6B8AFF]/30 sm:h-14 sm:w-14">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                    </svg>
                  </span>
                  <h3
                    className="mt-5 text-lg font-bold text-white sm:text-xl"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-white/50 sm:text-[15px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINANCIAL SOLUTIONS — Floating Gradient Cards ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-white to-[#F5F0FF] py-20 sm:py-28">
        <div className="absolute -left-4 top-6 hidden h-[200px] w-[260px] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 lg:block">
          <img
            src="https://media.istockphoto.com/id/1283432364/photo/financial-graph-and-technology-element-on-mobile-phone-3d-rendering.jpg?s=612x612&w=0&k=20&c=o8rbcJqCgx-4rXWWe444p9N3KLW9aTHgYbgC2L8FF8o="
            alt="Financial mobile analytics"
            className="h-full w-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#6B8AFF]/5 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#A78BFA]/5 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <span className="inline-block rounded-full border border-[#6B8AFF]/20 bg-[#6B8AFF]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B8AFF]">
              Financial Infrastructure
            </span>
            <h2
              className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B1428] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Payment &amp; Financial
              <br />
              <span className="bg-gradient-to-r from-[#6B8AFF] via-[#8B5CF6] to-[#6B8AFF] bg-clip-text text-transparent">
                Infrastructure Solutions
              </span>
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Comprehensive payment aggregation and Aadhaar-enabled payment system (AEPS)
              solutions designed for banks, FinTech platforms, and financial service providers
              across India and emerging markets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {/* Payment Aggregators */}
            <div className="group relative rounded-3xl bg-white p-8 shadow-[0_8px_40px_-8px_rgba(107,138,255,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_-8px_rgba(107,138,255,0.2)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(107,138,255,0.03), rgba(139,92,246,0.03))',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6B8AFF] to-[#8B5CF6] text-white shadow-lg shadow-[#6B8AFF]/20 sm:h-16 sm:w-16">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700 shadow-sm ring-1 ring-amber-200/50 sm:text-xs">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    Approval Under Process
                  </span>
                </div>
                <h3
                  className="mt-5 text-xl font-bold text-[#0B1428] sm:text-2xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Payment Aggregator Services
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Recon FinTech Consultancy is building a comprehensive payment aggregation
                  platform that will enable businesses to accept, process, and reconcile
                  payments across multiple channels&mdash;including UPI, credit/debit cards,
                  net banking, and digital wallets. Our PA infrastructure is currently under
                  regulatory approval and will offer seamless integration, real-time settlement,
                  and automated reconciliation out of the box.
                </p>
                <ul className="mt-5 space-y-2.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {[
                    'Multi-channel payment acceptance (UPI, cards, net banking, wallets)',
                    'Real-time settlement and automated reconciliation',
                    'PCI DSS compliant infrastructure',
                    'Seamless REST API integration for platforms and marketplaces',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AEPS */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1428] to-[#1A2744] p-8 shadow-[0_8px_40px_-8px_rgba(11,20,40,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_-8px_rgba(11,20,40,0.35)] sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#6B8AFF]/5 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#A78BFA]/5 blur-3xl" />
              <div className="relative z-10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-500/20 sm:h-16 sm:w-16">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </span>
                <h3
                  className="mt-5 text-xl font-bold text-white sm:text-2xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AEPS — Aadhaar Enabled Payment System
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Recon FinTech Consultancy provides enterprise-grade AEPS (Aadhaar Enabled
                  Payment System) solutions that enable banks, financial institutions, and
                  FinTech platforms to deliver secure, biometric-authenticated financial
                  services to customers across India. Our AEPS infrastructure supports
                  cash withdrawal, balance enquiry, fund transfer, and Aadhaar-to-Aadhaar
                  payments through NPCI-certified channels.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    'Biometric Authentication',
                    'Cash Withdrawal',
                    'Balance Enquiry',
                    'Aadhaar-to-Aadhaar Transfer',
                    'Mini Statement',
                    'NPCI Certified',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-white/70 ring-1 ring-white/[0.06]">
                      <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center sm:mt-20">
            <p
              className="mb-6 text-base leading-relaxed text-[#4B5563] sm:text-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Need Payment Infrastructure or AEPS Integration?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#6B8AFF] to-[#8B5CF6] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#6B8AFF]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#6B8AFF]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B8AFF] active:scale-[0.98] sm:text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Contact Our Team
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
