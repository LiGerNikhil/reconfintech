/*
 * main.js — reconfintech.com
 *
 * Navigation controller: desktop dropdown, mobile dock active states,
 * bottom-sheet drawer, scroll-lock, and global drawer state.
 *
 * Exposes:
 *   window.__drawerState = { isOpen: boolean }
 *     → so that other modules (e.g. a chat FAB) can read whether the
 *       drawer is currently open without coupling to this module.
 */

;(function () {
  'use strict'

  /* ------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------ */
  window.__drawerState = { isOpen: false }

  /* ------------------------------------------------------------------
     DOM refs
     ------------------------------------------------------------------ */
  var trigger    = document.getElementById('services-trigger')
  var dropdown   = document.getElementById('services-dropdown')
  var groupEl    = trigger && trigger.closest('.services-group')
  var dockBtns   = [].slice.call(document.querySelectorAll('[data-dock-item]'))
  var moreBtn    = document.getElementById('more-btn')
  var drawer     = document.getElementById('more-drawer')
  var backdrop   = document.getElementById('drawer-backdrop')
  var closeBtn   = document.getElementById('drawer-close')
  var body       = document.body

  /* ------------------------------------------------------------------
     HELPERS
     ------------------------------------------------------------------ */

  /** Compensate scrollbar width when locking body scroll. */
  function getScrollbarWidth () {
    return window.innerWidth - document.documentElement.clientWidth
  }

  /** Lock body scroll and compensate for lost scrollbar gutter. */
  function lockScroll () {
    var w = getScrollbarWidth()
    if (w > 0) body.style.setProperty('--scrollbar-compensate', w + 'px')
    body.classList.add('scroll-locked')
  }

  /** Unlock body scroll. */
  function unlockScroll () {
    body.classList.remove('scroll-locked')
    body.style.removeProperty('--scrollbar-compensate')
  }

  /* ------------------------------------------------------------------
     1. SERVICES DROPDOWN (desktop)
        ────────────────────────────────────────────────────────────────
        The CSS .services-group:hover and :focus-within rules handle
        show/hide.  JS only needs to:
          • Sync aria-expanded
          • Close on Escape key
          • Close on outside click
     ------------------------------------------------------------------ */

  function isDropdownOpen () {
    return groupEl && groupEl.matches(':hover, :focus-within')
  }

  /** Imperatively close the dropdown by removing focus and toggling
   *  a brief data attribute that suppresses the CSS hover re-open. */
  function closeDropdown () {
    if (!groupEl || !trigger) return
    /* On close, blur the trigger so :focus-within is cleared. */
    trigger.blur()
    if (trigger) trigger.setAttribute('aria-expanded', 'false')
  }

  function openDropdown () {
    if (!trigger) return
    trigger.setAttribute('aria-expanded', 'true')
  }

  if (trigger) {
    trigger.addEventListener('focus', openDropdown)
    trigger.addEventListener('mouseenter', openDropdown)
    /* Keep aria-expanded in sync while group is active */
    var syncExpanded = function () {
      var open = isDropdownOpen()
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false')
    }
    groupEl.addEventListener('mouseleave', function () {
      /* Small delay so the user can reach the dropdown before it closes */
      setTimeout(function () {
        if (!groupEl.matches(':hover, :focus-within')) {
          closeDropdown()
        }
      }, 80)
    })
  }

  /* Escape key closes the dropdown */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isDropdownOpen()) {
      e.preventDefault()
      closeDropdown()
    }
  })

  /* Outside click closes the dropdown */
  document.addEventListener('click', function (e) {
    if (!groupEl) return
    /* If the click is outside the services group while it's open, close it */
    if (isDropdownOpen() && !groupEl.contains(e.target)) {
      closeDropdown()
    }
  })

  /* ------------------------------------------------------------------
     2. MOBILE DOCK — active state
        ────────────────────────────────────────────────────────────────
        Clicking a dock button sets it as the active item (visual only,
        no routing yet). The active button gets:
          • icon + label → text-primary
          • parent button → bg-surface-soft + rounded-lg
     ------------------------------------------------------------------ */

  function setActiveDock (activeEl) {
    dockBtns.forEach(function (btn) {
      var icon  = btn.querySelector('.dock-icon')
      var label = btn.querySelector('.dock-label')
      /* Reset */
      btn.classList.remove('bg-surface-soft')
      if (icon)  icon.classList.remove('text-primary')
      if (label) label.classList.remove('text-primary')
    })
    /* Activate */
    if (activeEl) {
      var icon  = activeEl.querySelector('.dock-icon')
      var label = activeEl.querySelector('.dock-label')
      activeEl.classList.add('bg-surface-soft')
      if (icon)  icon.classList.add('text-primary')
      if (label) label.classList.add('text-primary')
    }
  }

  dockBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      /* The "More" button is handled by the drawer controller — don't change
         its active state here. The drawer sets it active on open. */
      if (btn.getAttribute('data-dock-item') === 'more') return
      setActiveDock(btn)
    })
  })

  /* Set Home active by default */
  var homeBtn = document.querySelector('[data-dock-item="home"]')
  if (homeBtn) setActiveDock(homeBtn)

  /* ------------------------------------------------------------------
     3. BOTTOM-SHEET DRAWER
        ────────────────────────────────────────────────────────────────
        Open/close, backdrop, Escape key, body scroll lock, global state.
     ------------------------------------------------------------------ */

  function openDrawer () {
    if (!drawer || !backdrop) return
    drawer.classList.add('open')
    backdrop.classList.add('open')
    window.__drawerState.isOpen = true
    lockScroll()
    /* Mark More button as active while drawer is open */
    var moreDockBtn = document.querySelector('[data-dock-item="more"]')
    if (moreDockBtn) setActiveDock(moreDockBtn)
    /* Move focus into the drawer for accessibility */
    if (closeBtn) closeBtn.focus()
    /* Notify other modules (e.g. chat FAB) that the drawer opened */
    document.dispatchEvent(new CustomEvent('drawer:open'))
  }

  function closeDrawer () {
    if (!drawer || !backdrop) return
    drawer.classList.remove('open')
    backdrop.classList.remove('open')
    window.__drawerState.isOpen = false
    unlockScroll()
    /* Return focus to the More button */
    if (moreBtn) moreBtn.focus()
    /* Notify other modules that the drawer closed */
    document.dispatchEvent(new CustomEvent('drawer:close'))
  }

  /* --- Open trigger --- */
  if (moreBtn) {
    moreBtn.addEventListener('click', function (e) {
      e.preventDefault()
      /* Toggle: if already open via some other path, close it */
      if (window.__drawerState.isOpen) {
        closeDrawer()
      } else {
        openDrawer()
      }
    })
  }

  /* --- Close trigger --- */
  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault()
      closeDrawer()
    })
  }

  /* --- Backdrop click closes the drawer --- */
  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeDrawer()
    })
  }

  /* --- Escape key closes the drawer --- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && window.__drawerState.isOpen) {
      e.preventDefault()
      closeDrawer()
    }
  })

  /* ------------------------------------------------------------------
     4. WHATSAPP / CHAT FAB
        ────────────────────────────────────────────────────────────────
        • WhatsApp deep-link construction
        • FAB expand/collapse on desktop (md+)
        • Collision avoidance: hides FAB when the "More" drawer opens
        • Single reusable click handler for all WhatsApp CTAs
     ------------------------------------------------------------------ */

  /* ---- WhatsApp configuration ---- */
  var WA_PHONE = '911234567890'  /* ← REPLACE ME with your actual WhatsApp Business number */
  var WA_PREFILL = encodeURIComponent(
    'Hi, I\'d like to learn more about your FinTech consultancy services.'
  )
  var WA_URL = 'https://wa.me/' + WA_PHONE + '?text=' + WA_PREFILL

  /** Open WhatsApp in a new tab.  Single reusable function so both the
   *  desktop panel CTA and the mobile-only circular FAB use the same code.
   *  @param {Event} e */
  function openWhatsApp (e) {
    e.preventDefault()
    window.open(WA_URL, '_blank', 'noopener,noreferrer')
  }

  /* ---- DOM refs ---- */
  var fab       = document.getElementById('chat-fab')
  var fabBtn    = document.getElementById('fab-trigger')
  var fabPanel  = document.getElementById('fab-panel')
  var waDesktop = document.getElementById('wa-cta-desktop')

  /* ---- FAB expand/collapse (desktop only) ---- */
  if (fab && fabBtn) {
    fabBtn.addEventListener('click', function (e) {
      /* On mobile (<768px) the panel is never displayed; clicking the
         FAB on mobile should go straight to WhatsApp.  Only toggle the
         expand/collapse on larger screens. */
      if (window.innerWidth < 768) {
        openWhatsApp(e)
        return
      }
      /* Desktop: toggle the expanded state */
      fab.classList.toggle('expanded')
    })
  }

  /* ---- Wire up the desktop panel's WhatsApp CTA ---- */
  if (waDesktop) {
    waDesktop.addEventListener('click', openWhatsApp)
  }

  /* ---- Collision avoidance: listen for drawer open/close ---- */
  function hideFab () {
    if (fab) fab.classList.add('fab-hidden')
  }

  function showFab () {
    if (fab) fab.classList.remove('fab-hidden')
  }

  document.addEventListener('drawer:open', hideFab)
  document.addEventListener('drawer:close', showFab)

  /* Fallback: if CustomEvent wasn't dispatched (e.g. module loaded late),
     poll the global state flag once. */
  if (window.__drawerState && window.__drawerState.isOpen) {
    hideFab()
  }

  /* ---- Close expanded FAB panel on Escape ---- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && fab && fab.classList.contains('expanded')) {
      fab.classList.remove('expanded')
    }
  })

  /* ---- Close expanded FAB panel on outside click ---- */
  document.addEventListener('click', function (e) {
    if (fab && fab.classList.contains('expanded') && !fab.contains(e.target)) {
      fab.classList.remove('expanded')
    }
  })

  /* ------------------------------------------------------------------
     LOG
     ------------------------------------------------------------------ */
  console.log('[reconfintech] Navigation controller initialised.')
})()
