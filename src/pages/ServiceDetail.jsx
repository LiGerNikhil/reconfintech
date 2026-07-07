import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const services = {
  'payment-infrastructure': {
    title: 'Payment Infrastructure',
    desc: 'We design and deploy high-throughput payment systems that handle millions of transactions daily. From ISO 20022 migration to real-time gross settlement integration, our team delivers production-ready payment infrastructure for banks, fintechs, and payment service providers.',
    highlights: ['Real-time payment rail architecture', 'Gateway integration & optimization', 'ISO 20022 migration strategy', 'Settlement & reconciliation engines', 'Fraud detection integration', 'Multi-currency & cross-border support', 'Card scheme connectivity (Visa, Mastercard, UPI)', 'Open Banking / PSD2 API gateways', 'Payment hub modernisation'],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
  },
  'risk-compliance': {
    title: 'Risk & Compliance',
    desc: 'Our compliance practice helps financial institutions navigate increasingly complex regulatory landscapes. We build enterprise-grade AML/KYC programmes, real-time fraud detection engines, and automated regulatory reporting pipelines that reduce risk and improve audit readiness.',
    highlights: ['Enterprise AML/KYC programme design', 'Real-time fraud detection engines', 'Regulatory reporting automation', 'Sanctions screening integration', 'Transaction monitoring systems', 'Audit-ready control frameworks', 'RegTech solution evaluation', 'Cross-border compliance advisory', 'Regulatory change management'],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  'data-engineering': {
    title: 'Data Engineering',
    desc: 'We build scalable data platforms that turn raw financial data into actionable intelligence. Our data engineering practice covers everything from lakehouse architecture and real-time streaming pipelines to governance frameworks and BI layer design.',
    highlights: ['Data lakehouse architecture design', 'Real-time streaming pipelines', 'Data governance & quality frameworks', 'BI layer & dashboard engineering', 'Data migration & modernisation', 'Regulatory data management', 'Data mesh & data product design', 'ML pipeline infrastructure', 'Master data management (MDM)'],
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
  },
  'platform-architecture': {
    title: 'Platform Architecture',
    desc: 'We architect resilient, cloud-native platforms that deliver 99.99% availability. Our team specialises in Kubernetes orchestration, microservices decomposition, API gateway design, and infrastructure-as-code for regulated financial environments.',
    highlights: ['Kubernetes & container orchestration', 'Microservices architecture design', 'API gateway & management', 'Infrastructure as Code (IaC)', 'Cloud migration (AWS/Azure/GCP)', 'Resilience & disaster recovery', 'Service mesh implementation', 'Observability & monitoring', 'Platform engineering & internal developer portals'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  'financial-analytics': {
    title: 'Financial Analytics',
    desc: 'We build analytics platforms that give financial institutions real-time visibility into their operations. From executive dashboards to regulatory MIS and portfolio forecasting models, our solutions are powered by event-driven data architectures.',
    highlights: ['Executive dashboard engineering', 'Regulatory MIS & reporting', 'Portfolio forecasting models', 'Real-time risk analytics', 'Data visualisation & BI', 'Regulatory capital calculation', 'Scenario analysis & stress testing', 'Treasury & ALM analytics', 'Customer profitability analytics'],
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
  'cybersecurity-advisory': {
    title: 'Cybersecurity Advisory',
    desc: 'Our cybersecurity practice helps financial institutions protect their most critical assets. We deliver penetration testing, SOC 2 and ISO 27001 readiness assessments, zero-trust architecture reviews, and incident response programme design tailored for regulated entities.',
    highlights: ['Penetration testing & vulnerability assessments', 'SOC 2 & ISO 27001 readiness', 'Zero-trust architecture design', 'Incident response programme design', 'Security architecture reviews', 'Regulatory compliance assessments', 'Third-party risk management', 'Cloud security posture review', 'Security awareness programmes'],
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  },
}

const fallbackPath = 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'

export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = services[slug]

  if (!svc) {
    return (
      <section className="section-container py-24 text-center">
        <Helmet><title>Service Not Found — reconfintechconsultancy.com</title></Helmet>
        <h1 className="display-heading text-4xl">Service Not Found</h1>
        <p className="mt-4 text-body">The service you are looking for does not exist.</p>
        <Link to="/services" className="btn-primary mt-8 inline-flex">View All Services</Link>
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>{svc.title} — reconfintechconsultancy.com</title>
        <meta name="description" content={`${svc.title} — ${svc.desc.slice(0, 160)}`} />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <Link to="/services" className="mb-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-dark">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
          Back to Services
        </Link>
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-16 md:w-16">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
            </svg>
          </span>
          <div>
            <span className="eyebrow-label">Our Services</span>
            <h1 className="display-heading mt-1 text-3xl sm:text-4xl lg:text-5xl">{svc.title}</h1>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-body sm:text-lg">{svc.desc}</p>
      </section>

      <section aria-labelledby="highlights-heading" className="section-container py-16 md:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl lg:mb-16">
          <span className="eyebrow-label">Capabilities</span>
          <h2 id="highlights-heading" className="display-heading mt-3 text-2xl sm:text-3xl lg:text-4xl">
            What We Deliver
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {svc.highlights.map((h) => (
            <div key={h} className="flex items-start gap-3 rounded-xl border border-border-soft bg-surface p-4 shadow-soft">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
              </span>
              <span className="text-sm text-body">{h}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container pb-16 md:pb-20 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#0033AA] px-8 py-14 text-center shadow-mid sm:rounded-3xl sm:px-14 sm:py-20 lg:px-20">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Need {svc.title} Expertise?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Our team is ready to discuss how we can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-250 hover:bg-white/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
