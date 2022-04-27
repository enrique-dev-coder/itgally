import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from "../sections/Header"
import GallSection from "../sections/GallSection"
import Projects from "../sections/Projects"
import Events from "../sections/Events"
import Contact from "../sections/Contact"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>IT GALL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='2xl:container 2xl:mx-auto'>
        <Header />
        <Navbar />
        <GallSection />
        <Projects />
        <Events />
      </main>

      <Contact h3Styles="text-[#8C1D82] font-bold text-xl mb-6" pStyles="text-[#8C1D82]" aStyles="text-[#8C1D82] ml-[.5rem]"/>
    </div>
  )
}

export default Home
