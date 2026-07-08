import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-soft/80 via-surface to-surface pt-16 md:pt-20 lg:pt-24">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow-label">Recon FinTech API Platform</span>
            <h1 className="display-heading text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
              Enterprise APIs for the<br />
              <span className="text-primary">Next Generation</span> of<br />
              Financial Infrastructure
            </h1>
            <p className="max-w-[65ch] text-base leading-relaxed text-body sm:text-lg">
              Recon FinTech provides secure, scalable APIs for payment reconciliation,
              compliance automation, settlements, banking integrations, and financial
              workflows. Built for enterprise-grade performance with 99.99% availability.
            </p>
            <div className="flex flex-wrap gap-4 max-[400px]:flex-col">
              <Link to="#api-categories" className="btn-primary max-[400px]:w-full">Explore APIs</Link>
              <Link to="#api-docs" className="btn-secondary max-[400px]:w-full">View Documentation</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg rounded-2xl border border-border-soft bg-surface p-5 shadow-soft sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono text-body/50">api.reconfintech.com</span>
              </div>
              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex">
                  <span className="text-emerald-500">$</span>
                  <span className="ml-2 text-body/80">curl -X POST https://api.reconfintech.com/v2/reconciliation/transactions \</span>
                </div>
                <div className="flex">
                  <span className="text-body/40">&nbsp;&nbsp;</span>
                  <span className="text-body/80">-H <span className="text-yellow-500">&quot;Authorization: Bearer</span> <span className="text-primary">YOUR_API_KEY</span><span className="text-yellow-500">&quot;</span> \</span>
                </div>
                <div className="flex">
                  <span className="text-body/40">&nbsp;&nbsp;</span>
                  <span className="text-body/80">-H <span className="text-yellow-500">&quot;Content-Type: application/json&quot;</span> \</span>
                </div>
                <div className="flex">
                  <span className="text-body/40">&nbsp;&nbsp;</span>
                  <span className="text-body/80">-d <span className="text-yellow-500">&apos;{`{`}&quot;merchant_id&quot;: &quot;MERCHANT_12345&quot;{`}`}&apos;</span></span>
                </div>
                <div className="mt-3 border-t border-border-soft pt-3">
                  <div className="flex items-center justify-between text-body/50">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                      Status: <span className="text-emerald-500">200 OK</span>
                    </span>
                    <span>0.82s</span>
                  </div>
                  <div className="mt-2 rounded-lg bg-ink/5 p-3">
                    <pre className="text-[11px] leading-relaxed text-body/80 sm:text-xs">{JSON.stringify({ success: true, request_id: 'REQ-839482', matched: 1812, exceptions: 27 }, null, 2)}</pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
