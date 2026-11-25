import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { helpArticles } from '../lib/articles'

const categories = [
  ['01', 'Reader basics', 'Finding stories, reading flow and common access questions.', 'getting-started'],
  ['02', 'Creator resources', 'Preparation, presentation and current publishing requirements.', 'creator-preparation'],
  ['03', 'Safety & community', 'Content notes, community standards and reporting concerns.', 'content-notes'],
  ['04', 'Account & privacy', 'Security basics and where to ask about account information.', 'account-security'],
]

export default function HelpHome() {
  return <SiteLayout><Head><title>Pylothouse Help Centre</title><meta name="description" content="Find practical reader, creator, safety and account guidance in the Pylothouse help centre." /></Head>
    <main id="main-content">
      <section className="hero"><div className="hero-copy"><p className="eyebrow"><span /> PYLOTHOUSE / SUPPORT</p><h1>Clear answers.<br /><em>Better next steps.</em></h1><p className="lede">A practical starting point for reading, creating and getting help. Search the article library or contact support with the details that matter.</p><div className="hero-actions"><Link className="button-primary" href="/articles">Browse help articles <span aria-hidden="true">↗</span></Link><Link className="button-secondary" href="/contact">Contact support</Link></div><p className="availability-note">Platform-specific options can change. Current features and policies are confirmed on Pylothouse.</p></div><aside className="hero-note-card"><img src="/help-art.svg" alt="" /><span>SUPPORT PRINCIPLE / 01</span><strong>Start with<br /><em>what happened.</em></strong><p>A title, page and short description help us find the right context.</p></aside></section>
      <section className="section topic-section"><div className="section-heading"><div><p className="eyebrow">FIND THE RIGHT ROUTE</p><h2>How can we help?</h2></div><Link href="/articles">Search all {helpArticles.length} guides <span aria-hidden="true">↗</span></Link></div><div className="topic-grid">{categories.map(([number, title, summary, slug]) => <Link className="topic-card" href={`/articles/${slug}`} key={number}><span>{number} / 04</span><h3>{title}</h3><p>{summary}</p><b aria-hidden="true">↗</b></Link>)}</div></section>
      <section className="section featured-section"><div><p className="eyebrow">READER GUIDE / START HERE</p><h2>{helpArticles[0].title}</h2><p>{helpArticles[0].summary}</p><Link className="text-link" href={`/articles/${helpArticles[0].slug}`}>Read the guide <span aria-hidden="true">↗</span></Link></div><div className="featured-index">01<br /><span>BEFORE YOU<br />OPEN A TICKET</span></div></section>
      <section className="help-cta"><div><p className="eyebrow">NEED A PERSON?</p><h2>Support should start<br />with the right context.</h2><p>Send the title or page, what went wrong and what you were trying to do. Please leave passwords and sign-in codes out.</p></div><Link className="button-primary" href="/contact">Get support <span aria-hidden="true">↗</span></Link></section>
    </main>
  </SiteLayout>
}
