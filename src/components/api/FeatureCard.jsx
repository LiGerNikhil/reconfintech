import { motion } from 'framer-motion'

export default function FeatureCard({ title, desc, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
      className="group rounded-xl border border-border-soft bg-surface p-5 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-mid"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-primary transition-transform duration-250 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4.5 w-4.5"><path strokeLinecap="round" strokeLinejoin="round" d={icon} /></svg>
      </span>
      <h3 className="mt-3 text-sm font-bold text-ink">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-body">{desc}</p>
    </motion.div>
  )
}
