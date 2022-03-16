import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
      </Head>
      <Header />
      <main></main>
    </div>
  )
}

export default Home
