import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectInfo from "./components/ProjectInfo"

const projectTexts = {
  in4aha: "This project contribute to the cross-border scale-up of tested and ready-to-use applications in health and social care",
  smartiago: "The living labwill bring together an ecosystem of open innovation and technology transfer around advanced modeling, simulation and analysis sistems that are developed"
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>IT GALL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {/* HEADER */}
        <section className="header relative grid grid-cols-4 lg:grid-cols-3">
          <div className="w-full block pl-20 pt-1">
            <Image src="/../public/assets/Logo.png" width={150} height={0}/>
          </div>

          <div className="absolute -top-[10px]">
            <Image src="/../public/assets/_itgall LOGOS-04.png" width={300} height={630}/>
          </div>

          <div className="h-screen grid place-content-center md:col-span-2 lg:col-span-1">

            <div>
              <h1 className="text-3xl text-[#37044E] font-bold text-center">TECH FOR PEOPLE</h1>
              <p className="text-[#37044E] tracking-[.1rem] text-xl">YOUR LIVING LAB NETWORK</p>
            </div>

          </div>

          <div className="absolute top-[45%] right-[2%]">
            <div>Breakpoints</div>
          </div>

        </section>

        {/* GALL SECTION */}
        <section className="gall-section relative grid grid-cols-3">
          <nav className="border-y border-[#37044E] py-[.5rem] col-span-3">
            <ul className="list-none justify-center flex gap-5">
              <li><a href="">Our Network</a></li>
              <li><a href="">New Events</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Contact us</a></li>
              <Image src="/../public/assets/Subtract.png" width={27} height={27}/>
            </ul>
          </nav>

          <div className="bg-[#FFF8FE] h-screen flex items-center justify-center col-span-3">

            <div className="it-gall-title text-center flex flex-col w-2/5">
              <h2 className="text-[#37044E] font-bold text-4xl mb-9">
                What is <span className="font-normal">IT</span>GALL?
              </h2>
              <p className="text-[#37044E]">
                <span className="font-bold">ITGALL</span> is a Living lab network managed by SG spread along all the Galicia geography, combining capabilities for testing solutions within the <span className="font-bold">healthcare, social care</span> and <span className="font-bold">onehealth setors</span>
              </p>

              <div className="button-box mt-14 flex gap-5 justify-center">
              <button className="bg-[#FFF8FE] border border-[#37044E] text-[#37044E] py-2 px-7 ml-7 cursor-pointer">
                <a href="#our-network">View More</a>
              </button>

              <button className="bg-[#37044E] border border-[#37044E] text-[#FFF8FE] py-2 px-7 ml-7 cursor-pointer">
                <a href="#our-network">Watch Video</a>
              </button>
              </div>
            </div>

          </div>

          <div className="absolute top-[45%] right-[2%]">
            <div>Breakpoints</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects h-screen bg-[#FCF4FB] grid grid-rows-5 p-16 relative">

          <div className="projects-title flex items-center">
            <h2 className="text-[#37044E] text-3xl font-bold">Projects</h2>

            <button className="bg-[#FFF8FE] border border-[#37044E] text-[#37044E] py-1.5 px-5 ml-[40%] cursor-pointer">
              <a href="#our-network">More Projects</a>
            </button>
          </div>

          <div className="projects-testimonial grid grid-cols-4 lg:grid-cols-3 gap-8 row-span-4 mt-16 w-11/12">

            <ProjectInfo title="IN4AHA" info={projectTexts.in4aha}/>
            <ProjectInfo title="Smartiago" info={projectTexts.smartiago} />

            <div className="border border-[#37044E] p-4 grow col-span-2 h-48 lg:col-span-1">
              <h3 className="mb-2 text-xl lg:text-2xl font-bold text-[#8C1D82] mb-4">Discover the news and events from our Living Lab</h3>

              <button className="bg-[#FFF8FE] border border-[#37044E] text-[#37044E] py-2 px-7 ml-[40%] cursor-pointer">
              <a href="">
                Scroll Down
                <span className="w-[.7rem] h-[.7rem] inline-block border-[#37044E] border-solid border-t-[2px] border-r-[2px] transition-all transform rotate-[135deg] ml-1"></span>
              </a>
            </button>
            </div>
          </div>

          <div className="absolute top-[35%] right-[2%]">
            <div>Breakpoints</div>
          </div>
        </section>

        {/* NEWS AND EVENTS */}
        <section className="news-and-events grid grid-rows-3 gap-x-20 gap-y-14 grid-cols-3 p-10 relative">

          <div className="flex items-center col-span-3">
            <h2 className="text-[#37044E] font-bold text-3xl">News and events</h2>

            <button className="bg-[#FFF8FE] border border-[#37044E] text-[#37044E] py-1.5 px-5 ml-[40%] cursor-pointer">
              <a href="#">
                Learn More
              </a>
            </button>

            <button className="bg-[#37044E] border border-[#37044E] text-[#FFF8FE] py-1.5 px-5 ml-2 cursor-pointer">
              <a href="#">
                Contact us
              </a>
            </button>
          </div>

          <div className="relative border border-[#37044E] row-span-2 col-span-1 p-4">
            <div className="img-container absolute -top-[60px] -left-[1px]">
              <Image src="/../public/assets/Rectangle 57.png" width={100} height={100}/>
            </div>

            <span>15th Jult 2021</span>
            <h3>Projects selecting for testing under IN4AHA / Focus group</h3>
            <p>Developing a Decalogue of values of technologies with purpose</p>
            <a href="#" className="font-bold text-[#37044E] mt-4 block">
              Learn More
              <span className="w-[.7rem] h-[.7rem] inline-block border-[#37044E] border-solid border-t-[2px] border-r-[2px] transition-all transform rotate-45 ml-1"></span>
            </a>
          </div>

          <div className="absolute top-[35%] right-[2%]">
            <div>Breakpoints</div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home
