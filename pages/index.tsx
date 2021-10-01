import type { NextPage } from 'next'
import Head from 'next/head'
import Bridges from '../_data/bridges'

interface TBridge {
  name: string,
  url: string,
  networks: string[],
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bridge.quest</title>
        <meta name="description" content="A directory of cross-chain bridges" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css"/>
      </Head>
      <header>
        <h1>
          bridge.quest
        </h1>

        <p>A directory of cryptocurrency bridges</p>
      </header>
      <main>
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
              <tr key={bridge.name}>
                <td key={bridge.name}>
                  <a href={bridge.url}>{bridge.name}</a>
                </td>
                <td>
                  {bridge.networks.sort().join(" , ")}
                </td> 
              </tr>   
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <a href="https://github.com/GSto/bridge.quest">Github</a>
        <a href="https://twitter.com/GSto">Twitter</a>
      </footer>
    </div>
  )
}

export default Home
