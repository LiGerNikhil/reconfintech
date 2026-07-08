import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const cases = [
  {
    title: 'How Recon FinTech Eliminated 99.8% of Ledger Anomalies for an Enterprise Neo-Bank',
    client: 'Top-5 Indian Neo-Bank',
    tag: 'Automated Reconciliation',
    result: 'Recon FinTech Consultancy deployed an AI-driven automated transaction reconciliation system that eliminated 99.8% of ledger anomalies, reduced financial close from 14 days to under 4 hours, and identified $2.3M in previously undetected revenue leakage across 12 payment gateways and 3 acquiring banks.',
    to: '/services/automated-reconciliation',
  },
  {
    title: 'Multi-Payment Gateway Reconciliation for a Global FinTech Processing $8B/Year',
    client: 'Series-D FinTech Unicorn',
    tag: 'Multi-Payment Gateway Reconciliation',
    result: 'Recon FinTech designed and deployed a unified multi-payment gateway reconciliation system consolidating 35+ global acquirers. Exception handling time dropped 94%, chargeback dispute resolution accelerated by 80%, and the platform achieved real-time settlement visibility across 8 currencies and 12 jurisdictions.',
    to: '/services/multi-payment-reconciliation',
  },
  {
    title: 'Cross-Border Settlement Architecture for a Multi-National Payment Platform',
    client: 'Global Cross-Border Payments Company',
    tag: 'Cross-Border Settlement',
    result: 'Recon FinTech Consultancy architected a complete cross-border settlement infrastructure including SWIFT MT/MX messaging pipelines, FX netting engines, and RTGS connectors. Transaction settlement time reduced from T+3 to T+0, correspondent banking fees cut by 35%, and full ISO 20022 compliance achieved within 6 months.',
    to: '/services/cross-border-settlement',
  },
  {
    title: 'FinTech Compliance Data Auditing Framework for a Regulated Lending Platform',
    client: 'Enterprise P2P Lending Platform',
    tag: 'Compliance & Data Auditing',
    result: 'Recon FinTech deployed a regulatory-ready FinTech compliance data auditing framework covering AML/KYC transaction monitoring, automated suspicious activity reporting, and real-time sanctions screening. The platform achieved SOC 2 Type II certification in under 4 months and reduced compliance operations cost by 60%.',
    to: '/services/compliance-auditing',
  },
  {
    title: 'Custom Financial Portal & Web Dashboard for Enterprise Reconciliation Platform',
    client: 'Global Tier-1 Bank',
    tag: 'Web Development',
    result: 'Recon FinTech designed and built a real-time reconciliation web portal enabling 500+ finance users to monitor transaction matching, exception workflows, and settlement status across 40+ payment gateways. The portal reduced manual reconciliation effort by 85% and achieved 99.9% uptime with sub-second dashboard load times.',
    to: '/services/web-development',
  },
  {
    title: 'AI/ML Integration for Predictive Settlement Anomaly Detection',
    client: 'Multi-National Payment Processor',
    tag: 'AI & Machine Learning',
    result: 'Recon FinTech deployed custom machine learning models trained on 2+ years of historical transaction data to predict settlement anomalies 24 hours before they occur. The ML integration reduced settlement exceptions by 76%, improved cash flow forecasting accuracy by 92%, and eliminated $4.1M in annual revenue leakage from undetected settlement gaps.',
    to: '/services/ai-ml-integrations',
  },
]

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies — Recon FinTech Consultancy | Enterprise Reconciliation Results</title>
        <meta name="description" content="Explore Recon FinTech Consultancy case studies: automated transaction reconciliation eliminated 99.8% of ledger anomalies for a neo-bank, multi-payment gateway reconciliation for a Series-D FinTech, cross-border settlement architecture, and FinTech compliance data auditing frameworks. Top FinTech consultancy in India." />
        <meta name="keywords" content="Recon FinTech Consultancy case studies, automated transaction reconciliation case study, multi-payment gateway reconciliation results, FinTech compliance data auditing case study, enterprise financial reconciliation solutions success stories" />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Recon FinTech Case Studies</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Measurable <span className="text-primary">Results</span> from Enterprise Reconciliation Deployments
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Every engagement by Recon FinTech Consultancy delivers measurable impact. Our automated transaction
          reconciliation systems, multi-payment gateway reconciliation services, and FinTech compliance data
          auditing frameworks consistently eliminate manual reconciliation risk and reduce financial close
          cycles for the world&rsquo;s leading financial institutions and fastest-growing neo-challenger platforms.
        </p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cases.map((c) => (
            <Link key={c.title} to={c.to} className="card-surface flex flex-col p-6 no-underline sm:p-8">
              <span className="pill-badge mb-4 inline-block w-fit">{c.tag}</span>
              <h2 className="mb-1 text-lg font-bold text-ink">{c.title}</h2>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{c.client}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{c.result}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read full case study &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
