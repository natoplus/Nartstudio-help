import Head from 'next/head'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import SiteLayout from '../../components/SiteLayout'
import { helpArticles } from '../../lib/articles'

export default function ArticlesIndex() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return helpArticles.filter(article => !term || `${article.category} ${article.title} ${article.summary}`.toLowerCase().includes(term))
  }, [query])

  return <SiteLayout><Head><title>Help articles | Pylothouse</title><meta name="description" content="Browse practical Pylothouse reader, creator, safety and account help articles." /></Head>
    <main id="main-content" className="page-main">
      <section className="page-intro"><p className="eyebrow"><span /> PYLOTHOUSE / HELP LIBRARY</p><h1>Answers for<br /><em>the next step.</em></h1><p>Browse practical guidance for readers and creators. Platform features and requirements can change; always check the current details shown on Pylothouse.</p><label className="search-field"><span>Search help articles</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search reading, publishing, safety…" /></label></section>
      <section className="article-library"><p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'} {query && `for “${query}”`}</p>
        {filtered.length ? filtered.map((article, index) => <Link className="article-row" href={`/articles/${article.slug}`} key={article.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{article.category} · {article.updated}</small><h2>{article.title}</h2><p>{article.summary}</p></div><b aria-hidden="true">↗</b></Link>) : <div className="empty-state"><h2>No matching help articles.</h2><p>Try a different search or contact support with your question.</p><button type="button" onClick={() => setQuery('')}>Clear search</button></div>}
      </section>
      <section className="help-callout"><div><p className="eyebrow">STILL LOOKING?</p><h2>Tell us what you need.</h2><p>Support opens in your email app; this site does not store submitted requests.</p></div><Link className="button-primary" href="/contact">Contact support <span aria-hidden="true">↗</span></Link></section>
    </main>
  </SiteLayout>
}
