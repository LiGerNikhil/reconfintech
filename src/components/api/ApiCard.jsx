import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const badgeColors = {
  'V2': 'bg-primary/10 text-primary',
  'Coming Soon': 'bg-amber-50 text-amber-700',
  'Beta': 'bg-blue-50 text-blue-700',
  'Enterprise': 'bg-purple-50 text-purple-700',
}

function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
}

export default function ApiCard({ title, desc, badge, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        to={`/api-platform/${toSlug(title)}`}
        className="group relative block overflow-hidden rounded-xl border border-border-soft bg-surface p-6 shadow-soft transition-all duration-250 hover:-translate-y-1 hover:shadow-mid"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
        <div className="relative z-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-250 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d={icon} /></svg>
          </span>
          <div className="mt-4 flex items-center gap-3">
            <h3 className="text-base font-bold text-ink">{title}</h3>
            {badge && (
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${badgeColors[badge] || 'bg-body/10 text-body'}`}>{badge}</span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all duration-250 group-hover:opacity-100 group-hover:translate-x-1">
            Learn more
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
