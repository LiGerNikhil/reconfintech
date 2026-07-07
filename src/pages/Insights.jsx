import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const posts = [
  { title: 'The Future of Real-Time Payments in 2026', desc: 'How ISO 20022 and instant payment schemes are reshaping the global payments landscape.', date: 'Jun 28, 2026', readTime: '8 min read' },
  { title: 'Building a Compliance-First Data Architecture', desc: 'Key considerations for designing data systems that satisfy regulatory requirements from day one.', date: 'Jun 15, 2026', readTime: '12 min read' },
  { title: 'Zero-Trust Security for Financial Platforms', desc: 'Why traditional perimeter security is obsolete and how to implement a zero-trust architecture.', date: 'May 30, 2026', readTime: '10 min read' },
  { title: 'AI in FinTech: Opportunities and Guardrails', desc: 'A balanced look at where AI adds real value in financial services and where regulation needs to catch up.', date: 'May 12, 2026', readTime: '15 min read' },
]

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights — reconfintechconsultancy.com</title>
        <meta name="description" content="Industry insights, thought leadership, and technical deep-dives from the team at reconfintechconsultancy.com." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Insights</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Thought <span className="text-primary">Leadership</span> for Modern Finance
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Our team publishes regularly on the technologies, regulations, and
          strategies shaping the future of financial infrastructure.
        </p>
      </section>

      <section className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {posts.map((post) => (
            <article key={post.title} className="card-surface flex flex-col p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3 text-xs text-body/70">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-body/30" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="mb-2 text-lg font-bold text-ink">{post.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-body">{post.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read more &rarr;</span>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
