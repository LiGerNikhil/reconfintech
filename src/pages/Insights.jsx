import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const posts = [
  {
    title: 'The Future of Automated Transaction Reconciliation in Financial Services',
    desc: 'How AI-driven ledger matching software and automated reconciliation systems are transforming financial close processes for tier-1 banks and neo-challenger platforms. A deep dive into real-time reconciliation architectures, machine learning anomaly detection, and settlement optimisation strategies for 2026 and beyond.',
    date: 'Jul 2, 2026',
    readTime: '14 min read',
  },
  {
    title: 'Building a Compliance-First Data Auditing Framework for Neo-Banks',
    desc: 'Key considerations for designing FinTech compliance data auditing frameworks that satisfy SOC 2 Type II, ISO 27001, and GDPR requirements while scaling with high-transaction-volume financial platforms serving millions of customers across multiple jurisdictions.',
    date: 'Jun 18, 2026',
    readTime: '12 min read',
  },
  {
    title: 'Multi-Payment Gateway Reconciliation: A Technical Architecture Guide',
    desc: 'An in-depth technical exploration of multi-payment gateway reconciliation services for enterprise FinTech platforms. Covering report ingestion, fee discrepancy detection, chargeback reconciliation, real-time settlement tracking, and exception workflow automation across 50+ global acquirers.',
    date: 'Jun 4, 2026',
    readTime: '18 min read',
  },
  {
    title: 'Cross-Border Settlement Architecture: From T+3 to Real-Time',
    desc: 'How Recon FinTech Consultancy architects SWIFT MT/MX messaging pipelines, correspondent banking integrations, FX netting engines, and RTGS connectors to enable real-time cross-border financial settlement for enterprise platforms operating across 15+ jurisdictions.',
    date: 'May 15, 2026',
    readTime: '16 min read',
  },
  {
    title: 'Revenue Leakage in Payment Reconciliation: Detection and Recovery',
    desc: 'An analytical deep-dive into the systemic sources of revenue leakage in enterprise payment reconciliation operations, including undiscovered fee discrepancies, chargeback revenue loss, FX rounding gaps, and settlement timing mismatches. Featuring Recon FinTech\'s AI-driven detection methodology.',
    date: 'Apr 28, 2026',
    readTime: '11 min read',
  },
  {
    title: 'ISO 20022 Migration: What It Means for Transaction Reconciliation',
    desc: 'A comprehensive analysis of how the global migration to ISO 20022 messaging standards impacts enterprise automated financial reconciliation solutions. Including implementation strategies, data enrichment opportunities, and reconciliation rule engine updates required for compliance.',
    date: 'Apr 10, 2026',
    readTime: '13 min read',
  },
]

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights — Recon FinTech Consultancy | Reconciliation &amp; Compliance Thought Leadership</title>
        <meta name="description" content="Recon FinTech Consultancy insights and thought leadership: AI-driven automated transaction reconciliation, multi-payment gateway reconciliation services, FinTech compliance data auditing, cross-border settlement architecture, and revenue leakage detection for enterprise financial platforms." />
        <meta name="keywords" content="Recon FinTech Consultancy insights, automated transaction reconciliation thought leadership, multi-payment gateway reconciliation guide, FinTech compliance data auditing, cross-border financial settlement consultancy insights, AI-driven ledger matching software" />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Recon FinTech Insights</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Thought <span className="text-primary">Leadership</span> in Automated Reconciliation
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Our team at Recon FinTech Consultancy publishes regularly on the technologies, regulations, and
          strategies shaping the future of automated transaction reconciliation, FinTech compliance data
          auditing, multi-payment gateway reconciliation, and cross-border financial settlement architecture.
        </p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {posts.map((post) => (
            <article key={post.title} className="card-surface flex flex-col p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3 text-xs text-body/70">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-body/30" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="mb-2 text-lg font-bold text-ink">{post.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-body">{post.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read full article &rarr;</span>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
