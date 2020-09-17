import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Connor - just checking out a little Next.js action</p>
        <p>
          (This is a sample website - you can build a site like this{' '}
          <a href="https://nextjs.org/learn">here</a>.)
        </p>
      </section>
    </Layout>
  )
}