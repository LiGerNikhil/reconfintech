export const apiCategories = [
  { title: 'Payment Gateway API', desc: 'Process payments via UPI, cards, net banking, and wallets through a single unified API.', badge: 'V2', icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' },
  { title: 'Transaction Reconciliation API', desc: 'Automated ledger matching and real-time reconciliation for millions of transactions.', badge: 'Coming Soon', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' },
  { title: 'AEPS API', desc: 'Biometric Aadhaar-enabled payment processing via NPCI-certified infrastructure.', badge: 'Beta', icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z' },
  { title: 'Settlement API', desc: 'Real-time settlement orchestration with multi-currency and FX netting support.', badge: 'V2', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
  { title: 'Compliance API', desc: 'Regulatory reporting, AML/KYC screening, and audit trail automation.', badge: 'Coming Soon', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
  { title: 'KYC Verification API', desc: 'Automated identity verification with document OCR and biometric matching.', badge: 'Beta', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { title: 'Merchant API', desc: 'Merchant onboarding, sub-merchant management, and settlement splitting.', badge: 'V2', icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' },
  { title: 'Account Management API', desc: 'Virtual account creation, balance enquiry, and transaction history.', badge: 'Enterprise', icon: 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' },
  { title: 'Webhook API', desc: 'Real-time event notifications for transactions, settlements, and compliance alerts.', badge: 'V2', icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' },
  { title: 'Analytics API', desc: 'Programmatic access to reconciliation metrics, dashboards, and custom reports.', badge: 'Coming Soon', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
]

export const features = [
  { title: 'REST APIs', desc: 'Standard RESTful architecture with predictable resource-oriented URLs.', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
  { title: 'JSON Responses', desc: 'Clean JSON payloads with consistent structures across all endpoints.', icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
  { title: 'Webhook Support', desc: 'Real-time event-driven notifications for transaction and settlement updates.', icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' },
  { title: 'OAuth Authentication', desc: 'Secure OAuth 2.0 flows with scoped access tokens for granular permissions.', icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z' },
  { title: 'JWT Security', desc: 'JSON Web Token-based authentication with configurable expiry and refresh flows.', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
  { title: 'API Keys', desc: 'Simple API key authentication for server-to-server integration.', icon: 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' },
  { title: 'Rate Limiting', desc: 'Fair usage policies with burst capacity and clear rate limit headers.', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'SDK Support', desc: 'Official client libraries for JavaScript, Python, Node.js, PHP, and Java.', icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 9h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z' },
  { title: 'Sandbox Environment', desc: 'Full-featured test environment with mock data for rapid development.', icon: 'M9.75 3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75m9 3.75a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Versioning', desc: 'Clear versioning strategy with backward compatibility guarantees.', icon: 'M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75H17.25m-2.25 4.5h6m-6 0l-3-3m0 0l3 3m-3-3h6' },
  { title: '99.99% Availability', desc: 'Enterprise SLA with multi-region deployment and automatic failover.', icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' },
]

export const securityItems = [
  { title: 'API Keys', desc: 'Generate and rotate API keys with granular permission scopes.' },
  { title: 'OAuth 2.0', desc: 'Industry-standard authorization framework for secure delegated access.' },
  { title: 'JWT Tokens', desc: 'Stateless authentication with RS256 signing and short-lived expiry.' },
  { title: 'TLS Encryption', desc: 'All API traffic encrypted using TLS 1.3 with perfect forward secrecy.' },
  { title: 'Role Permissions', desc: 'Role-based access control for team and application-level security.' },
  { title: 'Audit Logs', desc: 'Complete request and activity logging with 90-day retention.' },
  { title: 'Rate Limiting', desc: 'Per-key rate limiting with burst allowance and clear headers.' },
  { title: 'IP Whitelisting', desc: 'Restrict API access to trusted IP ranges for additional security.' },
]

export const devExperience = [
  { title: 'Sandbox Testing', desc: 'Full test environment with synthetic data for rapid prototyping.' },
  { title: 'Fast Integration', desc: 'Get live in hours with clear docs, SDKs, and quickstart guides.' },
  { title: 'SDK Support', desc: 'Official SDKs for JavaScript, Python, Node.js, PHP, and Java.' },
  { title: 'Webhook Events', desc: 'Real-time notifications for transaction status and settlement events.' },
  { title: 'Version Control', desc: 'Stable versioned APIs with clear changelogs and migration guides.' },
  { title: 'Enterprise SLA', desc: '99.99% uptime guarantee with 24/7 priority support.' },
  { title: 'Detailed Documentation', desc: 'Comprehensive API reference with code examples in multiple languages.' },
  { title: '24/7 Technical Support', desc: 'Round-the-clock engineering support via chat, email, and phone.' },
]

export const integrations = [
  'Banks', 'Payment Gateways', 'ERP Systems', 'SAP', 'Oracle', 'QuickBooks',
  'UPI', 'Visa', 'Mastercard', 'AEPS', 'NPCI', 'Stripe', 'PayPal', ' Razorpay',
]

export const sidebarNav = [
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
