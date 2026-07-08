import { motion } from 'framer-motion'

const steps = [
  { num: '01', label: 'Authenticate', desc: 'OAuth 2.0 or API Key verification', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
  { num: '02', label: 'Send Request', desc: 'RESTful API call with payload', icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' },
  { num: '03', label: 'Processing', desc: 'Real-time transaction processing engine', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { num: '04', label: 'Reconciliation Engine', desc: 'AI-driven matching and anomaly detection', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' },
  { num: '05', label: 'JSON Response', desc: 'Structured data returned in milliseconds', icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
  { num: '06', label: 'Dashboard', desc: 'Real-time monitoring and analytics', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
]

export default function Workflow() {
  return (
    <section className="section-container py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:mb-16"
      >
        <span className="eyebrow-label">How It Works</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">API Request Lifecycle</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body">Every API request flows through our secure, enterprise-grade infrastructure.</p>
      </motion.div>

      {/* Mobile: vertical timeline */}
      <div className="relative lg:hidden">
        <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" aria-hidden="true" />
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex items-start gap-5 pl-14"
            >
              <span className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-surface text-xs font-bold text-primary shadow-soft">
                {step.num}
              </span>
              <div className="min-w-0 flex-1 rounded-xl border border-border-soft bg-surface p-4 shadow-soft transition-all duration-250 hover:shadow-mid">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                  <span className="text-sm font-bold text-ink">{step.label}</span>
                </div>
                <p className="mt-1 text-xs text-body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal connected flow */}
      <div className="hidden lg:block">
        <div className="relative flex items-start justify-between">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex w-[130px] flex-col items-center xl:w-[150px]"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+30px)] top-5 h-px w-[calc(100%-60px)] bg-gradient-to-r from-primary/30 to-primary/10" aria-hidden="true" />
              )}
              {/* Step circle */}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft bg-surface text-xs font-bold text-primary shadow-soft">
                {step.num}
              </span>
              {/* Content */}
              <div className="mt-4 rounded-xl border border-border-soft bg-surface p-4 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:shadow-mid">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-5 w-5 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                <span className="mt-2 block text-center text-xs font-bold text-ink">{step.label}</span>
                <p className="mt-1 text-center text-[10px] leading-relaxed text-body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
