import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const serviceList = [
  {
    title: 'Automated Transaction Reconciliation',
    tagline: 'AI-driven ledger matching across all payment rails and internal systems.',
    desc: 'Recon FinTech Consultancy deploys enterprise-grade automated financial reconciliation solutions that eliminate manual reconciliation overhead. Our AI-driven engine processes millions of transactions in real time, performing intelligent ledger matching, anomaly detection, and exception handling across bank statements, payment gateways, card schemes, and internal sub-ledgers. Deployed at tier-1 banks and neo-challenger platforms across 15+ jurisdictions.',
    highlights: ['Real-time automated ledger matching', 'AI-driven anomaly & duplication detection', 'Multi-source transaction consolidation', 'Exception workflow automation', 'Settlement gap analysis', 'Reconciliation accuracy SLAs (99.99%)', 'Integration with 50+ payment acquirers', 'Custom rule engine for business logic', 'Audit-ready reconciliation reports'],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    to: '/services/automated-reconciliation',
  },
  {
    title: 'FinTech Compliance & Data Auditing',
    tagline: 'Regulatory-ready audit frameworks for fast-scaling financial platforms.',
    desc: 'Our FinTech compliance data auditing practice helps financial institutions and neo-challenger startups build regulatory-ready transaction monitoring and reporting infrastructures. We design and deploy AML/KYC screening engines, regulatory reporting pipelines, sanctions screening integrations, and real-time transaction monitoring systems that satisfy SOC 2 Type II, ISO 27001, and GDPR requirements across multiple jurisdictions.',
    highlights: ['Enterprise AML/KYC transaction monitoring', 'Regulatory reporting pipeline automation', 'Real-time sanctions screening integration', 'Audit-ready control framework design', 'Transaction monitoring system deployment', 'Cross-jurisdiction compliance advisory', 'RegTech evaluation & implementation', 'GDPR & data privacy compliance', 'Regulatory change management'],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    to: '/services/compliance-auditing',
  },
  {
    title: 'Multi-Payment Gateway Reconciliation',
    tagline: 'Unified reconciliation across 50+ global payment acquirers.',
    desc: 'Recon FinTech Consultancy provides specialised multi-payment gateway reconciliation services that consolidate transaction data from Visa, Mastercard, Rupay, UPI, PayPal, Stripe, Adyen, Worldpay, and 50+ additional global acquirers into a single auditable ledger. Our reconciliation engine automatically matches gateway reports against bank statements, identifies fee discrepancies, flags chargeback anomalies, and provides real-time settlement dashboards.',
    highlights: ['50+ payment gateway integrations', 'Automated report ingestion & parsing', 'Fee & surcharge discrepancy detection', 'Chargeback & dispute reconciliation', 'Real-time settlement & funding tracking', 'Multi-currency conversion reconciliation', 'Card scheme fee audit & optimisation', 'Sub-merchant settlement reconciliation', 'Custom gateway connector SDK'],
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    to: '/services/multi-payment-reconciliation',
  },
  {
    title: 'Cross-Border Settlement Architecture',
    tagline: 'Correspondent banking, SWIFT messaging, and RTGS connectors.',
    desc: 'Our cross-border financial settlement consultancy designs and deploys the messaging, netting, and settlement infrastructure that powers global transaction flows. We build SWIFT MT/MX messaging pipelines, correspondent banking integration layers, FX netting engines, real-time gross settlement (RTGS) connectors, and ISO 20022-compliant settlement architectures for enterprise banks and cross-border payment platforms.',
    highlights: ['SWIFT MT/MX messaging pipeline design', 'Correspondent banking integration', 'FX netting & optimisation engines', 'Real-time gross settlement (RTGS) connectors', 'ISO 20022 migration & compliance', 'Cross-border payment rails architecture', 'Multi-currency settlement orchestration', 'Nostro/vostro reconciliation automation', 'Liquidity management & forecasting'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    to: '/services/cross-border-settlement',
  },
  {
    title: 'AI-Driven Ledger Analytics',
    tagline: 'Predictive financial intelligence and automated ledger insights.',
    desc: 'Recon FinTech Consultancy builds AI-driven ledger matching software and predictive analytics platforms that transform raw transaction data into actionable financial intelligence. Our machine learning models identify reconciliation patterns, predict settlement anomalies, optimise cash flow forecasting, and deliver real-time dashboards for treasury, finance, and operations teams across the enterprise.',
    highlights: ['ML-powered transaction pattern recognition', 'Predictive settlement anomaly detection', 'Automated cash flow forecasting', 'Real-time treasury & finance dashboards', 'Revenue leakage identification algorithms', 'AI-driven journal entry matching', 'Intelligent exception classification', 'Historical trend & variance analysis', 'Custom ML model development & deployment'],
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    to: '/services/ai-ledger-analytics',
  },
  {
    title: 'Cybersecurity & Regulatory Advisory',
    tagline: 'Penetration testing, SOC 2, and zero-trust for FinTech platforms.',
    desc: 'Our cybersecurity and regulatory advisory practice helps financial institutions and FinTech platforms protect critical reconciliation and payment infrastructure. We deliver penetration testing, SOC 2 Type II and ISO 27001 readiness assessments, zero-trust architecture reviews, and incident response programme design specifically tailored for automated reconciliation systems and financial data pipelines.',
    highlights: ['Penetration testing for FinTech platforms', 'SOC 2 Type II & ISO 27001 readiness', 'Zero-trust architecture for payment systems', 'Incident response programme design', 'Financial data security architecture reviews', 'Regulatory compliance gap assessments', 'Third-party risk management for FinTech', 'Cloud security posture for financial workloads', 'Security awareness & training programmes'],
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    to: '/services/cybersecurity-advisory',
  },
  {
    title: 'Web Development & Portal Engineering',
    tagline: 'Custom financial portals, reconciliation dashboards, and web applications.',
    desc: 'Recon FinTech Consultancy builds secure, responsive web applications and financial portals for enterprise FinTech platforms. From real-time reconciliation dashboards to compliance management systems and client-facing banking portals, our web engineering team delivers pixel-perfect, accessible, and performance-optimised web solutions using modern frameworks and regulatory-grade security standards.',
    highlights: ['Financial portal & dashboard engineering', 'Real-time reconciliation UI development', 'Compliance management system design', 'Client-facing banking portal architecture', 'Responsive & accessible web interfaces', 'Secure authentication & authorisation', 'Data visualisation & BI dashboards', 'API integration layer design', 'Performance optimisation & accessibility compliance'],
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    to: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    tagline: 'iOS and Android financial apps with regulatory-grade security.',
    desc: 'Recon FinTech Consultancy develops enterprise mobile applications for iOS and Android targeting financial services. Our mobile team builds secure, compliant banking apps, approval workflow tools, real-time financial monitoring applications, and field audit platforms with biometric authentication, offline-first architecture, and end-to-end encryption for regulated environments.',
    highlights: ['iOS & Android financial app development', 'Biometric authentication & secure enrolment', 'Offline-first architecture for field operations', 'Real-time financial monitoring & alerts', 'Approval workflow & authorisation apps', 'Secure document capture & OCR integration', 'Push notification & alerting infrastructure', 'Regulatory compliance & data encryption', 'App store deployment & enterprise distribution'],
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    to: '/services/app-development',
  },
  {
    title: 'IoT & Embedded Systems Integration',
    tagline: 'Industrial IoT, POS terminals, ATM monitoring, and HSM connectivity.',
    desc: 'Recon FinTech Consultancy bridges physical financial infrastructure with cloud reconciliation and compliance platforms through IoT and embedded systems integration. We connect POS terminals, ATMs, hardware security modules (HSMs), and industrial financial sensors to real-time reconciliation engines, enabling automated transaction matching, anomaly detection, and predictive maintenance for physical financial infrastructure.',
    highlights: ['IoT sensor & financial device integration', 'POS terminal reconciliation connectivity', 'ATM transaction monitoring & reconciliation', 'Hardware security module (HSM) integration', 'Real-time device data ingestion pipelines', 'Embedded system security architecture', 'Predictive maintenance & anomaly alerting', 'Edge computing for financial data processing', 'Industrial IoT dashboard & monitoring'],
    icon: 'M8.25 3v1.5m4.5-1.5v1.5m-3 15v1.5m4.5-1.5v1.5m-6-6h6m-6 3h6m-6-6h6m-6-3h6M3 6.75C3 5.507 4.007 4.5 5.25 4.5h13.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25H5.25C4.007 19.5 3 18.493 3 17.25V6.75z',
    to: '/services/iot-integrations',
  },
  {
    title: 'AI & Machine Learning Integration',
    tagline: 'Custom ML models, NLP compliance analysis, and intelligent document processing.',
    desc: 'Recon FinTech Consultancy provides end-to-end AI and machine learning integration services for financial platforms. We design, train, and deploy custom ML models for transaction pattern recognition, settlement anomaly detection, predictive cash flow forecasting, NLP-powered regulatory compliance analysis, and intelligent document processing (IDP) tailored for regulated financial environments and transaction-heavy workloads.',
    highlights: ['Custom ML model design, training & deployment', 'Transaction pattern recognition & anomaly detection', 'Predictive settlement & cash flow forecasting', 'NLP-powered compliance document analysis', 'Intelligent document processing (IDP) for finance', 'Time-series forecasting for financial data', 'ML pipeline infrastructure & MLOps', 'Model explainability & regulatory compliance', 'Real-time inference engine deployment'],
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    to: '/services/ai-ml-integrations',
  },
  {
    title: 'Technology Consulting',
    tagline: 'Strategic FinTech technology advisory for banks and financial institutions.',
    desc: 'Recon FinTech Consultancy delivers strategic technology consulting covering architecture design, digital transformation strategy, cloud migration planning, technology stack evaluation, and regulatory technology roadmaps. Every engagement is led by certified architects with hands-on experience deploying mission-critical financial infrastructure at tier-1 banks across global markets.',
    highlights: ['Technology architecture and digital transformation strategy', 'Cloud migration for regulated financial environments', 'Technology stack evaluation and vendor advisory', 'Regulatory technology (RegTech) roadmap development', 'API-first architecture for financial platforms', 'Microservices and event-driven system consulting', 'Legacy modernisation and migration planning', 'Scalability engineering for FinTech platforms', 'Fractional technology leadership for FinTech startups'],
    icon: 'M9.75 3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75m9 3.75a9 9 0 11-18 0 9 9 0 0118 0z',
    to: '/services/tech-consulting',
  },
  {
    title: 'SaaS Platform Engineering',
    tagline: 'Multi-tenant SaaS infrastructure with compliance-ready architecture.',
    desc: 'Recon FinTech Consultancy provides end-to-end SaaS platform engineering for financial services companies building subscription-based products. We architect scalable multi-tenant infrastructure with tenant isolation, usage metering, subscription lifecycle management, and compliance-ready data segregation for platforms serving millions of users in regulated financial environments.',
    highlights: ['Multi-tenant SaaS architecture design', 'Subscription lifecycle management and billing', 'Tenant isolation and data segregation compliance', 'Usage metering and consumption-based pricing', 'SaaS security with SSO, RBAC, and encryption', 'API gateway and developer portal engineering', 'CI/CD and infrastructure-as-code for SaaS', 'SaaS metrics (MRR, churn, LTV, CAC) dashboards', 'Self-service onboarding and customer portals'],
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    to: '/services/saas-engineering',
  },
  {
    title: 'Software Development',
    tagline: 'Custom financial software with TDD, CI/CD, and regulatory-grade security.',
    desc: 'Recon FinTech Consultancy delivers custom software development for reconciliation platforms, compliance engines, and payment infrastructure. Our teams build production-ready financial systems using modern frameworks, test-driven development, and automated CI/CD pipelines for high-throughput transaction processing, real-time data pipelines, and regulatory reporting platforms.',
    highlights: ['Custom backend for financial transaction processing', 'Real-time data pipeline and event stream engineering', 'RESTful and GraphQL API for financial platforms', 'Regulatory reporting system development', 'Reconciliation engine software engineering', 'Financial data warehousing and analytics platforms', 'Payment gateway integration and custom connectors', 'Automated CI/CD and DevSecOps implementation', 'Secure coding and OWASP-compliant development'],
    icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 9h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z',
    to: '/services/software-development',
  },
  {
    title: 'Technology Development',
    tagline: 'Cloud-native infrastructure, DevOps, and platform engineering for finance.',
    desc: 'Recon FinTech Consultancy offers technology development covering the full lifecycle of financial infrastructure delivery. From cloud-native architecture and Kubernetes orchestration to API gateway engineering and SRE, we build the critical infrastructure powering modern financial operations processing billions in daily transaction volume across jurisdictions.',
    highlights: ['Cloud-native infrastructure on AWS, Azure, GCP', 'Kubernetes and container orchestration', 'Infrastructure-as-code with Terraform and Pulumi', 'Observability platform with logging, metrics, tracing', 'Site reliability engineering for financial systems', 'API gateway and service mesh architecture', 'Database engineering for financial data storage', 'Disaster recovery and business continuity planning', 'Multi-region deployment for global financial services'],
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    to: '/services/tech-development',
  },
  {
    title: 'Payment Aggregator Services',
    tagline: 'Multi-channel payment aggregation with real-time settlement and reconciliation.',
    desc: 'Recon FinTech Consultancy is building a comprehensive payment aggregation platform currently under regulatory approval. Our PA infrastructure will support UPI, cards, net banking, and wallets through a single API with seamless integration, real-time settlement, automated reconciliation, and PCI DSS-compliant infrastructure for high-volume transaction processing in India and emerging markets.',
    highlights: ['Multi-channel payment via single unified API', 'UPI, cards, net banking, and wallet support', 'Real-time settlement and automated reconciliation', 'PCI DSS Level 1 compliant infrastructure', 'Seamless REST API and SDK integration', 'Smart transaction routing for optimal success rates', 'Automated merchant onboarding and KYC workflows', 'Subscription and recurring payment management', 'Marketplace payment splitting and sub-merchant settlement'],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    to: '/services/payment-aggregator',
  },
  {
    title: 'AEPS — Aadhaar Enabled Payment System',
    tagline: 'NPCI-certified biometric payment infrastructure for financial inclusion.',
    desc: 'Recon FinTech Consultancy provides enterprise-grade AEPS solutions for banks and FinTech platforms delivering secure biometric-authenticated financial services across India. Supporting cash withdrawal, balance enquiry, fund transfer, and Aadhaar-to-Aadhaar payments through NPCI-certified channels with end-to-end encryption and full regulatory compliance.',
    highlights: ['NPCI-certified AEPS transaction processing', 'Biometric authentication via Aadhaar fingerprint/iris', 'Cash withdrawal and deposit via micro-ATM devices', 'Real-time balance enquiry and mini statement', 'Aadhaar-to-Aadhaar fund transfer with instant settlement', 'Merchant onboarding and AEPS agent network management', 'End-to-end encryption and biometric data security', 'Interoperable AEPS integration with banking partners', 'Transaction reconciliation for AEPS payment flows'],
    icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
    to: '/services/aeps',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Enterprise FinTech Services — Recon FinTech Consultancy | Reconciliation, Web, Mobile, IoT, AI</title>
        <meta name="description" content="Recon FinTech Consultancy delivers 16 enterprise FinTech services: automated reconciliation, compliance auditing, multi-payment reconciliation, cross-border settlement, technology consulting, SaaS engineering, software development, payment aggregation, AEPS, web, mobile, IoT, AI/ML, ledger analytics, and cybersecurity advisory. Top FinTech consultancy in India." />
        <meta name="keywords" content="Recon FinTech Consultancy services, automated transaction reconciliation systems, FinTech compliance data auditing, multi-payment gateway reconciliation services, cross-border financial settlement consultancy, technology consulting FinTech, SaaS platform engineering, software development FinTech, payment aggregator services, AEPS Aadhaar payment system, web development for FinTech, mobile app development financial services, IoT financial infrastructure integration, AI ML integration FinTech, AI-driven ledger matching software, B2B financial data consulting agency" />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Recon FinTech Services</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Enterprise <span className="text-primary">FinTech Services</span> — Reconciliation, Technology, Payments &amp; Infrastructure
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Recon FinTech Consultancy delivers 16 integrated enterprise service lines spanning automated
          transaction reconciliation, FinTech compliance data auditing, multi-payment gateway reconciliation,
          cross-border settlement architecture, technology consulting, SaaS platform engineering, software
          development, technology development, payment aggregation, AEPS, web development, mobile app
          development, IoT integration, AI/ML integration, ledger analytics, and cybersecurity advisory.
          Every engagement is staffed with certified architects and domain experts from tier-1 financial institutions.
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
