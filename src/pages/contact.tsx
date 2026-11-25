import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'

const requestDetails = ['The title, page or account involved', 'What you expected and what happened instead', 'Your device and browser, if it is a technical issue']

export default function ContactSupport() {
  return <SiteLayout><Head><title>Contact support | Pylothouse Help</title><meta name="description" content="Contact Pylothouse support with account, publishing, safety or technical questions." /></Head>
    <main id="main-content" className="contact-page">
      <section className="page-intro"><p className="eyebrow"><span /> SUPPORT / CONTACT</p><h1>Let’s get to<br /><em>the useful detail.</em></h1><p>Choose the support route that fits your question. This page opens an email draft; it does not transmit or store a request by itself.</p><a className="button-primary" href="mailto:support@pylothouse.com?subject=Pylothouse%20support%20request&body=Topic%3A%0ATitle%20or%20account%3A%0AWhat%20happened%3A%0ADevice%20and%20browser%20(if%20relevant)%3A">Email Pylothouse support <span aria-hidden="true">↗</span></a></section>
      <section className="contact-detail"><p className="eyebrow">TO HELP US ROUTE YOUR REQUEST</p><h2>Include the context that matters.</h2>{requestDetails.map((detail, index) => <div key={detail}><span>{String(index + 1).padStart(2, '0')}</span><p>{detail}</p></div>)}<p className="privacy-reminder">Never send your password, one-time sign-in code or payment credentials by email.</p></section>
    </main>
  </SiteLayout>
}
