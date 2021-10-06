import type { NextPage } from 'next'
import Head from 'next/head'
import Bridges from '../_data/bridges.json'
import styles from '../styles/Home.module.css';
import React from 'react';
import Fuse from 'fuse.js';

interface TBridge {
  name: string,
  url: string,
  networks: string[],
}

const options = {
  keys: ['name', 'networks'],
  isCaseSensitive: false
}

const sortedBridges = Bridges.sort((a: TBridge, b: TBridge) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

const searchIndex = Fuse.createIndex(options.keys, sortedBridges);
const fuse = new Fuse(sortedBridges, options, searchIndex);

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(sortedBridges);

  console.info(searchResults);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((event.target! as HTMLInputElement).value);
  };

  React.useEffect(() => {
    if (typeof searchTerm !== "undefined" && searchTerm !== "") {
      const results = fuse.search(searchTerm);
      const pluckedResults = results.map((bridge) => {
        return bridge.item;
      });

      console.info({ search: searchTerm, results: results });
      setSearchResults(pluckedResults);
    }
    else {
      setSearchResults(sortedBridges);
    }
  }, [searchTerm]);

  return (
    <div>
      <Head>
        <title>bridge.quest</title>
        <meta name="description" content="A directory of cross-chain bridges" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css" />
      </Head>
      <header>
        <h1>
          bridge.quest
        </h1>
        <p>A directory of cryptocurrency bridges</p>
      </header>
      <main>
        <input className={styles.searchBox} type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Bridge</th>
              <th>Networks</th>
            </tr>
          </thead>
          <tbody>
            {searchResults
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
