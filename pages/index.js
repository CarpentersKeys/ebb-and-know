import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.scss'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Ebb and Know</title>
        <meta name="description" content="a simple review protocal based on the Ebbinghaus forgetting curve" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!.. to <a href="http://localhost:3000/">Ebb and Know</a>
        </h1>

        <p className={styles.description}>
          a simple review protocal based on the
          <a href='https://en.wikipedia.org/wiki/Forgetting_curve' className={styles.emph}> forgetting curve</a>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link passHref href="/user" className={styles.link}>
              <h2>Log in &rarr;</h2>
            </Link>
            <p>or</p>
            <Link passHref href="/user" className={styles.link}>
              <h2>create an account &rarr;</h2>
            </Link>

          </div>

          <Link passHref href="/demo" >
            <div className={styles.card}>
              <h2>See what we&apos;ve done &rarr;</h2>
              <p>check out how we implement Ebbinghaus&apos; ideas.</p>
            </div>
          </Link>
        </div>

        <div className={styles.grid}>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4492928/" className={styles.card}>
            <h2>Science &rarr;</h2>
            <p>Learn about the principles</p>
          </a>

          <a href="https://getpocket.com/explore/item/train-your-brain-to-remember-anything-you-learn-with-this-simple-20-minute-habit" className={styles.card}>
            <h2>Read &rarr;</h2>
            <p>Something a little lighter</p>
          </a>
        </div>
      </main >

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}
