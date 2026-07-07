import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | reconfintechconsultancy.com</title>
      </Helmet>
      <section className="section-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-8xl font-extrabold tracking-tight text-primary/20">404</span>
        <h1 className="display-heading mt-4 text-3xl sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-body">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </section>
    </>
  )
}
