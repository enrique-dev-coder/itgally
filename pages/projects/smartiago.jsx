import Link from 'next/link'
import Navbar from "../../components/Navbar"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import Arrow from "../../components/atoms/Arrow"
import FadeInElement from "../../components/FadeInElement"

const smartiago = () => {
    return (
        <div className='xl:container xl:mx-auto'>

            <SecondHeader imgURL="/assets/smartiago-grande.png" headerSize="h-[35vh] " />

            <Navbar show={false}/>


            <FadeInElement>
                <div className="grid place-content-header px-[2rem] pt-[82px] pb-[3rem] sm:px-[4rem] lg:px-[11rem] lg:pb-[12px] xl:px-[16rem]">

                    <div className="flex flex-col">

                        <p className="text-primary-violet text-[1.2rem]">
                            The living lab whose creation is promoted through a tender from <span className="font-bold">the City Hall of Santiago de Compostela</span>, will bring together an ecosystem of open innovation and technology transfer around advanced modeling, simulation and analysis systems that are developed, carrying out testing and networking actions that help incorporate R&amp;D&amp;I activities , in particular, these new technologies to the urban space to test and improve models of sustainable pedestrian mobility.

                            <span className="font-bold block my-[2rem]">In this line, its specific objectives will be the following:</span>

                            <ul className="list-disc pl-[2rem]">
                                <li className="mb-[.5rem]">Create a knowledge and learning space around modeling, simulation and personalized analysis of pedestrian mobility in urban environments through key agents in Santiago de Compostela, Galicia and Spain.</li>
                                <li className="mb-[.5rem]">Create spaces (physical and virtual) for innovation that facilitate access to mobility modeling, simulation and analysis technologies for third parties interested in R&amp;D&amp;i processes related to sustainable mobility and, mainly, aimed at improving mobility. the environmental sustainability of pedestrian mobility habits in Heritage Cities or with characteristics similar to those of Santiago de Compostela.</li>
                                <li className="mb-[.5rem]">Identify and attract the main trends, technologies, business models and solutions (hardware, software, solutions, etc.) existing at an international level around modeling, simulation and advanced analysis of mobility in urban environments.</li>
                                <li className="mb-[.5rem]">Create connection spaces between the mobility industry, ICTs, citizens, local businesses or the public sector to promote entrepreneurship in the field of modeling, simulation and advanced analysis of urban mobility.</li>
                                <li className="mb-[.5rem]">Promote the generation of employment and wealth in the area of ​​Santiago de Compostela by creating an innovation ecosystem that attracts talent and external investment and, at the same time, supports local talent and support/companies in areas such as technology or mobility.</li>
                            </ul>

                        </p>

                        <Link href="/projects/in4aha">
                            <a className="font-bold text-[#37044E] mt-[2rem] block text-[1.1rem]">
                                <Arrow rotation="rotate(228deg)" mR="1rem" />
                                Previous Project
                            </a>
                        </Link>

                    </div>

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

export default smartiago