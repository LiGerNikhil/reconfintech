import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const cases = [
  { title: 'Real-Time Payment Rail Modernisation', client: 'Top-10 European Bank', tag: 'Payment Infrastructure', result: '40% reduction in transaction latency, 99.99% uptime achieved.', to: '/services/payment-infrastructure' },
  { title: 'Enterprise AML/KYC Platform Build', client: 'Global FinTech Unicorn', tag: 'Risk & Compliance', result: '5M+ identities screened daily, 60% faster onboarding.', to: '/services/risk-compliance' },
  { title: 'Cloud-Native Data Lakehouse Migration', client: 'Multi-National Insurer', tag: 'Data Engineering', result: '3PB migrated, 70% reduction in query time.', to: '/services/data-engineering' },
  { title: 'Kubernetes Platform for Regulated Workloads', client: 'Central Securities Depository', tag: 'Platform Architecture', result: 'SOC 2 certified platform, 99.995% availability.', to: '/services/platform-architecture' },
]

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies — reconfintechconsultancy.com</title>
        <meta name="description" content="Explore our FinTech case studies: real-time payments, AML/KYC, data lakehouse migration, and Kubernetes platform engineering for financial institutions." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Case Studies</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Proven <span className="text-primary">Results</span> for Leading Institutions
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Every engagement is an opportunity to deliver measurable impact. Here are
          a few examples of the work we have done for our clients.
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
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read case study &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
