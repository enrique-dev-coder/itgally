import Link from 'next/link'
import { Link as Scroll } from "react-scroll"
import GallInfo from "../components/GallInfo"
import Logo from "../components/atoms/Logo"
import FadeInElement from "../components/FadeInElement"

const Contact = ({h3Styles, pStyles, aStyles}) => {
    return (
        <FadeInElement>
            <footer className="flex flex-col lg:flex-wrap lg:flex-row p-12 border-t-[1px] border-[#63257E] lg:border-t-0 xl:p-[4rem] 2xl:container 2xl:mx-auto" id="contact">
                <div className="footer-nav hidden lg:flex w-full border-b-[1px] border-[#63257E] border-primary-violet mb-12 lg:mb-[2rem]">
                    <ul className="flex gap-6 ml-auto">
                        <li>
                            <Scroll to="network" smooth={true} duration={1000} className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                Our Network
                            </Scroll>
                        </li>
                        <li>
                            <Scroll to="events" smooth={true} duration={1000} className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                New &amp; Events
                            </Scroll> 
                        </li>
                        <li>
                            <Link href="/projects" className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                <a className="text-primary-violet hover:text-[#8C1D82]">Project</a>
                            </Link>
                        </li>
                    </ul>

                    <Link href="/contact">
                        <a className="bg-[#8C1D82] text-[#FFF8FE] ml-auto border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer">Contact us</a>
                    </Link>

                </div>

                <div className="flex justify-between lg:mt-[1rem] lg:mr-[2rem]">
                    <Logo logoClass="w-[100px] h-[40px] xl:w-[150px] xl:h-[50px]" />
                </div>

                <div className="flex flex-col md:justify-between lg:flex-row lg:mt-[1rem] lg:flex-1 lg:justify-around">

                    <div className="mt-[2.5rem] mb-[3rem] lg:mb-[1rem] lg:mt-0 lg:mr-[2rem] xl:mr-0">
                        <h3 className={h3Styles}>ITGALL OFFICE</h3>
                        <p className={pStyles}>Despacho 12 - Edificio FEUGA <br /> Rúa de Lope Gómez de Marzoa <br /> 15706 Santiago de Compostela, A Coruña <br /> Galicia, Spain</p>
                    </div>

                    <GallInfo title="Social Media" url1="/assets/Vector (3).png" text1="Linkedin" url2="/assets/Vector (2).png" text2="Twitter" aStyles={aStyles} />

                    <GallInfo title="Contact us" url1="/assets/Vector (1).png" text1="+34-602247149" url2="/assets/email.png" text2="ask@itgall.org / communication@itgall.org" aStyles={aStyles} />
                </div>


            </footer>
        </FadeInElement>
        
    )
}

export default Contact