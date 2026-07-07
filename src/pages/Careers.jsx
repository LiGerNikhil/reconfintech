import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const roles = [
  { title: 'Senior Cloud Architect', loc: 'London / Remote', type: 'Full-time', dept: 'Engineering' },
  { title: 'Lead Data Engineer', loc: 'New York / Remote', type: 'Full-time', dept: 'Data' },
  { title: 'Regulatory Compliance Specialist', loc: 'London', type: 'Full-time', dept: 'Advisory' },
  { title: 'FinTech Solutions Consultant', loc: 'Singapore / Remote', type: 'Full-time', dept: 'Advisory' },
]

const perks = [
  { title: 'Remote-First Culture', desc: 'Work from anywhere. We trust our team to deliver on their own schedule.' },
  { title: 'Competitive Compensation', desc: 'Top-quartile salaries, equity packages, and performance bonuses.' },
  { title: 'Learning & Development', desc: 'Annual budget for conferences, certifications, and courses of your choice.' },
  { title: 'Global Team Retreats', desc: 'Twice-yearly gatherings in world-class locations to connect and collaborate.' },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers — reconfintechconsultancy.com</title>
        <meta name="description" content="Join reconfintechconsultancy.com. We are hiring senior cloud architects, data engineers, compliance specialists, and FinTech consultants." />
      </Helmet>

      <section className="section-container pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <span className="eyebrow-label">Careers</span>
        <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">
          Build the <span className="text-primary">Future</span> of Finance With Us
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          We are always looking for exceptional people who share our passion for
          financial infrastructure. If you care deeply about your craft and want
          to work on problems that matter, you will fit right in.
        </p>
      </section>

      <section aria-labelledby="perks-heading" className="section-container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="eyebrow-label">Why Join Us</span>
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
          <h2 id="openings-heading" className="display-heading mt-3 text-3xl sm:text-4xl lg:text-5xl">Join Our Team</h2>
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
