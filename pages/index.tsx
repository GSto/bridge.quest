import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>bridge.quest</title>
        <meta name="description" content="A directory of cross-chain bridges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          bridge.quest
        </h1>
        <h2>Coming Soon</h2>
        <p>A directory of cross-chain bridges</p>
      </main>

    </div>
  )
}

export default Home
