import { motion } from 'framer-motion'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-soft/80 via-surface to-surface pt-12 sm:pt-16 lg:pt-20">
      <div className="section-container relative z-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Terminal — first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-xl border border-border-soft bg-[#0B1428] shadow-soft">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2 sm:gap-2 sm:px-4 sm:py-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span className="ml-2 truncate text-[10px] font-mono text-white/30 sm:text-xs">api.reconfintech.com</span>
              </div>
              <div className="overflow-x-auto p-3 sm:p-4">
                <pre className="overflow-x-auto whitespace-pre font-mono text-[10px] leading-relaxed text-white/70 sm:text-xs">
                  <code>{`$ curl -X POST https://api.reconfintech.com/v2/reconciliation/transactions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"merchant_id": "MERCHANT_12345"}'`}</code>
                </pre>
                <div className="mt-2 border-t border-white/5 pt-2 sm:mt-3 sm:pt-3">
                  <div className="flex items-center justify-between text-[10px] text-white/40 sm:text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Status: <span className="text-emerald-400">200 OK</span>
                    </span>
                    <span>0.82s</span>
                  </div>
                  <pre className="mt-2 overflow-x-auto font-mono text-[10px] leading-relaxed text-white/60 sm:text-xs">
                    <code>{JSON.stringify({ success: true, request_id: 'REQ-839482', matched: 1812, exceptions: 27 }, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text — second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 flex flex-col gap-4 lg:order-1 lg:gap-6"
          >
            <span className="eyebrow-label">Recon FinTech API Platform</span>
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Enterprise APIs for the Next Generation of <span className="text-primary">Financial Infrastructure</span>
            </h1>
            <p className="text-sm leading-relaxed text-body sm:text-base lg:text-lg">
              Recon FinTech provides secure, scalable APIs for payment reconciliation,
              compliance automation, settlements, banking integrations, and financial
              workflows. Built for enterprise-grade performance with 99.99% availability.
            </p>
            <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:gap-4">
              <button type="button" onClick={() => scrollTo('api-categories')} className="btn-primary min-[420px]:inline-flex">Explore APIs</button>
              <button type="button" onClick={() => scrollTo('api-docs')} className="btn-secondary min-[420px]:inline-flex">View Documentation</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
