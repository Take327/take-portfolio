import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import SideNavi from '../components/navi/sideNavi'
import Top from '../components/main/Top'
import About from '../components/main/About'
import Portfolio from '../components/main/Portfolio'
import Contact from '../components/main/Contact'

export default function Home() {

  const [openState, setOpenState] = useState<boolean>(false);

  const chengeOpenState = () => {
    setOpenState(!openState);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Take’s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header chengeOpenState={chengeOpenState} />
      <SideNavi openState={openState} chengeOpenState={chengeOpenState} />
      <main>
        <Top />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 Takeshi.T
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
