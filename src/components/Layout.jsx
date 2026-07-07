import { Outlet, NavLink, useLocation } from 'react-router-dom'
import useSiteNavigation from '../hooks/useSiteNavigation'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const { drawerOpen } = useSiteNavigation()
  const { pathname } = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
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
            ['Serving 100+ Financial Institutions', 'bg-emerald-400'],
            ['SOC\u00a02 Type\u00a0II Certified', 'bg-sky-400'],
            ['New: AI-Driven Risk Platform', 'bg-amber-400'],
            ['ISO\u00a027001 Certified Infrastructure', 'bg-emerald-400'],
            ['15+ Global Jurisdictions', 'bg-sky-400'],
            ['99.99% Uptime SLA Design', 'bg-amber-400'],
          ].map(([label, dotColor]) => (
            <span key={label} className="mx-4 inline-flex items-center gap-2 whitespace-nowrap md:mx-6">
              <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
              {label}
            </span>
          ))}
          {[
            ['Serving 100+ Financial Institutions', 'bg-emerald-400'],
            ['SOC\u00a02 Type\u00a0II Certified', 'bg-sky-400'],
            ['New: AI-Driven Risk Platform', 'bg-amber-400'],
            ['ISO\u00a027001 Certified Infrastructure', 'bg-emerald-400'],
            ['15+ Global Jurisdictions', 'bg-sky-400'],
            ['99.99% Uptime SLA Design', 'bg-amber-400'],
          ].map(([label, dotColor]) => (
            <span key={`dup-${label}`} className="mx-4 inline-flex items-center gap-2 whitespace-nowrap md:mx-6">
              <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-40 border-b border-border-soft bg-surface/90 backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between lg:h-[72px]">
          <NavLink to="/" className="flex shrink-0 items-center">
            <img src="/assets/images/logo.png" alt="reconfintechconsultancy.com" className="h-16 w-auto md:h-[72px]" />
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
                  <div id="services-dropdown" role="menu" aria-label="Services" className="dropdown-panel absolute -left-4 top-full mt-3 w-[420px] rounded-xl border border-border-soft bg-surface p-2 shadow-mid">
                    <div className="grid gap-1">
                      <NavLink to="/services/payment-infrastructure" role="menuitem" className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">Payment Infrastructure</span>
                          <span className="block text-xs text-body">Real-time rails, gateways, and settlement orchestration.</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/risk-compliance" role="menuitem" className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">Risk &amp; Compliance</span>
                          <span className="block text-xs text-body">AML/KYC, fraud detection, and regulatory reporting.</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/data-engineering" role="menuitem" className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">Data Engineering</span>
                          <span className="block text-xs text-body">Warehouse architecture, pipelines, and real-time analytics.</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/platform-architecture" role="menuitem" className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">Platform Architecture</span>
                          <span className="block text-xs text-body">Cloud-native microservices, Kubernetes, and API design.</span>
                        </span>
                      </NavLink>
                      <NavLink to="/services/financial-analytics" role="menuitem" className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-surface-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">Financial Analytics</span>
                          <span className="block text-xs text-body">Dashboards, forecasting models, and regulatory MIS.</span>
                        </span>
                      </NavLink>
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

          <NavLink to="/contact" className="btn-primary px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm lg:inline-flex">Get Started</NavLink>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <footer className="border-t border-border-soft bg-surface-soft">
        <nav aria-label="Footer" className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Company',
                links: [
                  { label: 'About Us', to: '/about' },
                  { label: 'Case Studies', to: '/case-studies' },
                  { label: 'Insights', to: '/insights' },
                  { label: 'Careers', to: '/careers' },
                ],
              },
              {
                heading: 'Services',
                links: [
                  { label: 'Payment Infrastructure', to: '/services/payment-infrastructure' },
                  { label: 'Risk &amp; Compliance', to: '/services/risk-compliance' },
                  { label: 'Data Engineering', to: '/services/data-engineering' },
                  { label: 'Platform Architecture', to: '/services/platform-architecture' },
                  { label: 'Financial Analytics', to: '/services/financial-analytics' },
                ],
              },
              {
                heading: 'Policies',
                links: [
                  { label: 'Privacy Policy', to: '/privacy' },
                  { label: 'Terms of Service', to: '/terms' },
                  { label: 'Cookie Policy', to: '/cookies' },
                  { label: 'GDPR Compliance', to: '/privacy' },
                ],
              },
              {
                heading: 'Get in Touch',
                links: [
                  { label: 'WhatsApp', to: 'https://wa.me/918796467671', isExternal: true },
                  { label: 'hello@reconfintechconsultancy.com', to: 'mailto:hello@reconfintechconsultancy.com', isExternal: true },
                  { label: 'Contact Form', to: '/contact' },
                ],
                isContact: true,
              },
            ].map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink">{col.heading}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal || link.to.startsWith('mailto:') ? (
                        <a
                          href={link.to}
                          className="text-sm text-body transition-colors duration-150 hover:text-primary"
                          {...(link.to !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                      ) : (
                        <NavLink
                          to={link.to}
                          className="text-sm text-body transition-colors duration-150 hover:text-primary"
                          dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-6 sm:flex-row">
            <p className="text-xs text-body/70">&copy; 2026 reconfintechconsultancy.com. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-body/70">
              <NavLink to="/privacy" className="transition-colors duration-150 hover:text-primary">Privacy</NavLink>
              <span aria-hidden="true">&middot;</span>
              <NavLink to="/terms" className="transition-colors duration-150 hover:text-primary">Terms</NavLink>
              <span aria-hidden="true">&middot;</span>
              <NavLink to="/cookies" className="transition-colors duration-150 hover:text-primary">Cookies</NavLink>
            </div>
          </div>
        </nav>
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
            aria-haspopup="dialog"
            className="dock-btn flex flex-1 flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-150"
          >
            <span className="dock-icon flex h-6 w-6 items-center justify-center rounded-md text-body transition-colors duration-150">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
            </span>
            <span className="dock-label text-[10px] font-semibold uppercase tracking-wider text-body transition-colors duration-150">More</span>
          </button>
        </div>
      </nav>

      {/* BOTTOM DRAWER */}
      <div id="drawer-backdrop" className={`drawer-backdrop fixed inset-0 z-50 bg-black/40 ${drawerOpen ? 'open' : ''}`} aria-hidden="true" />
      <div id="more-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" className={`drawer-sheet fixed inset-x-0 bottom-0 z-50 rounded-t-3xl border-t border-border-soft bg-surface p-6 pb-10 shadow-mid ${drawerOpen ? 'open' : ''}`}>
        <span className="mx-auto mb-5 block h-1 w-8 rounded-full bg-body/30" aria-hidden="true" />
        <button id="drawer-close" type="button" aria-label="Close menu" className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 id="drawer-title" className="mb-5 text-lg font-bold text-ink">More</h2>
        <ul className="space-y-1">
          <li><NavLink to="/about" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>About Us</NavLink></li>
          <li><NavLink to="/case-studies" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Case Studies</NavLink></li>
          <li><NavLink to="/insights" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Insights</NavLink></li>
          <li><NavLink to="/careers" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Careers</NavLink></li>
          <li><hr className="my-2 border-border-soft" /></li>
          <li><NavLink to="/privacy" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Privacy Policy</NavLink></li>
          <li><NavLink to="/terms" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-soft hover:text-ink" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Terms of Service</NavLink></li>
        </ul>
        <div className="mt-6">
          <NavLink to="/contact" className="btn-primary w-full justify-center" onClick={() => { const c = document.getElementById('drawer-close'); if (c) c.click(); }}>Get Started</NavLink>
        </div>
      </div>

      {/* CHAT FAB */}
      <div id="chat-fab" className="chat-fab fixed right-5 z-45 md:right-8">
        <button id="fab-trigger" type="button" aria-label="Chat with us on WhatsApp" className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-250 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 md:h-16 md:w-16" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
        <div id="fab-panel" className="fab-panel mt-3 w-72 rounded-xl border border-border-soft bg-surface p-4 shadow-mid">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </span>
            <div>
              <span className="block text-sm font-bold text-ink">Talk to our team</span>
              <span className="block text-xs text-body">We typically reply within 1&nbsp;hour</span>
            </div>
          </div>
          <button id="wa-cta-desktop" type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-surface transition-all duration-250 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  )
}
