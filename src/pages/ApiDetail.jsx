import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { apiDetailData } from '../components/api/apiDetailData'
import { apiCategories } from '../components/api/data'
import RevealOnScroll from '../components/RevealOnScroll'

const badgeColors = {
  'V2': 'bg-primary/10 text-primary',
  'Coming Soon': 'bg-amber-50 text-amber-700',
  'Beta': 'bg-blue-50 text-blue-700',
  'Enterprise': 'bg-purple-50 text-purple-700',
}

const langs = ['curl', 'javascript', 'python']

export default function ApiDetail() {
  const { slug } = useParams()
  const api = apiDetailData[slug]
  const [activeLang, setActiveLang] = useState('curl')
  const [copied, setCopied] = useState(false)

  if (!api) {
    return (
      <div className="section-container flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <span className="text-6xl">🔌</span>
        <h1 className="text-2xl font-bold text-ink">API Not Found</h1>
        <p className="text-body">The API product you are looking for does not exist.</p>
        <Link to="/api-platform" className="btn-primary">Browse All APIs</Link>
      </div>
    )
  }

  const code = api.codeExamples[activeLang] || ''

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }).catch(() => {})
  }

  return (
    <>
      <Helmet>
        <title>{api.title} — Recon FinTech API Platform</title>
        <meta name="description" content={api.subtitle} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="section-container pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-body/60">
          <Link to="/api-platform" className="transition-colors hover:text-primary">API Platform</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{api.title}</span>
        </nav>
      </div>

      {/* Terminal Hero */}
      <section className="section-container pb-8 pt-6 md:pb-12 md:pt-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{api.title}</h1>
              {api.badge && (
                <span className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${badgeColors[api.badge]}`}>{api.badge}</span>
              )}
            </div>
            <p className="mt-3 text-base leading-relaxed text-body sm:text-lg">{api.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {api.features.slice(0, 4).map((f) => (
                <span key={f.label} className="rounded-full border border-border-soft bg-surface-soft px-3 py-1 text-xs text-body">{f.label}: <span className="font-semibold text-ink">{f.value}</span></span>
              ))}
            </div>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden rounded-xl border border-border-soft bg-[#0B1428] shadow-soft"
          >
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-white/30">api.reconfintech.com</span>
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed text-white/70 sm:text-sm">
              <div className="flex">
                <span className="text-emerald-400">$</span>
                <span className="ml-2 text-white/80">{api.endpoint.split('\n')[0]}</span>
              </div>
              <div className="mt-3 text-white/50">&gt; Response:</div>
              <pre className="mt-1 text-white/80">{JSON.stringify(api.response, null, 2)}</pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description + Highlights */}
      <section className="border-y border-border-soft bg-surface-soft/30 py-12">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div>
              <h2 className="mb-4 text-lg font-bold text-ink">Overview</h2>
              <p className="text-sm leading-relaxed text-body">{api.desc}</p>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold text-ink">Key Features</h2>
              <ul className="space-y-2.5">
                {api.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-body">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="section-container py-12">
        <h2 className="mb-6 text-xl font-bold text-ink">Code Examples</h2>

        {/* Language tabs */}
        <div className="mb-5 flex gap-1 rounded-xl border border-border-soft bg-surface-soft p-1">
          {langs.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setActiveLang(l)}
              className={`flex-1 rounded-lg px-4 py-2 text-xs font-semibold capitalize transition-all duration-200 ${
                activeLang === l ? 'bg-surface text-ink shadow-soft' : 'text-body hover:text-ink'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-border-soft bg-[#0B1428]">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-white/50">{api.endpoint.split(' ')[0]} {api.endpoint.split(' ')[1]}</span>
            </div>
            <button
              type="button"
              onClick={copyCode}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-white/40 transition-colors hover:bg-white/5 hover:text-white/70"
            >
              {copied ? (
                <><svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg> Copied</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg> Copy
                </>
              )}
            </button>
          </div>
          <pre className="max-h-96 overflow-auto p-5 font-mono text-xs leading-relaxed text-white/80 sm:text-sm"><code>{code}</code></pre>
        </div>

        {/* Response */}
        <div className="mt-4 overflow-hidden rounded-xl border border-border-soft bg-[#0B1428]">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-xs font-mono text-white/50">Response — 200 OK</span>
            </div>
          </div>
          <pre className="max-h-72 overflow-auto p-5 font-mono text-xs leading-relaxed text-white/80 sm:text-sm"><code>{JSON.stringify(api.response, null, 2)}</code></pre>
        </div>
      </section>

      {/* Endpoints */}
      <section className="border-y border-border-soft bg-surface-soft/30 py-12">
        <div className="section-container">
          <h2 className="mb-6 text-xl font-bold text-ink">Endpoints</h2>
          <div className="overflow-hidden rounded-xl border border-border-soft bg-surface">
            {api.endpoints.map((ep, i) => (
              <div key={ep.path} className={`flex items-center gap-4 px-5 py-4 ${i < api.endpoints.length - 1 ? 'border-b border-border-soft' : ''}`}>
                <span className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-xs font-bold ${
                  ep.method === 'GET' ? 'bg-emerald-50 text-emerald-700' : 'bg-primary/10 text-primary'
                }`}>{ep.method}</span>
                <code className="flex-1 text-sm font-mono text-ink">{ep.path}</code>
                <span className="text-xs text-body/70">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section className="section-container py-12">
        <h2 className="mb-6 text-xl font-bold text-ink">API Specifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {api.features.map((f) => (
            <div key={f.label} className="rounded-xl border border-border-soft bg-surface p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wider text-body/60">{f.label}</span>
              <p className="mt-1 text-sm font-bold text-ink">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other APIs */}
      <section className="border-t border-border-soft bg-surface-soft/30 py-12">
        <div className="section-container">
          <RevealOnScroll>
            <h2 className="mb-8 text-center text-xl font-bold text-ink">Explore Other APIs</h2>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {apiCategories.filter((a) => {
              const aSlug = a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
              return aSlug !== slug
            }).slice(0, 4).map((a) => {
              const aSlug = a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
              return (
                <Link
                  key={a.title}
                  to={`/api-platform/${aSlug}`}
                  className="group rounded-xl border border-border-soft bg-surface p-5 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:shadow-mid"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-250 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4.5 w-4.5"><path strokeLinecap="round" strokeLinejoin="round" d={a.icon} /></svg>
                  </span>
                  <div className="mt-3 flex items-center gap-2">
                    <h3 className="text-sm font-bold text-ink">{a.title}</h3>
                    {a.badge && <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${badgeColors[a.badge]}`}>{a.badge}</span>}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-body">{a.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
