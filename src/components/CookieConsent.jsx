import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'reconfintech_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4 md:p-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0B1428]/95 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6 sm:py-5 md:flex md:items-center md:gap-8 md:px-8">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
            Recon FinTech Consultancy uses essential and analytics cookies to ensure
            proper functionality and improve your experience. By clicking &ldquo;Accept&rdquo;,
            you consent to our use of cookies.{' '}
            <Link to="/cookies" className="whitespace-nowrap font-medium text-primary hover:text-primary-dark">
              Learn more
            </Link>
          </p>
        </div>
        <div className="mt-4 flex shrink-0 items-center gap-3 md:mt-0">
          <button
            type="button"
            onClick={decline}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/60 transition-colors duration-150 hover:border-white/30 hover:text-white sm:px-5 sm:text-sm"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-150 hover:bg-primary-dark hover:shadow-lg active:scale-[0.97] sm:px-6 sm:text-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
