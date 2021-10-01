import type { NextPage } from 'next'
import Head from 'next/head'
import Bridges from '../_data/bridges'
import styles from '../styles/Home.module.css'

interface TBridge {
  name: string,
  url: string,
  networks: string[],
}

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
        <table>
          <thead>
            <tr>
              <th>Bridge</th>
              <th>Networks</th>
            </tr>
          </thead>
          <tbody>
            {Bridges
              .sort((a:TBridge, b:TBridge) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
              .map((bridge: TBridge) => (
              <tr>
                <td key={bridge.name}>
                  <a href={bridge.url}>{bridge.name}</a>
                </td>
                <td>
                  {bridge.networks.join(" , ")}
                </td> 
              </tr>   
            ))}
          </tbody>
        </table>
      </main>

    </div>
  )
}

export default Home
