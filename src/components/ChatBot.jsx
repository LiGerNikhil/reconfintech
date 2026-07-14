import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
]

const services = [
  { label: 'Automated Transaction Reconciliation', to: '/services/automated-reconciliation' },
  { label: 'FinTech Compliance & Data Auditing', to: '/services/compliance-auditing' },
  { label: 'Multi-Payment Gateway Reconciliation', to: '/services/multi-payment-reconciliation' },
  { label: 'Cross-Border Settlement Architecture', to: '/services/cross-border-settlement' },
  { label: 'AI-Driven Ledger Analytics', to: '/services/ai-ledger-analytics' },
  { label: 'Cybersecurity & Regulatory Advisory', to: '/services/cybersecurity-advisory' },
  { label: 'Web Development & Portal Engineering', to: '/services/web-development' },
  { label: 'Mobile App Development', to: '/services/app-development' },
  { label: 'IoT & Embedded Systems Integration', to: '/services/iot-integrations' },
  { label: 'AI & Machine Learning Integration', to: '/services/ai-ml-integrations' },
  { label: 'Technology Consulting', to: '/services/tech-consulting' },
  { label: 'SaaS Platform Engineering', to: '/services/saas-engineering' },
  { label: 'Software Development', to: '/services/software-development' },
  { label: 'Technology Development', to: '/services/tech-development' },
  { label: 'Payment Aggregator Services', to: '/services/payment-aggregator' },
  { label: 'AEPS — Aadhaar Enabled Payment System', to: '/services/aeps' },
]

const quickActions = [
  { id: 'pages', label: 'Pages' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

const waNumber = '919911444938'
const waUrl = `https://wa.me/${waNumber}?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20FinTech%20consultancy%20services.`

function BotMessage({ children }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">RB</span>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface-soft px-4 py-2.5 text-sm text-body shadow-sm">
        {children}
      </div>
    </div>
  )
}

function UserMessage({ children }) {
  return (
    <div className="flex items-start justify-end gap-2">
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-white shadow-sm">
        {children}
      </div>
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary">You</span>
    </div>
  )
}

function LinkGrid({ items }) {
  return (
    <div className="mt-2 flex flex-col gap-1">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 hover:text-primary-dark"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: '👋 Hi! I\'m Recon Bot. How can I help you today?' },
  ])
  const [showActions, setShowActions] = useState(true)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function addBot(content) {
    setMessages((prev) => [...prev, { role: 'bot', content }])
  }

  function addUser(content) {
    setMessages((prev) => [...prev, { role: 'user', content }])
  }

  function handleAction(id) {
    setShowActions(false)
    if (id === 'pages') {
      addUser('Show me all pages')
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: (
          <div>
            <p className="mb-1">Here are all the pages on Recon FinTech:</p>
            <LinkGrid items={pages} />
          </div>
        ),
      }])
    } else if (id === 'services') {
      addUser('Show me all services')
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: (
          <div>
            <p className="mb-1">We offer 16 enterprise FinTech services:</p>
            <LinkGrid items={services} />
          </div>
        ),
      }])
    } else if (id === 'contact') {
      addUser('Show me contact info')
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: (
          <div>
            <p className="mb-2 font-semibold text-ink">Get in touch</p>
            <div className="flex flex-col gap-1.5">
              <a href={`tel:+91${waNumber}`} className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5">📞 +91 99114 44938</a>
              <a href={`mailto:info@reconfintech.com`} className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5">✉️ info@reconfintech.com</a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5">💬 Chat on WhatsApp</a>
            </div>
          </div>
        ),
      }])
    }
  }

  function resetChat() {
    setMessages([
      { role: 'bot', content: '👋 Hi! I\'m Recon Bot. How can I help you today?' },
    ])
    setShowActions(true)
  }

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      {open && (
        <div className="mb-3 flex w-[360px] flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-mid md:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">RB</span>
              <div>
                <p className="text-sm font-bold">Recon Bot</p>
                <p className="text-[11px] text-white/70">FinTech Consultancy Assistant</p>
              </div>
            </div>
            <button type="button" onClick={resetChat} className="rounded-full p-1.5 transition-colors hover:bg-white/10" aria-label="Reset chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex max-h-[420px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              msg.role === 'bot'
                ? <BotMessage key={i}>{msg.content}</BotMessage>
                : <UserMessage key={i}>{msg.content}</UserMessage>
            ))}

            {showActions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => handleAction(action.id)}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary transition-all duration-250 hover:bg-primary hover:text-white"
                  >
                    {action.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleAction.bind(null, 'contact')}
                  className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white transition-all duration-250 hover:bg-emerald-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </button>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-250 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 md:h-16 md:w-16"
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 md:h-7 md:w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.437 5.18L2 22l4.82-1.437A9.98 9.98 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
        )}
      </button>
    </div>
  )
}