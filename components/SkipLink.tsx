'use client'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link focus-visible"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          document.getElementById('main-content')?.focus()
        }
      }}
    >
      Skip to main content
    </a>
  )
}