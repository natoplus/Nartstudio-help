import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import SiteLayout from '../../components/SiteLayout'
import { helpArticles, type HelpArticle } from '../../lib/articles'

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  return <SiteLayout><Head><title>{article.title} | Pylothouse Help</title><meta name="description" content={article.summary} /></Head>
    <main id="main-content" className="article-page">
      <p className="eyebrow"><Link href="/articles">HELP LIBRARY</Link> / {article.category.toUpperCase()}</p>
      <h1>{article.title}</h1><p className="article-lede">{article.summary}</p>
      <div className="article-content">{article.sections.map((section, index) => <section key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div></section>)}</div>
      <aside className="article-contact"><div><p className="eyebrow">NEED MORE HELP?</p><p>Include the page or title you are asking about and a short description of what happened.</p></div><Link href="/contact">Contact support <span aria-hidden="true">↗</span></Link></aside>
    </main>
  </SiteLayout>
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: helpArticles.map(article => ({ params: { slug: article.slug } })), fallback: false })
export const getStaticProps: GetStaticProps<{ article: HelpArticle }> = async ({ params }) => {
  const article = helpArticles.find(item => item.slug === params?.slug)
  return article ? { props: { article } } : { notFound: true }
}
