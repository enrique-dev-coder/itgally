import Image from 'next/image'
import ProjectInfo from "../components/ProjectInfo"
import Button from "../components/Button"
import ScrollPoints from "../components/ScrollPoints"
import Arrow from "../components/Arrow"

const projectTexts = {
    in4aha: "This project contribute to the cross-border scale-up of tested and ready-to-use applications in health and social care",
    smartiago: "The living labwill bring together an ecosystem of open innovation and technology transfer around advanced modeling, simulation and analysis sistems that are developed"
}

const Projects = () => {
    return (
        <section className="projects h-screen bg-[#FCF4FB] grid grid-rows-5 p-16 relative">

          <div className="projects-title flex items-center">
            <h2 className="text-[#37044E] text-3xl font-bold">Projects</h2>

            <Button text="More Projects" bgColor="#FFF8FE" borderColor="#37044E" color="#37044E" mL="40%"/>
          </div>

          <div className="projects-testimonial grid grid-cols-4 lg:grid-cols-3 gap-8 row-span-4 mt-16 w-11/12">

            <ProjectInfo title="IN4AHA" info={projectTexts.in4aha}/>
            <ProjectInfo title="Smartiago" info={projectTexts.smartiago} />

            <div className="border border-[#37044E] p-8 grow col-span-2 h-48 lg:col-span-1 h-fit">
              <h3 className="mb-2 text-3xl font-bold text-[#8C1D82] mb-4">Discover the news and events from our Living Lab</h3>

              <Button text="Scroll Down" bgColor="#FFF8FE" borderColor="#37044E" color="#37044E" mR=".5rem" mL="0" display="flex" gap="8px">
                <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
              </Button>
            </div>
          </div>

          <div className="absolute top-[21%] right-[10%]">
            <Image src="/../public/assets/image 135.png" width={128} height={128}/>
          </div>

          <ScrollPoints top="30%" />

        </section>
    )
}

export default Projects