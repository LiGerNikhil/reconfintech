import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const roles = [
  { title: 'Senior Reconciliation Engineer', loc: 'Mumbai / Remote', type: 'Full-time', dept: 'Engineering' },
  { title: 'Financial Data Compliance Analyst', loc: 'Bangalore / Remote', type: 'Full-time', dept: 'Compliance' },
  { title: 'Automated Reconciliation Architect', loc: 'London / Remote', type: 'Full-time', dept: 'Architecture' },
  { title: 'Multi-Gateway Integration Specialist', loc: 'Singapore / Remote', type: 'Full-time', dept: 'Integrations' },
]

const perks = [
  { title: 'Remote-First Reconciliation Lab', desc: 'Work from anywhere in the world. Our distributed team builds automated transaction reconciliation systems across time zones, backed by async workflows and bi-annual global meetups.' },
  { title: 'Competitive FinTech Compensation', desc: 'Top-quartile salaries, equity participation in our client success programmes, and performance bonuses tied to reconciliation accuracy and client outcomes.' },
  { title: 'Advanced Learning & Certification', desc: 'Annual budget for professional certifications in financial reconciliation, regulatory compliance (CAMS, CRCM), cloud architecture (AWS/Azure/GCP), and AI/ML programme attendance.' },
  { title: 'Mission-Driven Financial Impact', desc: 'Every line of code you write and every compliance framework you design directly reduces systemic risk in global financial infrastructure. Your work at Recon FinTech matters at planetary scale.' },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers — Recon FinTech Consultancy | Build Automated Reconciliation Systems</title>
        <meta name="description" content="Join Recon FinTech Consultancy. We are hiring senior reconciliation engineers, financial data compliance analysts, automated reconciliation architects, and multi-gateway integration specialists. Build enterprise automated financial reconciliation solutions at the best finance reconciliation architects in India." />
        <meta name="keywords" content="Recon FinTech Consultancy careers, reconciliation engineer jobs, FinTech compliance analyst jobs, automated reconciliation architect, financial data compliance careers, FinTech jobs India" />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Careers at Recon FinTech</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Build the <span className="text-primary">Future of Automated Reconciliation</span> With Us
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Recon FinTech Consultancy is always looking for exceptional people who share our passion for
          automated financial reconciliation, regulatory compliance, and high-integrity financial systems.
          If you care deeply about your craft and want to work on problems that reduce systemic risk in
          global finance, you will fit right in.
        </p>
      </section>

      <section aria-labelledby="perks-heading" className="section-container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">Why Join Recon FinTech</span>
          <h2 id="perks-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">What We Offer</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {perks.map((p) => (
            <div key={p.title} className="card-surface flex flex-col p-6 sm:p-8">
              <h3 className="mb-2 text-lg font-bold text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="openings-heading" className="section-container pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">Open Positions</span>
          <h2 id="openings-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">Join the Recon FinTech Team</h2>
        </div>
        <div className="grid gap-4">
          {roles.map((r) => (
            <div key={r.title} className="flex flex-col gap-3 rounded-xl border border-border-soft bg-surface p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-bold text-ink">{r.title}</h3>
                <p className="text-sm text-body/70">{r.dept} &middot; {r.loc} &middot; {r.type}</p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0 self-start sm:self-auto">Apply Now</Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-body/70">
          Dont see a role that fits?{' '}
          <a href="mailto:hello@reconfintechconsultancy.com" className="text-primary hover:text-primary-dark">Send us your CV</a>
        </p>
      </section>
    </>
  )
}
