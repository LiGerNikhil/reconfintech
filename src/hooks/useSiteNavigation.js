import { useState, useEffect } from 'react'

const WA_PHONE = '918796467671'
const WA_PREFILL = encodeURIComponent(
  "Hi, I'd like to learn more about your FinTech consultancy services."
)
const WA_URL = `https://wa.me/${WA_PHONE}?text=${WA_PREFILL}`

function openWhatsAppLink(e) {
  e.preventDefault()
  window.open(WA_URL, '_blank', 'noopener,noreferrer')
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

function lockScroll() {
  const w = getScrollbarWidth()
  const body = document.body
  if (w > 0) body.style.setProperty('--scrollbar-compensate', w + 'px')
  body.classList.add('scroll-locked')
}

function unlockScroll() {
  const body = document.body
  body.classList.remove('scroll-locked')
  body.style.removeProperty('--scrollbar-compensate')
}

export default function useSiteNavigation() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const trigger = document.getElementById('services-trigger')
    const groupEl = trigger && trigger.closest('.services-group')
    const moreBtn = document.getElementById('more-btn')
    const drawer = document.getElementById('more-drawer')
    const backdrop = document.getElementById('drawer-backdrop')
    const closeBtn = document.getElementById('drawer-close')
    const fab = document.getElementById('chat-fab')
    const fabBtn = document.getElementById('fab-trigger')
    const waDesktop = document.getElementById('wa-cta-desktop')

    /* Services dropdown */
    function closeDropdown() {
      if (!trigger || !groupEl) return
      trigger.blur()
      trigger.setAttribute('aria-expanded', 'false')
    }

    function handleDropdownEscape(e) {
      if (e.key === 'Escape' && groupEl && groupEl.matches(':hover, :focus-within')) {
        e.preventDefault()
        closeDropdown()
      }
    }

    function handleOutsideClick(e) {
      if (groupEl && groupEl.matches(':hover, :focus-within') && !groupEl.contains(e.target)) {
        closeDropdown()
      }
    }

    if (trigger) {
      trigger.addEventListener('focus', () => trigger.setAttribute('aria-expanded', 'true'))
      trigger.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'))
      if (groupEl) {
        groupEl.addEventListener('mouseleave', () => {
          setTimeout(() => {
            if (!groupEl.matches(':hover, :focus-within')) closeDropdown()
          }, 80)
        })
      }
    }

    document.addEventListener('keydown', handleDropdownEscape)
    document.addEventListener('click', handleOutsideClick)

    /* Bottom drawer */
    function openDrawer() {
      if (!drawer || !backdrop) return
      drawer.classList.add('open')
      backdrop.classList.add('open')
      lockScroll()
      setDrawerOpen(true)
      window.__drawerState = { isOpen: true }
      const moreDockBtn = document.querySelector('[data-dock-item="more"]')
      if (moreDockBtn) {
        const icon = moreDockBtn.querySelector('.dock-icon')
        const label = moreDockBtn.querySelector('.dock-label')
        moreDockBtn.classList.add('bg-surface-soft')
        if (icon) icon.classList.add('text-primary')
        if (label) label.classList.add('text-primary')
      }
      if (closeBtn) closeBtn.focus()
      document.dispatchEvent(new CustomEvent('drawer:open'))
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return
      drawer.classList.remove('open')
      backdrop.classList.remove('open')
      unlockScroll()
      setDrawerOpen(false)
      window.__drawerState = { isOpen: false }
      if (moreBtn) moreBtn.focus()
      document.dispatchEvent(new CustomEvent('drawer:close'))
    }

    if (moreBtn) {
      moreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (window.__drawerState && window.__drawerState.isOpen) {
          closeDrawer()
        } else {
          openDrawer()
        }
      })
    }
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); closeDrawer() })
    if (backdrop) {
      backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeDrawer() })
    }

    function handleDrawerEscape(e) {
      if (e.key === 'Escape' && window.__drawerState && window.__drawerState.isOpen) {
        e.preventDefault()
        closeDrawer()
      }
    }
    document.addEventListener('keydown', handleDrawerEscape)

    /* Chat FAB */
    function hideFab() { if (fab) fab.classList.add('fab-hidden') }
    function showFab() { if (fab) fab.classList.remove('fab-hidden') }

    if (fabBtn) {
      fabBtn.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
          openWhatsAppLink(e)
          return
        }
        fab.classList.toggle('expanded')
      })
    }

    if (waDesktop) waDesktop.addEventListener('click', openWhatsAppLink)

    document.addEventListener('drawer:open', hideFab)
    document.addEventListener('drawer:close', showFab)

    if (window.__drawerState && window.__drawerState.isOpen) hideFab()

    function handleFabEscape(e) {
      if (e.key === 'Escape' && fab && fab.classList.contains('expanded')) {
        fab.classList.remove('expanded')
      }
    }

    function handleFabOutsideClick(e) {
      if (fab && fab.classList.contains('expanded') && !fab.contains(e.target)) {
        fab.classList.remove('expanded')
      }
    }

    document.addEventListener('keydown', handleFabEscape)
    document.addEventListener('click', handleFabOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleDropdownEscape)
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleDrawerEscape)
      document.removeEventListener('keydown', handleFabEscape)
      document.removeEventListener('click', handleFabOutsideClick)
      document.removeEventListener('drawer:open', hideFab)
      document.removeEventListener('drawer:close', showFab)
    }
  }, [])

  return { drawerOpen }
}
