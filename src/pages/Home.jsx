import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import RevealOnScroll from '../components/RevealOnScroll'
import NewServicesSection from '../components/NewServicesSection'
import CoreCapabilities from '../components/CoreCapabilities'

const featuredServices = [
  {
    title: 'Automated Transaction Reconciliation',
    desc: 'Enterprise-grade automated financial reconciliation solutions that eliminate manual ledger matching. Our AI-driven reconciliation engine processes millions of transactions in real time, flagging anomalies, duplications, and settlement gaps across payment rails, bank statements, and internal ledgers.',
    badges: ['Reconciliation', 'Automation'],
    path: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    to: '/services/automated-reconciliation',
  },
  {
    title: 'FinTech Compliance & Data Auditing',
    desc: 'Regulatory-ready FinTech compliance data auditing frameworks designed for fast-scaling financial platforms. We build AML/KYC transaction monitoring, regulatory reporting pipelines, and audit-ready control architectures that satisfy SOC 2, ISO 27001, and GDPR obligations.',
    badges: ['Compliance', 'Audit'],
    path: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    to: '/services/compliance-auditing',
  },
  {
    title: 'Multi-Payment Gateway Reconciliation',
    desc: 'Unified multi-payment gateway reconciliation services that consolidate transaction data from Visa, Mastercard, UPI, PayPal, Stripe, and 50+ global acquirers into a single auditable ledger. Eliminate revenue leakage and accelerate settlement cycles with automated exception handling.',
    badges: ['Payments', 'Gateways'],
    path: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    to: '/services/multi-payment-reconciliation',
  },
  {
    title: 'Cross-Border Settlement Architecture',
    desc: 'End-to-end cross-border financial settlement consultancy for enterprises operating across multiple jurisdictions. We design correspondent banking integrations, FX netting engines, SWIFT MT/MX messaging pipelines, and real-time gross settlement (RTGS) connectors.',
    badges: ['Settlement', 'Cross-Border'],
    path: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    to: '/services/cross-border-settlement',
  },
  {
    title: 'Web Development & Portal Engineering',
    desc: 'Custom web application development and financial portal engineering for FinTech platforms, banks, and enterprise financial institutions. We build responsive, secure, and scalable web interfaces for reconciliation dashboards, compliance management systems, and client-facing financial portals.',
    badges: ['Web', 'Portals'],
    path: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    to: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'Enterprise mobile app development for iOS and Android targeting financial services use cases. Recon FinTech builds secure, compliant mobile banking applications, approval workflow apps, and real-time financial monitoring tools with biometric authentication, offline capabilities, and regulatory-grade data encryption.',
    badges: ['Mobile', 'iOS', 'Android'],
    path: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    to: '/services/app-development',
  },
  {
    title: 'IoT & Embedded Systems Integration',
    desc: 'Industrial IoT and embedded systems integration for financial data acquisition, POS terminal reconciliation, ATM monitoring, and hardware security module (HSM) connectivity. Recon FinTech bridges physical financial infrastructure with cloud reconciliation and compliance platforms.',
    badges: ['IoT', 'Embedded'],
    path: 'M8.25 3v1.5m4.5-1.5v1.5m-3 15v1.5m4.5-1.5v1.5m-6-6h6m-6 3h6m-6-6h6m-6-3h6M3 6.75C3 5.507 4.007 4.5 5.25 4.5h13.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25H5.25C4.007 19.5 3 18.493 3 17.25V6.75z',
    to: '/services/iot-integrations',
  },
  {
    title: 'AI & Machine Learning Integration',
    desc: 'Custom AI and machine learning integration services for financial platforms. Recon FinTech designs, trains, and deploys ML models for transaction pattern recognition, anomaly detection, predictive settlement forecasting, NLP-powered compliance analysis, and intelligent document processing tailored for regulated financial environments.',
    badges: ['AI', 'ML'],
    path: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    to: '/services/ai-ml-integrations',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Recon FinTech Consultancy — Enterprise Automated Reconciliation &amp; FinTech Compliance Solutions</title>
        <meta name="description" content="Recon FinTech Consultancy: India-based automated transaction reconciliation systems, FinTech compliance data auditing, multi-payment gateway reconciliation, and cross-border settlement architecture for banks, neo-challengers, and enterprise platforms. Top FinTech consultancy in India." />
        <meta name="keywords" content="Recon FinTech Consultancy, Recon FinTech, Recon FinTech India, enterprise automated financial reconciliation solutions, automated transaction reconciliation systems, FinTech compliance data auditing, multi-payment gateway reconciliation services, cross-border financial settlement consultancy, AI-driven ledger matching software, Top FinTech consultancy in India, best finance reconciliation architects" />
      </Helmet>

      {/* HERO */}
      <RevealOnScroll>
        <section aria-labelledby="hero-heading" className="section-container overflow-hidden pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[6fr_4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="eyebrow-label">Recon FinTech Consultancy — Automated Reconciliation &amp; Compliance</span>
            <h1 id="hero-heading" className="display-heading text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
              Financial Reconciliation,<br />
              <span className="text-primary">Automated</span> by Default
            </h1>
            <p className="max-w-[65ch] text-base leading-relaxed text-body sm:text-lg">
              Recon FinTech Consultancy builds enterprise automated financial reconciliation solutions for banks,
              fast-scaling neo-challenger startups, and multi-national financial platforms. From AI-driven ledger matching
              to multi-payment gateway reconciliation and cross-border settlement architecture, we eliminate manual
              reconciliation overhead, reduce revenue leakage, and ensure regulatory compliance at scale.
            </p>
            <div className="flex flex-wrap gap-4 max-[400px]:flex-col">
              <Link to="/contact" className="btn-primary max-[400px]:w-full" aria-label="Schedule a high-ticket evaluation audit with Recon FinTech Consultancy">Schedule an Evaluation Audit</Link>
              <Link to="/services" className="btn-secondary max-[400px]:w-full" aria-label="View enterprise automated reconciliation services">Explore Our Services</Link>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 border-t border-border-soft pt-8">
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">$50B+</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Transactions Audited</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">99.99%</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Reconciliation Accuracy</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">200+</span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-body/70 sm:text-xs">Financial Experts Worldwide</span>
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
                  <span className="block text-xs text-body">Automated Reconciliation Market Outlook 2026</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ['AI-Driven Ledger Matching', 'Real-time anomaly detection across 50M+ daily transactions'],
                  ['Multi-Gateway Consolidation', 'Unified reconciliation across 50+ global payment acquirers'],
                  ['Regulatory Compliance', 'SOC 2, ISO 27001 &amp; GDPR certified audit infrastructure'],
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
                  Schedule an Audit&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* CLIENT MARQUEE */}
      <RevealOnScroll>
      <section aria-label="Trusted by leading financial institutions" className="section-container py-12 md:py-16">
        <div className="marquee-track rounded-xl border border-border-soft bg-surface-soft/50 py-4 shadow-soft sm:py-5">
          <div className="marquee-content items-center gap-16 px-8 text-sm font-semibold uppercase tracking-widest text-body/50 sm:gap-24 sm:text-base">
            {[
              'JPMorgan Chase', 'Goldman Sachs', 'HSBC', 'Standard Chartered',
              'BNP Paribas', 'Deutsche Bank', 'Morgan Stanley', 'Citibank',
              'Barclays', 'Bank of America', 'UBS', 'Wells Fargo',
            ].map((name) => (
              <span key={name} className="mx-8 inline-block sm:mx-12">{name}</span>
            ))}
            {[
              'JPMorgan Chase', 'Goldman Sachs', 'HSBC', 'Standard Chartered',
              'BNP Paribas', 'Deutsche Bank', 'Morgan Stanley', 'Citibank',
              'Barclays', 'Bank of America', 'UBS', 'Wells Fargo',
            ].map((name) => (
              <span key={`dup-${name}`} className="mx-8 inline-block sm:mx-12">{name}</span>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <CoreCapabilities />

      {/* CTA BANNER */}
      <RevealOnScroll>
      <section className="section-container py-16 md:py-20 lg:py-24" aria-labelledby="cta-heading">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#0033AA] px-8 py-14 text-center shadow-mid sm:rounded-3xl sm:px-14 sm:py-20 lg:px-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.06] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-white/[0.04] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-8 top-1/3 h-40 w-40 rounded-full bg-white/[0.03] blur-xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Eliminate Manual Reconciliation Risk?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you are scaling a neo-challenger bank or modernising a tier-1 financial institution,
              Recon FinTech Consultancy is standing by to help you deploy automated transaction reconciliation
              systems that reduce risk, improve accuracy, and accelerate financial close.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-250 hover:bg-white/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
                Schedule a High-Ticket Evaluation Audit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <NewServicesSection />
    </>
  )
}
