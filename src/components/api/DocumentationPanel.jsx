import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import CodeTabs from './CodeTabs'

export default function DocumentationPanel() {
  const [activeSection, setActiveSection] = useState('payments')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const docs = {
    payments: {
      title: 'Payments API',
      desc: 'Process payments through a single unified API supporting UPI, cards, net banking, and wallets.',
      endpoint: 'POST /api/v2/payments/charge',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json', 'X-Merchant-Id': 'MERCHANT_12345' },
      body: { amount: 249900, currency: 'INR', payment_method: 'upi', description: 'Invoice #INV-2026-0784', customer: { id: 'CUST-78341', email: 'customer@example.com', phone: '+919911444938' } },
      response: { success: true, transaction_id: 'TXN-928374651', status: 'completed', amount: 249900, fee: 498, processing_time: '0.34s', settled_at: '2026-07-08T10:32:18Z' },
    },
    transactions: {
      title: 'Transactions API',
      desc: 'Retrieve, reconcile, and manage financial transactions across all payment rails.',
      endpoint: 'POST /api/v2/reconciliation/transactions',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: { merchant_id: 'MERCHANT_12345', from_date: '2026-07-01', to_date: '2026-07-08', status: 'SUCCESS' },
      response: { success: true, request_id: 'REQ-839482', total_transactions: 1839, matched: 1812, exceptions: 27, processing_time: '0.82s' },
    },
    settlement: {
      title: 'Settlement API',
      desc: 'Orchestrate multi-currency settlements with real-time FX conversion and netting.',
      endpoint: 'POST /api/v2/settlement/create',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: { merchant_id: 'MERCHANT_12345', currency: 'USD', amount: 50000, settlement_method: 'bank_transfer', beneficiary: { account: '1234567890', ifsc: 'HDFC0001234', bank: 'HDFC Bank' } },
      response: { success: true, settlement_id: 'STL-764923', amount: 50000, fee: 125, fx_rate: 83.42, estimated_arrival: '2026-07-09T14:00:00Z' },
    },
    compliance: {
      title: 'Compliance API',
      desc: 'Automated AML/KYC screening, regulatory reporting, and audit trail generation.',
      endpoint: 'POST /api/v2/compliance/screen',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: { entity_type: 'individual', name: 'John Doe', dob: '1990-05-15', nationality: 'IN', document: { type: 'aadhaar', number: 'XXXX-XXXX-7890' } },
      response: { success: true, screening_id: 'SCR-567382', risk_score: 12, flags: [], status: 'clear', processing_time: '1.24s' },
    },
    merchants: {
      title: 'Merchants API',
      desc: 'Onboard merchants, manage sub-merchants, and configure settlement splitting.',
      endpoint: 'POST /api/v2/merchants/create',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: { business_name: 'Example Corp', business_type: 'private_limited', gstin: '27ABCDE1234F1Z5', contact: { email: 'finance@examplecorp.com', phone: '+919911444938' }, settlement: { split: [{ account: 'merchant_1', percentage: 70 }, { account: 'platform', percentage: 30 }] } },
      response: { success: true, merchant_id: 'MERCH-892345', api_key: 'sk_live_xxxxxxxxxxxxx', status: 'active', created_at: '2026-07-08T12:00:00Z' },
    },
    accounts: {
      title: 'Accounts API',
      desc: 'Create virtual accounts, check balances, and retrieve transaction history.',
      endpoint: 'GET /api/v2/accounts/:id/transactions',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: null,
      response: { success: true, account_id: 'ACC-456789', balance: 1250000, currency: 'INR', transactions: [{ id: 'TXN-001', type: 'credit', amount: 50000, status: 'settled', timestamp: '2026-07-08T09:15:00Z' }] },
    },
    webhooks: {
      title: 'Webhooks API',
      desc: 'Receive real-time event notifications for transaction and settlement updates.',
      endpoint: 'POST /api/v2/webhooks/register',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: { url: 'https://example.com/webhooks/recon', events: ['transaction.completed', 'settlement.created', 'compliance.flag'], secret: 'whsec_your_webhook_secret' },
      response: { success: true, webhook_id: 'WH-672341', status: 'active', events_registered: 3 },
    },
    analytics: {
      title: 'Analytics API',
      desc: 'Programmatic access to reconciliation metrics and custom report generation.',
      endpoint: 'GET /api/v2/analytics/reconciliation-summary',
      auth: 'Authorization: Bearer YOUR_API_KEY',
      headers: { 'Content-Type': 'application/json' },
      body: null,
      response: { success: true, period: { from: '2026-07-01', to: '2026-07-08' }, total_volume: 245000000, total_transactions: 18392, match_rate: 98.53, exception_rate: 1.47, avg_processing_time: '0.76s' },
    },
  }

  const section = docs[activeSection] || docs.payments

  return (
    <section id="api-docs" className="section-container py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="eyebrow-label">Interactive Documentation</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Try Our APIs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-body">Explore our API endpoints with real request and response examples.</p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-soft">
          <div className="flex items-center gap-2 border-b border-border-soft bg-surface-soft px-5 py-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-2 rounded-lg p-1.5 text-body transition-colors hover:bg-surface hover:text-ink lg:hidden"
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
            <span className="text-sm font-semibold text-ink">{section.title}</span>
            <span className="ml-auto text-xs text-body/50">v2.0.0</span>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className={`${sidebarOpen ? 'block' : 'hidden'} border-r border-border-soft lg:block lg:w-56`}>
              <Sidebar items={sidebarNav} active={activeSection} onSelect={(id) => { setActiveSection(id); setSidebarOpen(false) }} />
            </div>

            <div className="min-w-0 flex-1 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="mb-4 text-sm text-body">{section.desc}</p>
                  <CodeTabs
                    endpoint={section.endpoint}
                    auth={section.auth}
                    headers={section.headers}
                    body={section.body}
                    response={section.response}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const sidebarNav = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'payments', label: 'Payments' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'settlement', label: 'Settlement' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'merchants', label: 'Merchants' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'rate-limits', label: 'Rate Limits' },
  { id: 'errors', label: 'Errors' },
  { id: 'versioning', label: 'Versioning' },
]
