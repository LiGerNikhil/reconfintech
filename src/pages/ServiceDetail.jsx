import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const services = {
  'automated-reconciliation': {
    title: 'Automated Transaction Reconciliation',
    desc: 'Recon FinTech Consultancy deploys enterprise-grade automated financial reconciliation solutions that eliminate manual reconciliation overhead. Our AI-driven reconciliation engine processes millions of transactions in real time, performing intelligent ledger matching, anomaly detection, and exception handling across bank statements, payment gateways, card schemes, and internal sub-ledgers. Deployed at tier-1 banks and neo-challenger platforms across 15+ jurisdictions, our systems deliver 99.99% reconciliation accuracy and reduce financial close cycles from weeks to minutes.',
    highlights: [
      'Real-time automated ledger matching across all data sources',
      'AI-driven anomaly, duplication, and fraud detection',
      'Multi-source transaction consolidation and normalisation',
      'End-to-end exception workflow automation',
      'Settlement gap analysis with intelligent flagging',
      'Reconciliation accuracy SLAs guaranteed at 99.99%',
      'Integration with 50+ payment acquirers and gateways',
      'Custom rule engine for business-specific matching logic',
      'Audit-ready reconciliation reports with full traceability',
      'Sub-ledger to general ledger reconciliation automation',
      'Real-time dashboards with drill-down exception management',
      'Automated regulatory reporting from reconciled data',
    ],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
  },
  'compliance-auditing': {
    title: 'FinTech Compliance & Data Auditing',
    desc: 'Recon FinTech Consultancy provides regulatory-ready FinTech compliance data auditing frameworks for banks, neo-challenger startups, and enterprise financial platforms. We design and deploy AML/KYC transaction monitoring engines, automated regulatory reporting pipelines, sanctions screening integrations, and real-time transaction surveillance systems. Every compliance infrastructure we deliver is designed to satisfy SOC 2 Type II, ISO 27001, GDPR, and local regulatory requirements across multiple jurisdictions simultaneously.',
    highlights: [
      'Enterprise AML/KYC transaction monitoring systems',
      'Automated regulatory reporting pipeline architecture',
      'Real-time sanctions screening and PEP detection',
      'Audit-ready control framework design and implementation',
      'Transaction monitoring rules engine with ML enhancement',
      'Cross-jurisdiction regulatory compliance advisory',
      'RegTech solution evaluation and deployment',
      'GDPR and data privacy compliance frameworks',
      'Regulatory change management and impact assessment',
      'Automated suspicious activity report (SAR) generation',
      'Real-time compliance dashboard with drill-down analytics',
      'Third-party vendor compliance risk assessment',
    ],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  'multi-payment-reconciliation': {
    title: 'Multi-Payment Gateway Reconciliation',
    desc: 'Recon FinTech Consultancy provides specialised multi-payment gateway reconciliation services that consolidate transaction data from Visa, Mastercard, Rupay, UPI, PayPal, Stripe, Adyen, Worldpay, and 50+ additional global acquirers into a single auditable ledger. Our reconciliation engine automatically ingests and normalises gateway reports, matches them against bank statements and internal records, identifies fee and surcharge discrepancies, flags chargeback anomalies, and provides real-time settlement dashboards. Deployed at enterprise platforms processing $50B+ in annual transaction volume.',
    highlights: [
      'Seamless integration with 50+ global payment acquirers',
      'Automated report ingestion, parsing, and normalisation',
      'Fee, surcharge, and interchange discrepancy detection',
      'End-to-end chargeback and dispute reconciliation',
      'Real-time settlement and funding status tracking',
      'Multi-currency conversion and FX rate reconciliation',
      'Card scheme fee audit and optimisation analysis',
      'Sub-merchant and marketplace settlement reconciliation',
      'Custom gateway connector SDK for proprietary integrations',
      'Automated exception handling and escalation workflows',
      'Revenue leakage identification and recovery tracking',
      'Real-time reconciliation dashboards for finance teams',
    ],
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
  },
  'cross-border-settlement': {
    title: 'Cross-Border Settlement Architecture',
    desc: 'Our cross-border financial settlement consultancy designs and deploys the messaging, netting, and settlement infrastructure that powers global transaction flows for enterprise banks and cross-border payment platforms. We build SWIFT MT/MX messaging pipelines, correspondent banking integration layers, FX netting and optimisation engines, real-time gross settlement (RTGS) connectors, and ISO 20022-compliant settlement architectures. Our solutions enable real-time cross-border settlement with full auditability and regulatory compliance across 15+ jurisdictions.',
    highlights: [
      'SWIFT MT and MX messaging pipeline design and deployment',
      'Correspondent banking integration and optimisation',
      'FX netting engines with intelligent matching algorithms',
      'Real-time gross settlement (RTGS) system connectors',
      'ISO 20022 migration strategy and implementation',
      'Cross-border payment rail architecture design',
      'Multi-currency settlement orchestration and netting',
      'Nostro and vostro reconciliation automation',
      'Liquidity management and cash forecasting models',
      'Real-time cross-border settlement status tracking',
      'Regulatory reporting for cross-border transaction flows',
      'Correspondent fee and cost analysis optimisation',
    ],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  'ai-ledger-analytics': {
    title: 'AI-Driven Ledger Analytics',
    desc: 'Recon FinTech Consultancy builds AI-driven ledger matching software and predictive analytics platforms that transform raw transaction data into actionable financial intelligence. Our machine learning models are trained on billions of transaction records to identify reconciliation patterns, predict settlement anomalies, optimise cash flow forecasting, and detect revenue leakage before it impacts your financial statements. Every platform we deliver includes real-time dashboards and customisable alerting for treasury, finance, and operations teams.',
    highlights: [
      'ML-powered transaction pattern recognition and classification',
      'Predictive settlement anomaly detection and alerting',
      'Automated cash flow forecasting with ML models',
      'Real-time treasury, finance, and operations dashboards',
      'Revenue leakage identification and recovery algorithms',
      'AI-driven journal entry matching and validation',
      'Intelligent exception classification with auto-resolution',
      'Historical trend analysis and variance detection',
      'Custom ML model development, training, and deployment',
      'Natural language processing for reconciliation notes',
      'Automated regulatory intelligence from transaction data',
      'Real-time anomaly escalation and incident response',
    ],
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
  'cybersecurity-advisory': {
    title: 'Cybersecurity & Regulatory Advisory',
    desc: 'Recon FinTech Consultancy delivers specialised cybersecurity and regulatory advisory services for financial institutions and FinTech platforms operating automated reconciliation and payment infrastructure. We conduct comprehensive penetration testing, SOC 2 Type II and ISO 27001 readiness assessments, zero-trust architecture reviews, and incident response programme design tailored for financial data pipelines, reconciliation engines, and multi-payment gateway architectures in regulated environments.',
    highlights: [
      'Penetration testing for FinTech and banking platforms',
      'SOC 2 Type II and ISO 27001 readiness and certification support',
      'Zero-trust architecture design for payment infrastructure',
      'Incident response programme development and testing',
      'Financial data security architecture and design reviews',
      'Regulatory compliance gap analysis and remediation',
      'Third-party risk management for FinTech vendors',
      'Cloud security posture assessment for financial workloads',
      'Security awareness and training programme development',
      'Reconciliation system-specific threat modelling',
      'Data privacy impact assessment (DPIA) facilitation',
      'Continuous security monitoring and SIEM implementation',
    ],
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  },
  'web-development': {
    title: 'Web Development & Portal Engineering',
    desc: 'Recon FinTech Consultancy builds secure, responsive web applications and financial portals for enterprise FinTech platforms, banks, and financial institutions. From real-time reconciliation dashboards and compliance management systems to client-facing banking portals and regulatory filing interfaces, our web engineering team delivers pixel-perfect, accessible, and performance-optimised web solutions. Every application is built with modern frameworks (React, Angular, Vue), follows WCAG 2.1 AA accessibility standards, and is hardened against OWASP Top 10 vulnerabilities for financial services.',
    highlights: [
      'Financial portal & dashboard engineering',
      'Real-time reconciliation UI with WebSocket integration',
      'Compliance management system development',
      'Client-facing banking portal architecture',
      'Responsive & accessible web interfaces (WCAG 2.1 AA)',
      'Secure authentication (OAuth 2.0, SAML, biometric)',
      'Data visualisation & BI dashboard engineering',
      'API integration layer with REST/GraphQL',
      'Performance optimisation & Core Web Vitals',
      'OWASP Top 10 security hardening',
      'Multi-tenant SaaS platform architecture',
      'CI/CD pipeline & automated testing setup',
    ],
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  },
  'app-development': {
    title: 'Mobile App Development',
    desc: 'Recon FinTech Consultancy develops enterprise mobile applications for iOS and Android targeting financial services, reconciliation management, and regulatory compliance. Our mobile team builds secure, compliant banking apps, approval workflow tools, real-time financial monitoring applications, field audit platforms, and client-facing mobile portals. Every application features biometric authentication, offline-first architecture, secure data encryption at rest and in transit, and full compliance with financial services regulatory requirements including PCI DSS and PSD2.',
    highlights: [
      'Native iOS (Swift) & Android (Kotlin) development',
      'Cross-platform (React Native, Flutter) development',
      'Biometric authentication (FaceID, fingerprint, iris)',
      'Offline-first architecture for field finance operations',
      'Real-time financial monitoring & push alerts',
      'Approval workflow & authorisation management apps',
      'Secure document capture with OCR integration',
      'Regulatory compliance & end-to-end encryption',
      'App store deployment & MDM enterprise distribution',
      'PCI DSS & PSD2 compliant mobile architecture',
      'Mobile reconciliation approval & exception management',
      'Secure offline transaction capture & sync',
    ],
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
  },
  'iot-integrations': {
    title: 'IoT & Embedded Systems Integration',
    desc: 'Recon FinTech Consultancy bridges physical financial infrastructure with cloud reconciliation and compliance platforms through IoT and embedded systems integration. We connect POS terminals, ATMs, hardware security modules (HSMs), and industrial financial sensors to real-time reconciliation engines and compliance monitoring platforms. Our IoT integration services enable automated transaction matching from physical devices, predictive maintenance for financial hardware, real-time anomaly detection at the edge, and comprehensive monitoring dashboards for financial infrastructure operations.',
    highlights: [
      'IoT sensor & financial device integration',
      'POS terminal transaction reconciliation connectivity',
      'ATM cash & transaction monitoring and reconciliation',
      'Hardware security module (HSM) integration',
      'Real-time device data ingestion & processing pipelines',
      'Embedded system security & firmware assessment',
      'Predictive maintenance & device health monitoring',
      'Edge computing for low-latency financial data processing',
      'Industrial IoT dashboard & monitoring platforms',
      'Device firmware update & configuration management',
      'Financial infrastructure asset tracking & telemetry',
      'Real-time anomaly detection at the edge',
    ],
    icon: 'M8.25 3v1.5m4.5-1.5v1.5m-3 15v1.5m4.5-1.5v1.5m-6-6h6m-6 3h6m-6-6h6m-6-3h6M3 6.75C3 5.507 4.007 4.5 5.25 4.5h13.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25H5.25C4.007 19.5 3 18.493 3 17.25V6.75z',
  },
  'ai-ml-integrations': {
    title: 'AI & Machine Learning Integration',
    desc: 'Recon FinTech Consultancy provides end-to-end AI and machine learning integration services for financial platforms, reconciliation engines, and compliance systems. We design, train, and deploy custom ML models for transaction pattern recognition, settlement anomaly detection, predictive cash flow forecasting, NLP-powered regulatory compliance analysis, and intelligent document processing (IDP). Every AI/ML solution we deliver includes model explainability, bias detection, and regulatory compliance guardrails to ensure transparency and auditability in regulated financial environments.',
    highlights: [
      'Custom ML model design, training & deployment',
      'Transaction pattern recognition & anomaly detection models',
      'Predictive settlement & cash flow forecasting',
      'NLP-powered regulatory compliance document analysis',
      'Intelligent document processing (IDP) for financial documents',
      'Time-series forecasting for financial operations',
      'ML pipeline infrastructure & MLOps platform engineering',
      'Model explainability, bias detection & fairness auditing',
      'Real-time inference engine deployment & scaling',
      'Feature store & data pipeline engineering for ML',
      'A/B testing & model monitoring in production',
      'Regulatory-grade AI governance framework design',
    ],
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
  },
  'tech-consulting': {
    title: 'Technology Consulting',
    desc: 'Recon FinTech Consultancy delivers strategic technology consulting for financial institutions, neo-challenger banks, and enterprise FinTech platforms. Our technology advisory practice covers architecture design, digital transformation strategy, cloud migration planning, technology stack evaluation, and regulatory technology roadmaps. Every engagement is led by certified architects with hands-on experience deploying mission-critical financial infrastructure at tier-1 banks and high-volume payment platforms across global markets.',
    highlights: [
      'Financial technology architecture and digital transformation strategy',
      'Cloud migration planning for regulated financial environments',
      'Technology stack evaluation and vendor selection advisory',
      'Regulatory technology (RegTech) roadmap development',
      'API-first architecture design for financial platforms',
      'Microservices and event-driven system architecture consulting',
      'Legacy system modernisation and migration planning',
      'Scalability and performance engineering for FinTech platforms',
      'Technology risk assessment and mitigation strategy',
      'Build vs buy analysis for financial infrastructure components',
      'Post-merger technology integration planning for FinTech acquisitions',
      'CTO-on-demand and fractional technology leadership for FinTech startups',
    ],
    icon: 'M9.75 3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75m9 3.75a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  'saas-engineering': {
    title: 'SaaS Platform Engineering',
    desc: 'Recon FinTech Consultancy provides end-to-end SaaS platform engineering for financial services companies building subscription-based products and multi-tenant platforms. We architect scalable SaaS infrastructure with tenant isolation, usage metering, subscription lifecycle management, and compliance-ready data segregation. From MVP to enterprise-grade platforms serving millions of users, our SaaS engineering practice delivers production-ready financial SaaS products with robust billing, analytics, and regulatory compliance frameworks built in from day one.',
    highlights: [
      'Multi-tenant SaaS architecture design and implementation',
      'Subscription lifecycle management and recurring billing integration',
      'Tenant isolation and compliance-ready data segregation',
      'Usage metering, analytics, and consumption-based pricing models',
      'SaaS security architecture including SSO, RBAC, and encryption',
      'API gateway and developer portal engineering for SaaS platforms',
      'CI/CD pipeline and infrastructure-as-code for SaaS deployments',
      'SaaS metrics dashboards (MRR, churn, LTV, CAC)',
      'Self-service onboarding and customer portal development',
      'Scale engineering for high-growth SaaS platforms',
      'SaaS compliance frameworks (SOC 2, ISO 27001, GDPR)',
      'Marketplace and third-party integration ecosystem design',
    ],
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
  },
  'software-development': {
    title: 'Software Development',
    desc: 'Recon FinTech Consultancy delivers custom software development for financial platforms, reconciliation systems, compliance engines, and payment infrastructure. Our engineering teams build production-ready software using modern frameworks, test-driven development, and automated CI/CD pipelines. Specialising in financial software engineering, we develop high-throughput transaction processing systems, real-time data pipelines, regulatory reporting platforms, and mission-critical backend infrastructure for banks, FinTech platforms, and enterprise financial institutions operating at global scale.',
    highlights: [
      'Custom backend engineering for financial transaction processing',
      'Real-time data pipeline and event stream processing systems',
      'RESTful and GraphQL API development for financial platforms',
      'Regulatory reporting system design and implementation',
      'High-throughput reconciliation engine software engineering',
      'Financial data warehousing and analytics platform development',
      'Payment gateway integration and custom connector development',
      'Automated testing, CI/CD pipeline, and DevSecOps implementation',
      'Performance optimisation and latency reduction for financial systems',
      'Legacy system integration and API wrapping',
      'Code audit, technical debt remediation, and code quality improvement',
      'Secure coding practices and OWASP-compliant development lifecycle',
    ],
    icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 9h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z',
  },
  'tech-development': {
    title: 'Technology Development',
    desc: 'Recon FinTech Consultancy offers comprehensive technology development services covering the full lifecycle of financial infrastructure delivery. From cloud-native architecture and containerised microservices to API gateway engineering and legacy modernisation, our technology development practice builds the critical infrastructure that powers modern financial operations. We deliver production-grade cloud infrastructure, DevOps pipelines, observability platforms, and site reliability engineering (SRE) for financial systems processing billions of dollars in daily transaction volume across multiple jurisdictions and regulatory regimes.',
    highlights: [
      'Cloud-native infrastructure on AWS, Azure, and GCP for financial workloads',
      'Kubernetes and container orchestration for FinTech platforms',
      'Infrastructure-as-code (Terraform, Pulumi, CloudFormation) engineering',
      'Observability platform design including logging, metrics, and tracing',
      'Site reliability engineering (SRE) for financial critical systems',
      'API gateway and service mesh architecture for microservices',
      'Database engineering and financial data storage optimisation',
      'Network architecture and security group design for regulated environments',
      'Disaster recovery and business continuity infrastructure planning',
      'Performance testing and capacity planning for financial platforms',
      'GitOps and platform engineering for developer productivity',
      'Multi-region deployment architecture for global financial services',
    ],
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
  },
  'payment-aggregator': {
    title: 'Payment Aggregator Services',
    desc: 'Recon FinTech Consultancy is building a comprehensive payment aggregation platform that empowers businesses to accept, process, and reconcile payments across multiple channels. Currently under regulatory approval, our payment aggregator (PA) infrastructure will support UPI, credit/debit cards, net banking, and digital wallets through a single unified API. Merchants and platforms will benefit from seamless integration, real-time settlement, automated reconciliation, and PCI DSS-compliant infrastructure designed from the ground up for high-volume transaction processing in the Indian and emerging market payments ecosystem.',
    highlights: [
      'Multi-channel payment acceptance via single unified API integration',
      'UPI, credit/debit cards, net banking, and digital wallet support',
      'Real-time settlement and automated reconciliation for merchant platforms',
      'PCI DSS Level 1 compliant payment processing infrastructure',
      'Seamless REST API and SDK integration for platforms and marketplaces',
      'Smart transaction routing for optimal success rates and cost reduction',
      'Automated merchant onboarding and KYC verification workflows',
      'Subscription and recurring payment management infrastructure',
      'Chargeback management and dispute resolution automation',
      'Real-time transaction dashboards and settlement reporting',
      'Fraud detection and prevention engine with ML-based scoring',
      'Marketplace payment splitting and sub-merchant settlement orchestration',
    ],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
  },
  'aeps': {
    title: 'AEPS — Aadhaar Enabled Payment System',
    desc: 'Recon FinTech Consultancy provides enterprise-grade Aadhaar Enabled Payment System (AEPS) solutions for banks, financial institutions, and FinTech platforms delivering secure biometric-authenticated financial services across India. Our AEPS infrastructure supports cash withdrawal, balance enquiry, fund transfer, Aadhaar-to-Aadhaar payments, mini statements, and authentication services through NPCI-certified channels. Built with end-to-end encryption, biometric security, and regulatory compliance frameworks, our AEPS platform enables financial service providers to reach underserved populations through Aadhaar-based financial inclusion infrastructure.',
    highlights: [
      'NPCI-certified AEPS transaction processing infrastructure',
      'Biometric authentication using Aadhaar-linked fingerprint and iris data',
      'Cash withdrawal and deposit management through micro-ATM devices',
      'Real-time balance enquiry and mini statement generation',
      'Aadhaar-to-Aadhaar fund transfer with instant settlement',
      'Merchant onboarding and AEPS agent network management',
      'End-to-end encryption and biometric data security framework',
      'Interoperable AEPS integration with banking partners (NPCI)',
      'Transaction reconciliation and settlement automation for AEPS flows',
      'Regulatory compliance with RBI, UIDAI, and NPCI AEPS guidelines',
      'Reporting dashboard for AEPS transaction monitoring and analytics',
      'Scalable infrastructure supporting millions of daily AEPS transactions',
    ],
    icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
  },
}

const fallbackPath = 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'

export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = services[slug]

  if (!svc) {
    return (
      <section className="section-container py-24 text-center">
        <Helmet><title>Service Not Found — Recon FinTech Consultancy</title></Helmet>
        <h1 className="display-heading text-4xl">Service Not Found</h1>
        <p className="mt-4 text-body">The service you are looking for does not exist.</p>
        <Link to="/services" className="btn-primary mt-8 inline-flex">View All Services</Link>
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>{svc.title} — Recon FinTech Consultancy</title>
        <meta name="description" content={`Recon FinTech Consultancy: ${svc.title}. ${svc.desc.slice(0, 160)}. Enterprise automated financial reconciliation solutions and FinTech compliance data auditing trusted by leading financial institutions.`} />
        <meta name="keywords" content={`Recon FinTech Consultancy, ${svc.title}, automated transaction reconciliation systems, FinTech compliance data auditing, enterprise automated financial reconciliation solutions, best finance reconciliation architects`} />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <Link to="/services" className="mb-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-dark">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
          Back to All Services
        </Link>
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-16 md:w-16">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
            </svg>
          </span>
          <div>
            <span className="eyebrow-label">Recon FinTech Services</span>
            <h1 className="display-heading mt-1 text-3xl sm:text-4xl lg:text-5xl">{svc.title}</h1>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-body sm:text-lg">{svc.desc}</p>
      </section>

      <section aria-labelledby="highlights-heading" className="section-container py-16 md:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl lg:mb-16">
          <span className="eyebrow-label">Capabilities &amp; Delivery</span>
          <h2 id="highlights-heading" className="display-heading mt-3 text-2xl sm:text-3xl lg:text-4xl">
            What Recon FinTech Delivers
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
            Our reconciliation and compliance architects are ready to discuss how Recon FinTech Consultancy can deploy automated transaction reconciliation systems for your enterprise.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-250 hover:bg-white/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95">
              Schedule a Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
