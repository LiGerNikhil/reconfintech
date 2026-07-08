import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const capabilities = [
  {
    title: 'Automated Transaction Reconciliation',
    short: 'Enterprise-grade AI-driven reconciliation that eliminates manual ledger matching across all payment rails, bank statements, and internal ledgers.',
    expanded: 'Our reconciliation engine processes millions of transactions in real time, performing intelligent ledger matching, anomaly detection, and exception handling across bank statements, payment gateways, card schemes, and internal sub-ledgers. Deployed at tier-1 banks and neo-challenger platforms across 15+ jurisdictions with 99.99% accuracy.',
    badges: ['AI', 'Automation', 'Real-Time'],
    icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    gradient: 'from-[#0052FF] to-[#6B8AFF]',
    to: '/services/automated-reconciliation',
  },
  {
    title: 'FinTech Compliance & Data Auditing',
    short: 'Regulatory-ready AML/KYC frameworks, automated reporting pipelines, and audit architectures satisfying SOC 2, ISO 27001, and GDPR obligations.',
    expanded: 'We design and deploy AML/KYC transaction monitoring engines, automated regulatory reporting pipelines, sanctions screening integrations, and real-time transaction surveillance systems. Every compliance infrastructure is designed to satisfy SOC 2 Type II, ISO 27001, GDPR, and local regulatory requirements across multiple jurisdictions simultaneously.',
    badges: ['AML', 'KYC', 'SOC 2', 'GDPR'],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    gradient: 'from-[#059669] to-[#34D399]',
    to: '/services/compliance-auditing',
  },
  {
    title: 'Multi-Payment Gateway Reconciliation',
    short: 'Unified reconciliation across 50+ global acquirers including Visa, Mastercard, UPI, PayPal, Stripe, and Adyen into a single auditable ledger.',
    expanded: 'Our reconciliation engine automatically ingests and normalises gateway reports, matches them against bank statements and internal records, identifies fee and surcharge discrepancies, flags chargeback anomalies, and provides real-time settlement dashboards. Deployed at enterprise platforms processing $50B+ in annual transaction volume.',
    badges: ['Payments', 'Gateways', 'Chargeback'],
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
    to: '/services/multi-payment-reconciliation',
  },
  {
    title: 'Cross-Border Settlement Architecture',
    short: 'SWIFT MT/MX messaging, correspondent banking integration, FX netting engines, and RTGS connectors for global financial enterprises.',
    expanded: 'We build SWIFT MT/MX messaging pipelines, correspondent banking integration layers, FX netting and optimisation engines, real-time gross settlement (RTGS) connectors, and ISO 20022-compliant settlement architectures. Our solutions enable real-time cross-border settlement with full auditability and regulatory compliance across 15+ jurisdictions.',
    badges: ['SWIFT', 'RTGS', 'FX', 'ISO 20022'],
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    gradient: 'from-[#D97706] to-[#F59E0B]',
    to: '/services/cross-border-settlement',
  },
  {
    title: 'Web Development & Portal Engineering',
    short: 'Custom financial portals, reconciliation dashboards, and compliance management systems with WCAG 2.1 AA accessibility and OWASP security.',
    expanded: 'From real-time reconciliation dashboards and compliance management systems to client-facing banking portals and regulatory filing interfaces, our web engineering team delivers pixel-perfect, accessible, and performance-optimised web solutions. Every application is built with modern frameworks and hardened against OWASP Top 10 vulnerabilities.',
    badges: ['React', 'Node.js', 'Cloud', 'WCAG'],
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    gradient: 'from-[#2563EB] to-[#60A5FA]',
    to: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    short: 'Enterprise iOS and Android financial apps with biometric auth, offline-first architecture, and regulatory-grade end-to-end encryption.',
    expanded: 'Our mobile team builds secure, compliant banking apps, approval workflow tools, real-time financial monitoring applications, field audit platforms, and client-facing mobile portals. Every application features biometric authentication, offline-first architecture, secure encryption, and full compliance with PCI DSS and PSD2.',
    badges: ['iOS', 'Android', 'Flutter', 'Biometric'],
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    gradient: 'from-[#DC2626] to-[#F87171]',
    to: '/services/app-development',
  },
  {
    title: 'IoT & Embedded Systems Integration',
    short: 'POS terminal, ATM, and HSM connectivity bridging physical financial infrastructure with cloud reconciliation and compliance platforms.',
    expanded: 'We connect POS terminals, ATMs, hardware security modules (HSMs), and industrial financial sensors to real-time reconciliation engines and compliance monitoring platforms. Our IoT integration services enable automated transaction matching from physical devices, predictive maintenance, and real-time anomaly detection at the edge for financial infrastructure operations.',
    badges: ['IoT', 'Embedded', 'Edge', 'POS'],
    icon: 'M8.25 3v1.5m4.5-1.5v1.5m-3 15v1.5m4.5-1.5v1.5m-6-6h6m-6 3h6m-6-6h6m-6-3h6M3 6.75C3 5.507 4.007 4.5 5.25 4.5h13.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25H5.25C4.007 19.5 3 18.493 3 17.25V6.75z',
    gradient: 'from-[#0891B2] to-[#22D3EE]',
    to: '/services/iot-integrations',
  },
  {
    title: 'AI & Machine Learning Integration',
    short: 'Custom ML models for transaction pattern recognition, NLP compliance analysis, and intelligent document processing for regulated finance.',
    expanded: 'We design, train, and deploy custom ML models for transaction pattern recognition, settlement anomaly detection, predictive cash flow forecasting, NLP-powered regulatory compliance analysis, and intelligent document processing (IDP). Every AI/ML solution includes model explainability, bias detection, and regulatory compliance guardrails for transparency in regulated environments.',
    badges: ['AI', 'ML', 'NLP', 'MLOps'],
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    gradient: 'from-[#8B5CF6] to-[#C084FC]',
    to: '/services/ai-ml-integrations',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function CapabilityBadge({ label }) {
  return (
    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 group-hover:text-white">
      {label}
    </span>
  )
}

function CapabilityCard({ svc, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        className="relative flex h-full cursor-default flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.05] hover:shadow-2xl sm:p-7"
        role="article"
        tabIndex={0}
        onFocus={() => setExpanded(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(false) }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded((p) => !p) } }}
        aria-expanded={expanded}
      >
        {/* Gradient border glow on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), transparent)',
          }}
        />

        {/* Icon */}
        <span
          className={`relative z-10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${svc.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 sm:h-14 sm:w-14`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
          </svg>
        </span>

        {/* Title */}
        <h3 className="relative z-10 mb-2 text-lg font-bold text-white sm:text-xl">
          {svc.title}
        </h3>

        {/* Short description */}
        <p className="relative z-10 mb-4 text-sm leading-relaxed text-white/50 sm:text-[15px]">
          {svc.short}
        </p>

        {/* Badges */}
        <div className="relative z-10 mb-4 flex flex-wrap gap-1.5">
          {svc.badges.map((b) => (
            <CapabilityBadge key={b} label={b} />
          ))}
        </div>

        {/* Spacer */}
        <div className="relative z-10 mt-auto" />

        {/* CTA */}
        <Link
          to={svc.to}
          className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 transition-all duration-300 group-hover:text-white"
          tabIndex={-1}
          aria-label={`Learn more about ${svc.title}`}
        >
          Learn More
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            animate={{ x: expanded ? 4 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </motion.svg>
        </Link>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative z-10 overflow-hidden"
            >
              <div className="mt-4 border-t border-white/[0.06] pt-4">
                <p className="text-sm leading-relaxed text-white/40">
                  {svc.expanded}
                </p>
                <Link
                  to={svc.to}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#6B8AFF] transition-colors hover:text-[#8B5CF6]"
                >
                  View full service page &rarr;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function CoreCapabilities() {
  return (
    <section
      aria-labelledby="cc-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B1428] via-[#0f1a33] to-[#0B1428] py-20 sm:py-28"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B8AFF]">
            Core Capabilities
          </span>
          <h2
            id="cc-heading"
            className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Enterprise Automated
            <br />
            <span className="bg-gradient-to-r from-[#6B8AFF] via-[#A78BFA] to-[#6B8AFF] bg-clip-text text-transparent">
              Reconciliation Solutions
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            Enterprise software engineering, financial automation, AI solutions, and digital
            infrastructure built for modern financial institutions and FinTech platforms worldwide.
          </p>
        </motion.div>

        {/* Image row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          <img
            src="https://media.istockphoto.com/id/1849966331/vector/cpu-chip-on-motherboard-central-computer-processors-cpu-concept-quantum-computer-large-data.jpg?s=612x612&w=0&k=20&c=gwnDW37MfXMJn7M4XOUgQxWcDr5W62YXfQ1k6MBn4qI="
            alt="CPU processor technology"
            className="h-44 w-full rounded-xl object-cover shadow-lg ring-1 ring-white/10 sm:h-48"
          />
          <img
            src="https://media.istockphoto.com/id/1872098738/vector/artificial-intelligence-line-editable-icons-set.jpg?s=612x612&w=0&k=20&c=UEUjHcPwf5mewV8nhO-1pVX_Xcxvc8xXAdUhmZJC6CQ="
            alt="AI technology icons"
            className="h-44 w-full rounded-xl object-cover shadow-lg ring-1 ring-white/10 sm:h-48"
          />
          <img
            src="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=612x612&w=0&k=20&c=IduORJUs1c1s0m2SXQANsK8IUhtlz8QApsLxNYOYrXQ="
            alt="AI digital human concept"
            className="h-44 w-full rounded-xl object-cover shadow-lg ring-1 ring-white/10 sm:h-48"
          />
          <img
            src="https://media.istockphoto.com/id/1019729218/photo/financal-technology-concept-fintech.jpg?s=612x612&w=0&k=20&c=t8Cvm2Z5t14vVLutAAiLuHlPfpRLk_tkL9AXfpj4G-g="
            alt="Financial technology concept"
            className="h-44 w-full rounded-xl object-cover shadow-lg ring-1 ring-white/10 sm:h-48"
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8 xl:grid-cols-4"
        >
          {capabilities.map((svc, i) => (
            <CapabilityCard key={svc.title} svc={svc} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
          >
            View All 16 Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
