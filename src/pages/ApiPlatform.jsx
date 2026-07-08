import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import Hero from '../components/api/Hero'
import ApiCard from '../components/api/ApiCard'
import FeatureCard from '../components/api/FeatureCard'
import DocumentationPanel from '../components/api/DocumentationPanel'
import Workflow from '../components/api/Workflow'
import SecuritySection from '../components/api/SecuritySection'
import CTA from '../components/api/CTA'
import { apiCategories, features, devExperience, integrations } from '../components/api/data'

export default function ApiPlatform() {
  return (
    <>
      <Helmet>
        <title>API Platform — Recon FinTech Consultancy | Enterprise APIs for Financial Infrastructure</title>
        <meta name="description" content="Recon FinTech API Platform: secure, scalable REST APIs for payment reconciliation, compliance automation, settlements, AEPS, webhooks, and financial workflows. Enterprise-grade with 99.99% availability." />
        <meta name="keywords" content="Recon FinTech APIs, payment gateway API, reconciliation API, settlement API, compliance API, AEPS API, FinTech API platform, REST API financial services, enterprise API provider" />
      </Helmet>

      <Hero />

      {/* API Categories */}
      <section id="api-categories" className="section-container py-16 md:py-20">
        <RevealOnScroll>
          <div className="mb-10 text-center">
            <span className="eyebrow-label">API Products</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Our API Ecosystem</h2>
            <p className="mx-auto mt-3 max-w-2xl text-body">Comprehensive APIs covering payments, reconciliation, compliance, settlements, and financial infrastructure.</p>
          </div>
        </RevealOnScroll>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apiCategories.map((api, i) => (
            <ApiCard key={api.title} {...api} index={i} />
          ))}
        </div>
      </section>

      {/* API Features */}
      <section className="bg-surface-soft/50 py-16 md:py-20">
        <div className="section-container">
          <RevealOnScroll>
            <div className="mb-10 text-center">
              <span className="eyebrow-label">Platform Features</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Everything You Need to Build</h2>
              <p className="mx-auto mt-3 max-w-2xl text-body">Modern APIs designed for the most demanding financial integration projects.</p>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feat, i) => (
              <FeatureCard key={feat.title} {...feat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive API Documentation */}
      <DocumentationPanel />

      {/* API Workflow */}
      <div className="bg-surface-soft/50">
        <Workflow />
      </div>

      {/* Security */}
      <SecuritySection />

      {/* Developer Experience */}
      <section className="bg-surface-soft/50 py-16 md:py-20">
        <div className="section-container">
          <RevealOnScroll>
            <div className="mb-10 text-center">
              <span className="eyebrow-label">Developer Experience</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Built for Developers</h2>
              <p className="mx-auto mt-3 max-w-2xl text-body">Everything you need to integrate quickly and confidently.</p>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {devExperience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border-soft bg-surface p-5 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:shadow-mid"
              >
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="section-container py-16 md:py-20">
        <RevealOnScroll>
          <div className="mb-10 text-center">
            <span className="eyebrow-label">Integrations</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Works with Your Stack</h2>
            <p className="mx-auto mt-3 max-w-2xl text-body">Connect seamlessly with banks, payment gateways, ERPs, and financial platforms.</p>
          </div>
        </RevealOnScroll>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center rounded-xl border border-border-soft bg-surface px-5 py-3 text-sm font-semibold text-body shadow-soft transition-all duration-250 hover:border-primary/20 hover:text-primary hover:shadow-mid"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
