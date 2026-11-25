import Link from 'next/link'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="help-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" href="/">PYLOTHOUSE <span>HELP CENTRE</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/articles">Help articles</Link>
          <Link href="/contact">Contact support</Link>
          <a className="header-link" href="https://pylothouse.vercel.app">Pylothouse <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div><strong>PYLOTHOUSE <span>HELP CENTRE</span></strong><p>Clear information for readers, creators and account holders.</p></div>
        <nav aria-label="Footer navigation"><Link href="/articles">Browse articles</Link><Link href="/contact">Contact support</Link><a href="https://pylothouse.vercel.app">Return to Pylothouse ↗</a></nav>
        <small>Information is general guidance. Current product options and applicable policies are shown on Pylothouse.</small>
      </footer>
    </div>
  )
}
