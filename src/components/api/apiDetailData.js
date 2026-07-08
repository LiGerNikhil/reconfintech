export const apiDetailData = {
  'payment-gateway-api': {
    title: 'Payment Gateway API',
    subtitle: 'Process payments via UPI, cards, net banking, and wallets through a single unified API.',
    badge: 'V2',
    endpoint: 'POST /api/v2/payments/charge',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json', 'X-Merchant-Id': 'MERCHANT_12345' },
    requestBody: { amount: 249900, currency: 'INR', payment_method: 'upi', description: 'Invoice #INV-2026-0784', customer: { id: 'CUST-78341', email: 'customer@example.com', phone: '+919911444938' } },
    response: { success: true, transaction_id: 'TXN-928374651', status: 'completed', amount: 249900, fee: 498, processing_time: '0.34s', settled_at: '2026-07-08T10:32:18Z' },
    desc: 'Recon FinTech\'s Payment Gateway API provides a unified interface for processing payments across UPI, credit/debit cards, net banking, and digital wallets. Designed for enterprise-grade throughput, our API handles millions of transactions daily with sub-500ms response times. Built with PCI DSS Level 1 compliance, the Payment Gateway API supports smart transaction routing, automatic retry logic, and real-time webhook notifications for every state change.',
    highlights: [
      'Single API for UPI, cards, net banking, and wallets',
      'PCI DSS Level 1 compliant infrastructure',
      'Smart transaction routing for optimal success rates',
      'Automatic retry with configurable backoff strategies',
      'Real-time webhook notifications on state changes',
      'Sub-500ms average response time at P99',
      'Multi-currency support with automatic FX conversion',
      'Recurring payment and subscription management',
      'Detailed transaction reporting and reconciliation data',
      'Sandbox environment with simulated payment scenarios',
    ],
    features: [
      { label: 'Authentication', value: 'API Key + OAuth 2.0' },
      { label: 'Rate Limit', value: '10,000 requests/minute' },
      { label: 'Latency SLA', value: '< 500ms P99' },
      { label: 'Webhook Support', value: 'Yes — 15 event types' },
      { label: 'SDK Support', value: 'JS, Python, Node, PHP, Java' },
      { label: 'Idempotency', value: 'Supported via Idempotency-Key' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/payments/charge \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "X-Merchant-Id: MERCHANT_12345" \\
  -d '{
    "amount": 249900,
    "currency": "INR",
    "payment_method": "upi",
    "description": "Invoice #INV-2026-0784",
    "customer": {
      "id": "CUST-78341",
      "email": "customer@example.com",
      "phone": "+919911444938"
    }
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/payments/charge", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
    "X-Merchant-Id": "MERCHANT_12345"
  },
  body: JSON.stringify({
    amount: 249900,
    currency: "INR",
    payment_method: "upi",
    description: "Invoice #INV-2026-0784",
    customer: {
      id: "CUST-78341",
      email: "customer@example.com",
      phone: "+919911444938"
    }
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
    "X-Merchant-Id": "MERCHANT_12345"
}

data = {
    "amount": 249900,
    "currency": "INR",
    "payment_method": "upi",
    "description": "Invoice #INV-2026-0784",
    "customer": {
        "id": "CUST-78341",
        "email": "customer@example.com",
        "phone": "+919911444938"
    }
}

response = requests.post(
    "https://api.reconfintech.com/v2/payments/charge",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/payments/charge', desc: 'Process a payment' },
      { method: 'GET', path: '/payments/:id', desc: 'Retrieve payment details' },
      { method: 'POST', path: '/payments/:id/refund', desc: 'Refund a payment' },
      { method: 'GET', path: '/payments', desc: 'List all payments' },
    ],
  },
  'transaction-reconciliation-api': {
    title: 'Transaction Reconciliation API',
    subtitle: 'Automated ledger matching and real-time reconciliation for millions of transactions.',
    badge: 'Coming Soon',
    endpoint: 'POST /api/v2/reconciliation/transactions',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { merchant_id: 'MERCHANT_12345', from_date: '2026-07-01', to_date: '2026-07-08', status: 'SUCCESS' },
    response: { success: true, request_id: 'REQ-839482', total_transactions: 1839, matched: 1812, exceptions: 27, match_rate: '98.53%', processing_time: '0.82s' },
    desc: 'The Transaction Reconciliation API automates the entire reconciliation lifecycle — from data ingestion to exception resolution. It ingests transaction data from multiple sources (bank statements, gateway reports, internal ledgers), performs AI-driven matching across configurable rule sets, and produces audit-ready reconciliation reports. Designed for financial platforms processing over $50B in annual transaction volume.',
    highlights: [
      'AI-driven matching across thousands of rules',
      'Multi-source data ingestion and normalization',
      'Real-time exception flagging and alerting',
      'Configurable matching rules engine',
      'Audit-ready reports with full traceability',
      '99.99% reconciliation accuracy guarantee',
      'Automated exception workflow and escalation',
      'Integration with 50+ payment sources',
      'Sub-second matching for high-volume batches',
      'Real-time reconciliation dashboards',
    ],
    features: [
      { label: 'Authentication', value: 'API Key + OAuth 2.0' },
      { label: 'Rate Limit', value: '5,000 requests/minute' },
      { label: 'Batch Size', value: 'Up to 1M transactions/batch' },
      { label: 'Matching Accuracy', value: '99.99% SLA' },
      { label: 'Data Sources', value: '50+ supported' },
      { label: 'Export Formats', value: 'CSV, JSON, PDF, XLSX' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/reconciliation/transactions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant_id": "MERCHANT_12345",
    "from_date": "2026-07-01",
    "to_date": "2026-07-08",
    "status": "SUCCESS"
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/reconciliation/transactions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    merchant_id: "MERCHANT_12345",
    from_date: "2026-07-01",
    to_date: "2026-07-08",
    status: "SUCCESS"
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "merchant_id": "MERCHANT_12345",
    "from_date": "2026-07-01",
    "to_date": "2026-07-08",
    "status": "SUCCESS"
}

response = requests.post(
    "https://api.reconfintech.com/v2/reconciliation/transactions",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/reconciliation/transactions', desc: 'Run reconciliation' },
      { method: 'GET', path: '/reconciliation/:id', desc: 'Get reconciliation result' },
      { method: 'GET', path: '/reconciliation/exceptions', desc: 'List exceptions' },
      { method: 'POST', path: '/reconciliation/rules', desc: 'Create matching rule' },
    ],
  },
  'aeps-api': {
    title: 'AEPS API',
    subtitle: 'Biometric Aadhaar-enabled payment processing via NPCI-certified infrastructure.',
    badge: 'Beta',
    endpoint: 'POST /api/v2/aeps/transaction',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json', 'X-AEPS-Merchant': 'MERCHANT_12345' },
    requestBody: { transaction_type: 'cash_withdrawal', aadhaar: 'XXXX-XXXX-7890', amount: 5000, bank_name: 'State Bank of India', device_id: 'ATM-001234' },
    response: { success: true, aeps_id: 'AEPS-874329', status: 'completed', amount: 5000, bank_ref: 'SBI-REF-837462', processing_time: '1.24s' },
    desc: 'Recon FinTech\'s AEPS API enables banks and FinTech platforms to deliver secure biometric-authenticated financial services across India. Supporting cash withdrawal, balance enquiry, fund transfer, Aadhaar-to-Aadhaar payments, and mini statements through NPCI-certified channels. Built with end-to-end encryption and full regulatory compliance for the India Stack ecosystem.',
    highlights: [
      'NPCI-certified AEPS transaction processing',
      'Biometric authentication via Aadhaar fingerprint/iris',
      'Cash withdrawal and deposit via micro-ATM devices',
      'Real-time balance enquiry and mini statement',
      'Aadhaar-to-Aadhaar fund transfer with instant settlement',
      'Merchant onboarding and AEPS agent network management',
      'End-to-end encryption and biometric data security',
      'Interoperable AEPS integration with banking partners',
      'Transaction reconciliation for AEPS payment flows',
      'Support for all major Indian banks',
    ],
    features: [
      { label: 'Authentication', value: 'API Key + Biometric' },
      { label: 'Rate Limit', value: '3,000 requests/minute' },
      { label: 'NPCI Certified', value: 'Yes' },
      { label: 'Supported Banks', value: '50+ Indian banks' },
      { label: 'Transaction Types', value: '6 types supported' },
      { label: 'Encryption', value: 'AES-256 + TLS 1.3' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/aeps/transaction \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "X-AEPS-Merchant: MERCHANT_12345" \\
  -d '{
    "transaction_type": "cash_withdrawal",
    "aadhaar": "XXXX-XXXX-7890",
    "amount": 5000,
    "bank_name": "State Bank of India",
    "device_id": "ATM-001234"
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/aeps/transaction", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
    "X-AEPS-Merchant": "MERCHANT_12345"
  },
  body: JSON.stringify({
    transaction_type: "cash_withdrawal",
    aadhaar: "XXXX-XXXX-7890",
    amount: 5000,
    bank_name: "State Bank of India",
    device_id: "ATM-001234"
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
    "X-AEPS-Merchant": "MERCHANT_12345"
}

data = {
    "transaction_type": "cash_withdrawal",
    "aadhaar": "XXXX-XXXX-7890",
    "amount": 5000,
    "bank_name": "State Bank of India",
    "device_id": "ATM-001234"
}

response = requests.post(
    "https://api.reconfintech.com/v2/aeps/transaction",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/aeps/transaction', desc: 'Process AEPS transaction' },
      { method: 'GET', path: '/aeps/:id', desc: 'Get transaction status' },
      { method: 'POST', path: '/aeps/balance', desc: 'Check balance enquiry' },
      { method: 'GET', path: '/aeps/agents', desc: 'List AEPS agents' },
    ],
  },
  'settlement-api': {
    title: 'Settlement API',
    subtitle: 'Real-time settlement orchestration with multi-currency and FX netting support.',
    badge: 'V2',
    endpoint: 'POST /api/v2/settlement/create',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { merchant_id: 'MERCHANT_12345', currency: 'USD', amount: 50000, settlement_method: 'bank_transfer', beneficiary: { account: '1234567890', ifsc: 'HDFC0001234', bank: 'HDFC Bank' } },
    response: { success: true, settlement_id: 'STL-764923', amount: 50000, fee: 125, fx_rate: 83.42, estimated_arrival: '2026-07-09T14:00:00Z' },
    desc: 'The Settlement API orchestrates end-to-end settlement flows across multiple currencies, payment methods, and geographies. It handles FX conversion, netting calculations, beneficiary validation, and real-time status tracking. Built for enterprises processing cross-border payments, the Settlement API integrates with correspondent banking networks, SWIFT, and local clearing systems.',
    highlights: [
      'Multi-currency settlement with real-time FX conversion',
      'FX netting and optimisation engine',
      'Correspondent banking and SWIFT integration',
      'Beneficiary account validation (IFSC, IBAN, routing)',
      'Real-time settlement status tracking and webhooks',
      'Batch and instant settlement modes',
      'Automatic retry and failure handling',
      'Detailed settlement reports with audit trail',
      'Multi-jurisdiction regulatory compliance',
      'Configurable settlement schedules and thresholds',
    ],
    features: [
      { label: 'Authentication', value: 'API Key + OAuth 2.0' },
      { label: 'Rate Limit', value: '2,000 requests/minute' },
      { label: 'Settlement Modes', value: 'Instant, T+1, Batch' },
      { label: 'Supported Currencies', value: '15+ currencies' },
      { label: 'FX Rate Updates', value: 'Real-time' },
      { label: 'SWIFT Integration', value: 'Yes — MT/MX messages' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/settlement/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant_id": "MERCHANT_12345",
    "currency": "USD",
    "amount": 50000,
    "settlement_method": "bank_transfer",
    "beneficiary": {
      "account": "1234567890",
      "ifsc": "HDFC0001234",
      "bank": "HDFC Bank"
    }
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/settlement/create", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    merchant_id: "MERCHANT_12345",
    currency: "USD",
    amount: 50000,
    settlement_method: "bank_transfer",
    beneficiary: {
      account: "1234567890",
      ifsc: "HDFC0001234",
      bank: "HDFC Bank"
    }
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "merchant_id": "MERCHANT_12345",
    "currency": "USD",
    "amount": 50000,
    "settlement_method": "bank_transfer",
    "beneficiary": {
        "account": "1234567890",
        "ifsc": "HDFC0001234",
        "bank": "HDFC Bank"
    }
}

response = requests.post(
    "https://api.reconfintech.com/v2/settlement/create",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/settlement/create', desc: 'Create settlement' },
      { method: 'GET', path: '/settlement/:id', desc: 'Get settlement status' },
      { method: 'POST', path: '/settlement/netting', desc: 'Calculate FX netting' },
      { method: 'GET', path: '/settlement/rates', desc: 'Get FX rates' },
    ],
  },
  'compliance-api': {
    title: 'Compliance API',
    subtitle: 'Regulatory reporting, AML/KYC screening, and audit trail automation.',
    badge: 'Coming Soon',
    endpoint: 'POST /api/v2/compliance/screen',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { entity_type: 'individual', name: 'John Doe', dob: '1990-05-15', nationality: 'IN', document: { type: 'aadhaar', number: 'XXXX-XXXX-7890' } },
    response: { success: true, screening_id: 'SCR-567382', risk_score: 12, flags: [], status: 'clear', processing_time: '1.24s' },
    desc: 'The Compliance API automates regulatory screening, reporting, and audit workflows for financial institutions. It integrates with global sanctions lists, PEP databases, and adverse media sources to provide real-time AML/KYC screening. The API also generates regulatory reports in standard formats and maintains immutable audit trails for all compliance activities.',
    highlights: [
      'Real-time AML/KYC screening against global databases',
      'Sanctions list, PEP, and adverse media checks',
      'Automated regulatory report generation',
      'Immutable audit trail for all compliance events',
      'Risk scoring with configurable threshold rules',
      'Document verification with OCR and biometric matching',
      'Continuous monitoring and re-screening',
      'Multi-jurisdiction regulatory rule sets',
      'Automated suspicious activity report (SAR) filing',
      'Integration with major RegTech providers',
    ],
    features: [
      { label: 'Authentication', value: 'API Key + OAuth 2.0' },
      { label: 'Rate Limit', value: '5,000 requests/minute' },
      { label: 'Screening Sources', value: '50+ global lists' },
      { label: 'Supported Documents', value: '10+ types' },
      { label: 'Risk Scoring', value: 'ML-based' },
      { label: 'Audit Trail', value: 'Immutable, 7-year retention' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/compliance/screen \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity_type": "individual",
    "name": "John Doe",
    "dob": "1990-05-15",
    "nationality": "IN",
    "document": {
      "type": "aadhaar",
      "number": "XXXX-XXXX-7890"
    }
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/compliance/screen", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    entity_type: "individual",
    name: "John Doe",
    dob: "1990-05-15",
    nationality: "IN",
    document: {
      type: "aadhaar",
      number: "XXXX-XXXX-7890"
    }
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "entity_type": "individual",
    "name": "John Doe",
    "dob": "1990-05-15",
    "nationality": "IN",
    "document": {
        "type": "aadhaar",
        "number": "XXXX-XXXX-7890"
    }
}

response = requests.post(
    "https://api.reconfintech.com/v2/compliance/screen",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/compliance/screen', desc: 'Screen entity' },
      { method: 'GET', path: '/compliance/:id', desc: 'Get screening result' },
      { method: 'POST', path: '/compliance/report', desc: 'Generate report' },
      { method: 'GET', path: '/compliance/audit-log', desc: 'Get audit trail' },
    ],
  },
  'kyc-verification-api': {
    title: 'KYC Verification API',
    subtitle: 'Automated identity verification with document OCR and biometric matching.',
    badge: 'Beta',
    endpoint: 'POST /api/v2/kyc/verify',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { verification_type: 'document', document_type: 'PAN', document_number: 'ABCDE1234F', name: 'John Doe', dob: '1990-05-15' },
    response: { success: true, verification_id: 'KYC-738291', status: 'verified', confidence: 98.7, matched_fields: ['name', 'dob'], processing_time: '0.89s' },
    desc: 'The KYC Verification API provides automated identity verification using document OCR, biometric matching, and database cross-referencing. It supports Aadhaar, PAN, Passport, Voter ID, and Driving License verification against government databases. Built for FinTech platforms requiring rapid, compliant customer onboarding at scale.',
    highlights: [
      'Document OCR with 99%+ accuracy',
      'Biometric face matching and liveness detection',
      'Government database cross-referencing',
      'Support for Aadhaar, PAN, Passport, Voter ID, DL',
      'Real-time verification status with webhook callbacks',
      'Configurable acceptance thresholds',
      'Automated duplicate detection',
      'End-to-end encryption of sensitive documents',
      'Regulatory compliance with Indian KYC norms',
      'Scalable to 10,000+ verifications per hour',
    ],
    features: [
      { label: 'Authentication', value: 'API Key' },
      { label: 'Rate Limit', value: '2,000 requests/minute' },
      { label: 'Document Types', value: '6+ supported' },
      { label: 'OCR Accuracy', value: '99.2%' },
      { label: 'Verification Modes', value: 'Sync + Async' },
      { label: 'Data Retention', value: 'Configurable (7-365 days)' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/kyc/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "verification_type": "document",
    "document_type": "PAN",
    "document_number": "ABCDE1234F",
    "name": "John Doe",
    "dob": "1990-05-15"
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/kyc/verify", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    verification_type: "document",
    document_type: "PAN",
    document_number: "ABCDE1234F",
    name: "John Doe",
    dob: "1990-05-15"
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "verification_type": "document",
    "document_type": "PAN",
    "document_number": "ABCDE1234F",
    "name": "John Doe",
    "dob": "1990-05-15"
}

response = requests.post(
    "https://api.reconfintech.com/v2/kyc/verify",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/kyc/verify', desc: 'Verify identity' },
      { method: 'GET', path: '/kyc/:id', desc: 'Get verification result' },
      { method: 'POST', path: '/kyc/document/upload', desc: 'Upload document' },
      { method: 'GET', path: '/kyc/status/:id', desc: 'Check status' },
    ],
  },
  'merchant-api': {
    title: 'Merchant API',
    subtitle: 'Merchant onboarding, sub-merchant management, and settlement splitting.',
    badge: 'V2',
    endpoint: 'POST /api/v2/merchants/create',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { business_name: 'Example Corp', business_type: 'private_limited', gstin: '27ABCDE1234F1Z5', contact: { email: 'finance@examplecorp.com', phone: '+919911444938' }, settlement: { split: [{ account: 'merchant_1', percentage: 70 }, { account: 'platform', percentage: 30 }] } },
    response: { success: true, merchant_id: 'MERCH-892345', api_key: 'sk_live_xxxxxxxxxxxxx', status: 'active', created_at: '2026-07-08T12:00:00Z' },
    desc: 'The Merchant API enables platforms to onboard merchants, manage sub-merchants, configure settlement splitting, and monitor merchant performance. It handles KYC collection, risk assessment, fee configuration, and real-time merchant analytics. Built for marketplace platforms, payment aggregators, and enterprise FinTech solutions.',
    highlights: [
      'Automated merchant onboarding with KYC workflows',
      'Sub-merchant and marketplace management',
      'Configurable settlement splitting and fee structures',
      'Real-time merchant performance analytics',
      'Automated risk assessment and underwriting',
      'Merchant-specific API key generation',
      'Webhook notifications for merchant lifecycle events',
      'Multi-tier merchant hierarchy support',
      'Custom fee and commission rule engine',
      'Merchant portal white-labeling',
    ],
    features: [
      { label: 'Authentication', value: 'API Key' },
      { label: 'Rate Limit', value: '3,000 requests/minute' },
      { label: 'Merchant Tiers', value: 'Unlimited' },
      { label: 'Settlement Models', value: 'Split, aggregate, instant' },
      { label: 'KYC Automation', value: 'Document + video KYC' },
      { label: 'Onboarding Time', value: '< 24 hours' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/merchants/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "business_name": "Example Corp",
    "business_type": "private_limited",
    "gstin": "27ABCDE1234F1Z5",
    "contact": {
      "email": "finance@examplecorp.com",
      "phone": "+919911444938"
    },
    "settlement": {
      "split": [
        { "account": "merchant_1", "percentage": 70 },
        { "account": "platform", "percentage": 30 }
      ]
    }
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/merchants/create", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    business_name: "Example Corp",
    business_type: "private_limited",
    gstin: "27ABCDE1234F1Z5",
    contact: {
      email: "finance@examplecorp.com",
      phone: "+919911444938"
    },
    settlement: {
      split: [
        { account: "merchant_1", percentage: 70 },
        { account: "platform", percentage: 30 }
      ]
    }
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "business_name": "Example Corp",
    "business_type": "private_limited",
    "gstin": "27ABCDE1234F1Z5",
    "contact": {
        "email": "finance@examplecorp.com",
        "phone": "+919911444938"
    },
    "settlement": {
        "split": [
            {"account": "merchant_1", "percentage": 70},
            {"account": "platform", "percentage": 30}
        ]
    }
}

response = requests.post(
    "https://api.reconfintech.com/v2/merchants/create",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/merchants/create', desc: 'Create merchant' },
      { method: 'GET', path: '/merchants/:id', desc: 'Get merchant details' },
      { method: 'POST', path: '/merchants/:id/kyc', desc: 'Submit KYC' },
      { method: 'GET', path: '/merchants', desc: 'List merchants' },
    ],
  },
  'account-management-api': {
    title: 'Account Management API',
    subtitle: 'Virtual account creation, balance enquiry, and transaction history.',
    badge: 'Enterprise',
    endpoint: 'GET /api/v2/accounts/:id/transactions',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: null,
    response: { success: true, account_id: 'ACC-456789', balance: 1250000, currency: 'INR', transactions: [{ id: 'TXN-001', type: 'credit', amount: 50000, status: 'settled', timestamp: '2026-07-08T09:15:00Z' }] },
    desc: 'The Account Management API provides programmatic access to virtual account creation, balance management, transaction history, and reconciliation data. It enables FinTech platforms to issue virtual accounts for merchants, manage sub-ledgers, track settlements, and maintain complete financial records for every entity in their ecosystem.',
    highlights: [
      'Virtual account creation with unique IFSC mapping',
      'Real-time balance enquiry and transaction history',
      'Automated reconciliation of account movements',
      'Sub-ledger management for multi-entity platforms',
      'Configurable account limits and restrictions',
      'Webhook notifications for account events',
      'Statement generation in multiple formats',
      'Multi-currency account support',
      'Account freezing and closure workflows',
      'Audit-ready account activity logs',
    ],
    features: [
      { label: 'Authentication', value: 'API Key' },
      { label: 'Rate Limit', value: '5,000 requests/minute' },
      { label: 'Account Types', value: 'Virtual, sub-ledger, escrow' },
      { label: 'Statement Formats', value: 'CSV, PDF, JSON, MT940' },
      { label: 'Webhook Events', value: '10+ account events' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
    codeExamples: {
      curl: `curl -X GET https://api.reconfintech.com/v2/accounts/ACC-456789/transactions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      javascript: `const response = await fetch(
  "https://api.reconfintech.com/v2/accounts/ACC-456789/transactions",
  {
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    }
  }
);
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(
    "https://api.reconfintech.com/v2/accounts/ACC-456789/transactions",
    headers=headers
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/accounts/create', desc: 'Create virtual account' },
      { method: 'GET', path: '/accounts/:id', desc: 'Get account details' },
      { method: 'GET', path: '/accounts/:id/transactions', desc: 'Get transaction history' },
      { method: 'POST', path: '/accounts/:id/close', desc: 'Close account' },
    ],
  },
  'webhook-api': {
    title: 'Webhook API',
    subtitle: 'Real-time event notifications for transactions, settlements, and compliance alerts.',
    badge: 'V2',
    endpoint: 'POST /api/v2/webhooks/register',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: { url: 'https://example.com/webhooks/recon', events: ['transaction.completed', 'settlement.created', 'compliance.flag'], secret: 'whsec_your_webhook_secret' },
    response: { success: true, webhook_id: 'WH-672341', status: 'active', events_registered: 3 },
    desc: 'The Webhook API enables real-time event-driven integration with your systems. Subscribe to transaction, settlement, compliance, and account events and receive HTTP callbacks with full payload data. Built with automatic retry, signature verification, and delivery guarantees to ensure no event is ever lost.',
    highlights: [
      'Real-time HTTP callbacks for all platform events',
      'Automatic retry with exponential backoff (3 attempts)',
      'HMAC-SHA256 signature verification for security',
      'Configurable event filtering and subscription management',
      'Delivery logging and monitoring dashboard',
      'Support for 25+ event types across all APIs',
      'Payload delivery guarantees with at-least-once semantics',
      'Webhook secret rotation and management',
      'Rate-limited delivery to protect your endpoints',
      'Test mode with simulated event generation',
    ],
    features: [
      { label: 'Authentication', value: 'HMAC-SHA256' },
      { label: 'Retry Policy', value: '3 attempts, exponential backoff' },
      { label: 'Event Types', value: '25+ supported' },
      { label: 'Delivery SLA', value: '< 5 seconds P99' },
      { label: 'Payload Format', value: 'JSON' },
      { label: 'Max Payload Size', value: '1 MB' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.reconfintech.com/v2/webhooks/register \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/webhooks/recon",
    "events": [
      "transaction.completed",
      "settlement.created",
      "compliance.flag"
    ],
    "secret": "whsec_your_webhook_secret"
  }'`,
      javascript: `const response = await fetch("https://api.reconfintech.com/v2/webhooks/register", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    url: "https://example.com/webhooks/recon",
    events: [
      "transaction.completed",
      "settlement.created",
      "compliance.flag"
    ],
    secret: "whsec_your_webhook_secret"
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "url": "https://example.com/webhooks/recon",
    "events": [
        "transaction.completed",
        "settlement.created",
        "compliance.flag"
    ],
    "secret": "whsec_your_webhook_secret"
}

response = requests.post(
    "https://api.reconfintech.com/v2/webhooks/register",
    headers=headers,
    json=data
)
print(response.json())`,
    },
    endpoints: [
      { method: 'POST', path: '/webhooks/register', desc: 'Register webhook' },
      { method: 'GET', path: '/webhooks', desc: 'List webhooks' },
      { method: 'PUT', path: '/webhooks/:id', desc: 'Update webhook' },
      { method: 'DELETE', path: '/webhooks/:id', desc: 'Delete webhook' },
    ],
  },
  'analytics-api': {
    title: 'Analytics API',
    subtitle: 'Programmatic access to reconciliation metrics, dashboards, and custom reports.',
    badge: 'Coming Soon',
    endpoint: 'GET /api/v2/analytics/reconciliation-summary',
    baseUrl: 'https://api.reconfintech.com/v2',
    auth: 'Authorization: Bearer YOUR_API_KEY',
    headers: { 'Content-Type': 'application/json' },
    requestBody: null,
    response: { success: true, period: { from: '2026-07-01', to: '2026-07-08' }, total_volume: 245000000, total_transactions: 18392, match_rate: 98.53, exception_rate: 1.47, avg_processing_time: '0.76s' },
    desc: 'The Analytics API provides programmatic access to all reconciliation, payment, and settlement metrics. Generate custom reports, build real-time dashboards, and extract insights from your financial data. Supports multiple aggregation dimensions, custom date ranges, and export to CSV, PDF, and Excel formats.',
    highlights: [
      'Programmatic access to all platform metrics',
      'Custom report generation with multiple dimensions',
      'Real-time dashboard data feeds',
      'Multi-dimensional aggregation (merchant, date, status)',
      'Export to CSV, PDF, XLSX, and JSON formats',
      'Scheduled report delivery via email/webhook',
      'Trend analysis and anomaly detection',
      'Custom metric and KPI definition',
      'Role-based data access controls',
      'Data retention and archival policies',
    ],
    features: [
      { label: 'Authentication', value: 'API Key' },
      { label: 'Rate Limit', value: '1,000 requests/minute' },
      { label: 'Report Formats', value: 'CSV, PDF, XLSX, JSON' },
      { label: 'Data Retention', value: '90 days default' },
      { label: 'Scheduling', value: 'Cron-based report scheduling' },
      { label: 'Aggregation', value: '10+ dimensions' },
    ],
    codeExamples: {
      curl: `curl -X GET https://api.reconfintech.com/v2/analytics/reconciliation-summary \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      javascript: `const response = await fetch(
  "https://api.reconfintech.com/v2/analytics/reconciliation-summary",
  {
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    }
  }
);
const data = await response.json();
console.log(data);`,
      python: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(
    "https://api.reconfintech.com/v2/analytics/reconciliation-summary",
    headers=headers
)
print(response.json())`,
    },
    endpoints: [
      { method: 'GET', path: '/analytics/reconciliation-summary', desc: 'Get summary metrics' },
      { method: 'GET', path: '/analytics/transactions', desc: 'Transaction analytics' },
      { method: 'POST', path: '/analytics/reports', desc: 'Generate custom report' },
      { method: 'GET', path: '/analytics/reports/:id', desc: 'Get report status' },
    ],
  },
}
