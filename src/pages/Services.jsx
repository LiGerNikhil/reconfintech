import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const serviceList = [
  {
    title: 'Payment Infrastructure',
    tagline: 'Real-time rails, gateways, and settlement orchestration.',
    desc: 'We design and deploy high-throughput payment systems that handle millions of transactions daily. From ISO 20022 migration to real-time gross settlement integration, our team delivers production-ready payment infrastructure for banks, fintechs, and payment service providers.',
    highlights: ['Real-time payment rail architecture', 'Gateway integration & optimization', 'ISO 20022 migration strategy', 'Settlement & reconciliation engines', 'Fraud detection integration', 'Multi-currency & cross-border support'],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    to: '/services/payment-infrastructure',
  },
  {
    title: 'Risk & Compliance',
    tagline: 'AML/KYC, fraud detection, and regulatory reporting.',
    desc: 'Our compliance practice helps financial institutions navigate increasingly complex regulatory landscapes. We build enterprise-grade AML/KYC programmes, real-time fraud detection engines, and automated regulatory reporting pipelines that reduce risk and improve audit readiness.',
    highlights: ['Enterprise AML/KYC programme design', 'Real-time fraud detection engines', 'Regulatory reporting automation', 'Sanctions screening integration', 'Transaction monitoring systems', 'Audit-ready control frameworks'],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    to: '/services/risk-compliance',
  },
  {
    title: 'Data Engineering',
    tagline: 'Warehouse architecture, pipelines, and real-time analytics.',
    desc: 'We build scalable data platforms that turn raw financial data into actionable intelligence. Our data engineering practice covers everything from lakehouse architecture and real-time streaming pipelines to governance frameworks and BI layer design.',
    highlights: ['Data lakehouse architecture design', 'Real-time streaming pipelines', 'Data governance & quality frameworks', 'BI layer & dashboard engineering', 'Data migration & modernisation', 'Regulatory data management'],
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    to: '/services/data-engineering',
  },
  {
    title: 'Platform Architecture',
    tagline: 'Cloud-native microservices, Kubernetes, and API design.',
    desc: 'We architect resilient, cloud-native platforms that deliver 99.99% availability. Our team specialises in Kubernetes orchestration, microservices decomposition, API gateway design, and infrastructure-as-code for regulated financial environments.',
    highlights: ['Kubernetes & container orchestration', 'Microservices architecture design', 'API gateway & management', 'Infrastructure as Code (IaC)', 'Cloud migration (AWS/Azure/GCP)', 'Resilience & disaster recovery'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    to: '/services/platform-architecture',
  },
  {
    title: 'Financial Analytics',
    tagline: 'Dashboards, forecasting models, and regulatory MIS.',
    desc: 'We build analytics platforms that give financial institutions real-time visibility into their operations. From executive dashboards to regulatory MIS and portfolio forecasting models, our solutions are powered by event-driven data architectures.',
    highlights: ['Executive dashboard engineering', 'Regulatory MIS & reporting', 'Portfolio forecasting models', 'Real-time risk analytics', 'Data visualisation & BI', 'Regulatory capital calculation'],
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    to: '/services/financial-analytics',
  },
  {
    title: 'Cybersecurity Advisory',
    tagline: 'Penetration testing, SOC 2, and zero-trust architecture.',
    desc: 'Our cybersecurity practice helps financial institutions protect their most critical assets. We deliver penetration testing, SOC 2 and ISO 27001 readiness assessments, zero-trust architecture reviews, and incident response programme design tailored for regulated entities.',
    highlights: ['Penetration testing & var reviews', 'SOC 2 & ISO 27001 readiness', 'Zero-trust architecture design', 'Incident response programme design', 'Security architecture reviews', 'Regulatory compliance assessments'],
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    to: '/services/cybersecurity-advisory',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — reconfintechconsultancy.com</title>
        <meta name="description" content="Explore our FinTech services: Payment Infrastructure, Risk & Compliance, Data Engineering, Platform Architecture, Financial Analytics, and Cybersecurity Advisory." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Our Services</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          End-to-End <span className="text-primary">FinTech</span> Capabilities
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          From legacy modernisation to greenfield platforms, our team delivers
          production-ready solutions across the full fintech stack. Every engagement
          is staffed with certified architects and domain experts.
        </p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((svc) => (
            <Link key={svc.title} to={svc.to} className="card-surface flex h-full flex-col p-6 no-underline sm:p-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                </svg>
              </span>
              <h2 className="mb-1 text-lg font-semibold text-ink">{svc.title}</h2>
              <p className="mb-4 text-sm text-body">{svc.tagline}</p>
              <ul className="mb-6 flex-1 space-y-2">
                {svc.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-body/80">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {h}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
