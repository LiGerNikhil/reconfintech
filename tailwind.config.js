/*
 * =============================================================================
 *  BREAKPOINT STRATEGY — reconfintechconsultancy.com
 * =============================================================================
 *  This project follows a **mobile-first** responsive methodology.
 *  Every component is designed for the smallest viewport first, then
 *  progressively enhanced via min-width breakpoints.
 *
 *  Screens reference (Tailwind defaults overridden only where noted):
 *
 *    sm  |  640px  — Optional small-handset tweaks.
 *    md  |  768px  — Tablet portrait / docked-navigation activates,
 *                    stacked hero sections shift to side-by-side.
 *    lg  | 1024px  — Full desktop nav dropdown, two-column hero layout,
 *                    multi-column service grid.
 *    xl  | 1280px  — Wide content comfort zone.
 *    2xl | 1536px  — Ultra-wide max-content anchoring.
 *
 *  Semantic breakpoint usage:
 *    - `md:`  → "tablet / dock nav"  — navigation switches from hamburger
 *               to inline links; single-column layouts tolerate two columns.
 *    - `lg:`  → "desktop / full nav" — all dropdowns reveal on hover/focus;
 *               hero sections render side-by-side; service cards span 3 cols.
 * =============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './assets/**/*.{html,js}',
  ],
  theme: {
    extend: {
      /* ---- Color palette ---- */
      colors: {
        ink:            '#111827',
        body:           '#4B5563',
        primary:        '#0052FF',
        'primary-dark': '#0040CC',
        surface:        '#FFFFFF',
        'surface-soft': '#F5F8FF',
        'border-soft':  '#E7ECF5',
      },

      /* ---- Border-radius scale ---- */
      /*  rounded-xl (16px) → cards, dropdowns, inputs
       *  rounded-2xl (20px) → hero CTAs
       *  rounded-3xl (24px) → footer CTA block, modals
       */
      borderRadius: {
        xl:  '16px',
        '2xl': '20px',
        '3xl': '24px',
      },

      /* ---- Box-shadow tokens ---- */
      boxShadow: {
        soft: '0px 10px 30px rgba(0,0,0,0.03)',
        mid:  '0px 15px 40px rgba(0,0,0,0.06)',
      },

      /* ---- Custom durations (not in default scale) ---- */
      transitionDuration: {
        250: '250ms',
      },

      /* ---- Custom z-index layers ---- */
      zIndex: {
        45: '45',
      },

      /* ---- Typography ---- */
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  safelist: [
    'from-amber-200', 'to-amber-400',
    'from-sky-200', 'to-sky-400',
    'from-emerald-200', 'to-emerald-400',
    'from-violet-200', 'to-violet-400',
  ],
  plugins: [],
}
