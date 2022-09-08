import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from 'pages/Main'
import s from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Passport</title>
        <meta name="description" content="passport photo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  )
}

export default Home
