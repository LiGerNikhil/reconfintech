import { motion } from 'framer-motion'
import { securityItems } from './data'

export default function SecuritySection() {
  return (
    <section className="section-container py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <span className="eyebrow-label">Enterprise Security</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Built for the Most Demanding Financial Environments</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body">Every layer of our API platform is hardened against threats and built for compliance.</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {securityItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-xl border border-border-soft bg-surface p-5 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-mid"
          >
            <h3 className="text-sm font-bold text-ink">{item.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
