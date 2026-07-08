import { motion } from 'framer-motion'

const steps = [
  { label: 'Authenticate', desc: 'OAuth 2.0 / API Key', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
  { label: 'Send Request', desc: 'RESTful API call', icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' },
  { label: 'Processing', desc: 'Real-time engine', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Reconciliation Engine', desc: 'AI-driven matching', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' },
  { label: 'JSON Response', desc: 'Structured data', icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
  { label: 'Dashboard', desc: 'Real-time monitoring', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
]

export default function Workflow() {
  return (
    <section className="section-container py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <span className="eyebrow-label">How It Works</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">API Request Lifecycle</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body">Every API request flows through our secure, enterprise-grade infrastructure.</p>
      </motion.div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 md:flex-row"
          >
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-border-soft bg-surface shadow-soft transition-all duration-250 hover:-translate-y-1 hover:shadow-mid md:h-24 md:w-24">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
              <span className="mt-1 text-[10px] font-semibold text-body">{step.desc}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-ink">{step.label}</span>
              {i < steps.length - 1 && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mt-1 h-5 w-5 text-primary/40 md:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
              )}
            </div>
            {i < steps.length - 1 && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="hidden text-primary/40 md:block md:h-6 md:w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
