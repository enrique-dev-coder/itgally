import Navbar from "../../components/Navbar"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import BtnArrow from "../../components/atoms/BtnArrow"
import FadeInElement from "../../components/FadeInElement"

const in4aha = () => {
    return (
        <div className='xl:container xl:mx-auto'>

            <SecondHeader imgURL="/assets/Group 22810.png" headerSize="h-[35vh] " />

            <Navbar show={false}/>


            <FadeInElement>
                <div className="grid place-content-header px-[2rem] py-[4rem] sm:px-[4rem] lg:px-[11rem] lg:pt-[8rem] lg:pb-[4rem] xl:px-[16rem]">

                    <div className="flex flex-col">

                        <p className="text-primary-violet text-[1.2rem] md:text-[1.35rem]">
                            Innovation Networks for Active and Healthy Ageing (IN-4-AHA) is a EU-funded Coordination and Support Action (CSA) that contributes to the cross-border scale-up of tested and ready-to-use applications in health and social care. The project will bring together both the support and the demand sides as well as the end-users, engage with local and regional ecosystems, stakeholder groups and organisations. The main outcome of this cooperation is an innovation scale-up model that is validated by stakeholders and complemented by a clear implementation roadmap, an innovation impact evaluation toolkit and a strategy for long-term investments.
                        </p>

                        <BtnArrow address="/projects/smartiago" aStyles="font-bold text-[#37044E] mt-[2rem] block text-[1.1rem] text-right" btnText="Next Project" />
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

export default in4aha