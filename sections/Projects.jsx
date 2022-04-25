import ProjectInfo from "../components/ProjectInfo"
import Button from "../components/atoms/Button"
import ScrollPoints from "../components/ScrollPoints"
import Arrow from "../components/atoms/Arrow"
import { useInView } from "react-intersection-observer"
import FadeInElement from "../components/FadeInElement"

const projectTexts = {
    in4aha: "This project contribute to the cross-border scale-up of tested and ready-to-use applications in health and social care",
    smartiago: "The living labwill bring together an ecosystem of open innovation and technology transfer around advanced modeling, simulation and analysis sistems that are developed"
}

const Projects = () => {

  const {ref, inView} = useInView({
    threshold: 0.25
  })

    return (

      <FadeInElement>
        <section className="projects bg-[#FCF4FB] px-[2.5rem] py-[4rem] relative flex items-center lg:pr-[4rem] lg:pl-[2rem] xl:pr-[8rem] xl:pl-[4rem]" ref={ref} id="projects">

          <div className="projects-title flex flex-col">

            <div className="flex justify-between lg:justify-start">
              <h2 className="text-[#37044E] text-[1.35rem] md:text-3xl font-bold z-10">Projects</h2>
              <div className="lg:ml-[20.5rem] xl:ml-[30rem] 2xl:ml-[36.7rem]">
                <Button text="More Projects" bgColor="#FCF4FB" borderColor="#8C1D82" color="#8C1D82" />
              </div>

            </div>

            <div className="projects-testimonial flex flex-col lg:grid lg:grid-cols-6 lg:mt-[6rem] mt-16 z-10">

              <ProjectInfo title="IN4AHA" info={projectTexts.in4aha} span="span 2" />
              <ProjectInfo title="Smartiago" info={projectTexts.smartiago} span="span 2" />

              <div className="border border-[#37044E] p-8 sm:px-[2rem] sm:py-[3rem] md:col-span-2 relative -top-[12%] 2xl:flex flex-col justify-between">
                <h3 className="mb-2 text-[1.35rem] sm:text-[1.5rem] md:text-3xl font-bold text-[#8C1D82]">Discover the news and events from our Living Lab</h3> 
                <Button text="Scroll Down" bgColor="#FCF4FB" borderColor="#8C1D82" color="#8C1D82" mL="0" display="flex" gap="8px" width="fit-content">
                  <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
                </Button>
              </div>
            </div>


          </div>



          <div className="absolute z-10 top-[62%] right-[5%] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] sm:right-0 sm:top-[51%] lg:top-[3%] lg:right-[5%] xl:w-[259px] xl:h-[259px] xl:right-[6%] xl:-top-[6%]">
            <img src="assets/image 135.png" className="w-full h-full" />
          </div>

          <div className="absolute -top-[10%] left-[0] w-[300px] h-[655px] xl:w-[461px] xl:h-[655px]">
            <img src="assets/Ellipse 3.png" className="w-full h-full" />
          </div>

          <ScrollPoints top="30%" projectsView={inView} />

        </section>
      </FadeInElement>
        
    )
}

export default Projects