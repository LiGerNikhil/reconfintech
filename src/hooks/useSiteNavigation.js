import { useEffect } from 'react'

export default function useSiteNavigation() {

  useEffect(() => {
    const trigger = document.getElementById('services-trigger')
    const groupEl = trigger && trigger.closest('.services-group')

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

    return () => {
      document.removeEventListener('keydown', handleDropdownEscape)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return {}
}
