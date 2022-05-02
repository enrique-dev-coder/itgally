import React from 'react'
import Navbar from "../../components/Navbar"
import ProjectInfo from "../../components/ProjectInfo"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import FadeInElement from "../../components/FadeInElement"

const projectTexts = {
  in4aha: "This project contribute to the cross-border scale-up of tested and ready-to-use applications in health and social care",
  smartiago: "The living labwill bring together an ecosystem of open innovation and technology transfer around advanced modeling, simulation and analysis sistems that are developed"
}

const projects = () => {
  return (
  <div className='xl:container xl:mx-auto'>

      <SecondHeader title="PROJECTS">
        <div className="absolute top-[30%] left-[20%] w-[35px] h-[35px] hidden md:block">
          <img src="/assets/Layer 27.png" className="w-full h-full" />
        </div>

        <div className="absolute top-[58%] left-[70%] w-[55px] h-[55px]">
          <img src="/assets/Layer 31.png" className="w-full h-full" />
        </div>

        <div className="absolute top-[10%] left-[29%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] md:left-[35%] md:-top-[5%] xl:-top-[15] xl:left-[40%]">
          <img src="/assets/Ellipse 5.png" className="w-full h-full" />
        </div>
      </SecondHeader>

      <Navbar show={false}/>


      <FadeInElement>
        <div className="flex flex-col px-[1.5rem] py-[4rem] gap-[2rem] sm:px-[4rem] lg:flex-row 2xl:gap-[4rem] 2xl:px-[10rem]">

          <ProjectInfo
            title="IN4AHA"
            info={projectTexts.in4aha}
            h2Styles="font-bold mt-4 text-[#37044E] text-[1.3rem]"
            pStyles="text-primary-violet mt-4 text-[1.2rem]"
            aStyles="font-bold text-[#37044E] mt-4 block text-[1.2rem]"
            address="projects/in4aha"
            btnText="Learn More" />

          <ProjectInfo
            title="Smartiago"
            info={projectTexts.smartiago}
            h2Styles="font-bold mt-4 text-[#37044E] text-[1.3rem]"
            pStyles="text-primary-violet mt-4 text-[1.2rem]"
            aStyles="font-bold text-[#37044E] mt-4 block text-[1.2rem]" 
            address="projects/smartiago"
            btnText="Learn More"/>

        </div>
      </FadeInElement>

      <Contact 
      h3Styles="text-[#8C1D82] font-bold text-[1.3rem] mb-6" 
      pStyles="text-[#8C1D82] text-[1.2rem]" 
      aStyles="text-[#8C1D82] ml-[.5rem] text-[1.2rem] lg:text-[1rem]" 
      />
  </div>
  )
}

export default projects