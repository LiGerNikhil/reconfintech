import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import useSiteNavigation from '../hooks/useSiteNavigation'
import ScrollToTop from './ScrollToTop'
import CookieConsent from './CookieConsent'
import ChatBot from './ChatBot'

export default function Layout() {
  useSiteNavigation()
  const { pathname } = useLocation()
  const [localDrawerOpen, setLocalDrawerOpen] = useState(false)

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth
  }

  function openDrawer() {
    setLocalDrawerOpen(true)
    const w = getScrollbarWidth()
    if (w > 0) document.body.style.setProperty('--scrollbar-compensate', w + 'px')
    document.body.classList.add('scroll-locked')
    window.__drawerState = { isOpen: true }
    document.dispatchEvent(new CustomEvent('drawer:open'))
  }

  function closeDrawer() {
    setLocalDrawerOpen(false)
    document.body.classList.remove('scroll-locked')
    document.body.style.removeProperty('--scrollbar-compensate')
    window.__drawerState = { isOpen: false }
    document.dispatchEvent(new CustomEvent('drawer:close'))
  }

  useEffect(() => {
    setLocalDrawerOpen(false)
    document.body.classList.remove('scroll-locked')
    window.__drawerState = { isOpen: false }
  }, [pathname])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape' && localDrawerOpen) {
        closeDrawer()
      }
    }
    function handleBackdrop(e) {
      if (e.target === e.currentTarget) closeDrawer()
    }
    document.addEventListener('keydown', handleKey)
    const backdrop = document.getElementById('drawer-backdrop')
    if (backdrop) backdrop.addEventListener('click', handleBackdrop)
    return () => {
      document.removeEventListener('keydown', handleKey)
      if (backdrop) backdrop.removeEventListener('click', handleBackdrop)
    }
  }, [localDrawerOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/api-platform', label: 'API Platform' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const dockItems = [
    { to: '/', label: 'Home', path: 'M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' },
    { to: '/services', label: 'Services', path: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' },
    { to: '/contact', label: 'Contact', path: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
  ]

  return (
    <>
      <ScrollToTop />
      {/* TOP NOTICE BAR — Marquee scrolling */}
      <div role="region" aria-label="Announcements" className="notice-track relative z-50 bg-ink py-2 text-xs font-medium text-white/80">
        <div className="notice-content inline-flex items-center">
          {[
            'REAL-TIME AUTOMATED RECONCILIATION',
            'TOP FINTECH CONSULTANCY IN INDIA',
            'ENTERPRISE FINANCIAL DATA COMPLIANCE',
            'AI-DRIVEN LEDGER MATCHING SOFTWARE',
            'SOC 2 TYPE II CERTIFIED INFRASTRUCTURE',
            'CROSS-BORDER SETTLEMENT ARCHITECTURE',
          ].map((label) => (
            <span key={label} className="mx-3 inline-flex items-center gap-2 whitespace-nowrap tracking-wider md:mx-5">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
              {label}
              <span className="ml-3 inline-block text-white/20" aria-hidden="true">/</span>
            </span>
          ))}
          {[
            'REAL-TIME AUTOMATED RECONCILIATION',
            'TOP FINTECH CONSULTANCY IN INDIA',
            'ENTERPRISE FINANCIAL DATA COMPLIANCE',
            'AI-DRIVEN LEDGER MATCHING SOFTWARE',
            'SOC 2 TYPE II CERTIFIED INFRASTRUCTURE',
            'CROSS-BORDER SETTLEMENT ARCHITECTURE',
          ].map((label) => (
            <span key={`dup-${label}`} className="mx-3 inline-flex items-center gap-2 whitespace-nowrap tracking-wider md:mx-5">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
              {label}
              <span className="ml-3 inline-block text-white/20" aria-hidden="true">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-surface/90 backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between lg:h-[72px]">
          <NavLink to="/" className="flex shrink-0 items-center">
            <img src="/assets/images/logo.png" alt="reconfintech.com" className="h-10 w-auto sm:h-14 md:h-[72px]" />
          </NavLink>

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key="services" className="services-group relative">
                  <button
                    id="services-trigger"
                    aria-expanded="false"
                    aria-controls="services-dropdown"
                    className="flex items-center gap-1.5 text-sm font-semibold text-body transition-colors duration-200 hover:text-primary"
                  >
                    Services
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div id="services-dropdown" role="menu" aria-label="Services" className="dropdown-panel absolute -left-4 top-full mt-3 w-[720px] rounded-xl border border-border-soft bg-surface p-4 shadow-mid">
                    <div className="grid grid-cols-4 gap-x-2 gap-y-0.5">
                      <NavLink to="/services/automated-reconciliation" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Automated Reconciliation</span>
                          <span className="block text-[11px] text-body/70">AI-driven ledger matching</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/compliance-auditing" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Compliance &amp; Auditing</span>
                          <span className="block text-[11px] text-body/70">Regulatory-ready frameworks</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/multi-payment-reconciliation" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Multi-Payment Reconciliation</span>
                          <span className="block text-[11px] text-body/70">50+ global acquirer support</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/cross-border-settlement" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Cross-Border Settlement</span>
                          <span className="block text-[11px] text-body/70">SWIFT, RTGS, FX netting</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/ai-ledger-analytics" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">AI-Driven Ledger Analytics</span>
                          <span className="block text-[11px] text-body/70">Predictive financial intelligence</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/payment-aggregator" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Payment Aggregator</span>
                          <span className="block text-[11px] text-body/70">Multi-channel payment acceptance</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/aeps" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">AEPS</span>
                          <span className="block text-[11px] text-body/70">Aadhaar biometric payments</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/cybersecurity-advisory" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Cybersecurity Advisory</span>
                          <span className="block text-[11px] text-body/70">SOC 2, zero-trust, pen testing</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/tech-consulting" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75m9 3.75a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Technology Consulting</span>
                          <span className="block text-[11px] text-body/70">Strategic FinTech advisory</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/saas-engineering" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">SaaS Platform Engineering</span>
                          <span className="block text-[11px] text-body/70">Multi-tenant FinTech SaaS</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/software-development" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 9h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Software Development</span>
                          <span className="block text-[11px] text-body/70">Custom financial software</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/tech-development" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Technology Development</span>
                          <span className="block text-[11px] text-body/70">Cloud, DevOps &amp; platform engineering</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/web-development" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Web Development &amp; Portals</span>
                          <span className="block text-[11px] text-body/70">Financial portal engineering</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/app-development" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">Mobile App Development</span>
                          <span className="block text-[11px] text-body/70">iOS &amp; Android financial apps</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/iot-integrations" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m4.5-1.5v1.5m-3 15v1.5m4.5-1.5v1.5m-6-6h6m-6 3h6m-6-6h6m-6-3h6M3 6.75C3 5.507 4.007 4.5 5.25 4.5h13.5c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25H5.25C4.007 19.5 3 18.493 3 17.25V6.75z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">IoT &amp; Embedded Systems</span>
                          <span className="block text-[11px] text-body/70">POS, ATM, HSM connectivity</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/ai-ml-integrations" role="menuitem" className="flex items-start gap-2.5 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink leading-tight">AI &amp; ML Integration</span>
                          <span className="block text-[11px] text-body/70">Custom models &amp; NLP</span>
                        </span>
                      </NavLink>
                    </div>
                    <div className="mt-3 border-t border-border-soft pt-3 text-center">
                      <Link to="/services" className="text-xs font-semibold text-primary hover:text-primary-dark">View All 16 Services &rarr;</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <NavLink to="/contact" className="btn-primary px-3 py-1.5 text-[11px] sm:px-6 sm:py-3 sm:text-sm lg:inline-flex">Get Started</NavLink>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 1 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-[#0B1428] border-t border-white/5">
        <div className="section-container py-14 md:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:gap-8">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <NavLink to="/" className="inline-block">
                <img src="/assets/images/logo.png" alt="Recon FinTech Consultancy" className="h-10 w-auto brightness-0 invert" />
              </NavLink>
              <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
                Recon FinTech Consultancy — enterprise automated reconciliation,
                FinTech compliance, and financial infrastructure solutions for
                banks and neo-challenger platforms worldwide.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="mailto:info@reconfintech.com" className="text-white/40 transition-colors hover:text-white" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </a>
                <a href="https://wa.me/919911444938" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-white" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
            </div>

            {/* Services I */}
            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Reconciliation</h3>
              <ul className="space-y-2.5">
                <li><NavLink to="/services/automated-reconciliation" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Automated Reconciliation</NavLink></li>
                <li><NavLink to="/services/compliance-auditing" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Compliance &amp; Auditing</NavLink></li>
                <li><NavLink to="/services/multi-payment-reconciliation" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Multi-Payment Reconciliation</NavLink></li>
                <li><NavLink to="/services/cross-border-settlement" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Cross-Border Settlement</NavLink></li>
                <li><NavLink to="/services/ai-ledger-analytics" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">AI-Driven Ledger Analytics</NavLink></li>
                <li><NavLink to="/services/payment-aggregator" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Payment Aggregator</NavLink></li>
                <li><NavLink to="/services/aeps" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">AEPS</NavLink></li>
              </ul>
            </div>

            {/* Services II */}
            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Technology</h3>
              <ul className="space-y-2.5">
                <li><NavLink to="/services/tech-consulting" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Technology Consulting</NavLink></li>
                <li><NavLink to="/services/saas-engineering" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">SaaS Platform Engineering</NavLink></li>
                <li><NavLink to="/services/software-development" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Software Development</NavLink></li>
                <li><NavLink to="/services/tech-development" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Technology Development</NavLink></li>
                <li><NavLink to="/services/web-development" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Web Development &amp; Portals</NavLink></li>
                <li><NavLink to="/services/app-development" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Mobile App Development</NavLink></li>
                <li><NavLink to="/services/iot-integrations" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">IoT &amp; Embedded Systems</NavLink></li>
                <li><NavLink to="/services/ai-ml-integrations" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">AI &amp; ML Integration</NavLink></li>
                <li><NavLink to="/services/cybersecurity-advisory" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Cybersecurity Advisory</NavLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Company</h3>
              <ul className="space-y-2.5">
                <li><NavLink to="/about" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">About Us</NavLink></li>
                <li><NavLink to="/api-platform" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">API Platform</NavLink></li>
                <li><NavLink to="/case-studies" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Case Studies</NavLink></li>
                <li><NavLink to="/insights" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Insights</NavLink></li>
                <li><NavLink to="/careers" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Careers</NavLink></li>
                <li><NavLink to="/contact" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Contact Us</NavLink></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Policies</h3>
              <ul className="space-y-2.5">
                <li><NavLink to="/privacy" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Terms of Service</NavLink></li>
                <li><NavLink to="/cookies" className="text-sm text-white/60 transition-colors duration-150 hover:text-white">Cookie Policy</NavLink></li>
              </ul>
              <div className="mt-6">
                <a href="https://wa.me/919911444938" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="text-xs text-white/30">&copy; 2026 reconfintech.com. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <NavLink to="/privacy" className="transition-colors duration-150 hover:text-white/60">Privacy</NavLink>
              <span aria-hidden="true" className="text-white/10">|</span>
              <NavLink to="/terms" className="transition-colors duration-150 hover:text-white/60">Terms</NavLink>
              <span aria-hidden="true" className="text-white/10">|</span>
              <NavLink to="/cookies" className="transition-colors duration-150 hover:text-white/60">Cookies</NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM DOCK */}
      <nav aria-label="Mobile primary" className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="mx-3 mb-3 flex items-stretch justify-around gap-1 rounded-2xl border-t border-border-soft/60 bg-white/80 px-2 py-1.5 shadow-mid backdrop-blur-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          {dockItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `dock-btn flex flex-1 flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150 ${isActive ? 'bg-surface-soft' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`dock-icon flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-150 ${isActive ? 'text-primary' : 'text-body'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                    </svg>
                  </span>
                  <span className={`dock-label text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150 ${isActive ? 'text-primary' : 'text-body'}`}>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
          <button
            id="more-btn"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={localDrawerOpen}
            onClick={openDrawer}
            className="dock-btn flex flex-1 flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150"
          >
            <span className={`dock-icon flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-150 ${localDrawerOpen ? 'text-primary' : 'text-body'}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
            </span>
            <span className={`dock-label text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150 ${localDrawerOpen ? 'text-primary' : 'text-body'}`}>More</span>
          </button>
        </div>
      </nav>

      {/* BOTTOM DRAWER */}
      <div id="drawer-backdrop" className={`drawer-backdrop fixed inset-0 z-50 bg-black/40 ${localDrawerOpen ? 'open' : ''}`} aria-hidden="true" />
      <div id="more-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" className={`drawer-sheet fixed inset-x-0 bottom-0 z-50 rounded-t-3xl border-t border-border-soft bg-surface p-6 pb-10 shadow-mid ${localDrawerOpen ? 'open' : ''}`}>
        <span className="mx-auto mb-5 block h-1 w-8 rounded-full bg-body/30" aria-hidden="true" />
        <button id="drawer-close" type="button" aria-label="Close menu" onClick={closeDrawer} className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 id="drawer-title" className="mb-5 text-lg font-bold text-ink">More</h2>
        <ul className="space-y-1">
          <li><NavLink to="/about" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>About Us</NavLink></li>
          <li><NavLink to="/api-platform" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>API Platform</NavLink></li>
          <li><NavLink to="/case-studies" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>Case Studies</NavLink></li>
          <li><NavLink to="/insights" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>Insights</NavLink></li>
          <li><NavLink to="/careers" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>Careers</NavLink></li>
          <li><hr className="my-2 border-border-soft" /></li>
          <li><NavLink to="/privacy" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>Privacy Policy</NavLink></li>
          <li><NavLink to="/terms" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={closeDrawer}>Terms of Service</NavLink></li>
        </ul>
        <div className="mt-6">
          <NavLink to="/contact" className="btn-primary w-full justify-center" onClick={closeDrawer}>Get Started</NavLink>
        </div>
      </div>

      <ChatBot />

      <CookieConsent />
    </>
  )
}
