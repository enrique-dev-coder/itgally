import GallInfo from "../components/GallInfo"
import Arrow from "../components/atoms/Arrow"
import Button from "../components/atoms/Button"
import Logo from "../components/atoms/Logo"
import FadeInElement from "../components/FadeInElement"

const Contact = ({h3Styles, pStyles, aStyles}) => {
    return (
        <FadeInElement>
            <footer className="flex flex-col lg:flex-wrap lg:flex-row p-12 border-t-[1px] border-[#63257E] lg:border-t-0 xl:p-[4rem] 2xl:container 2xl:mx-auto" id="contact">
                <div className="footer-nav hidden lg:flex w-full border-b-[1px] border-[#63257E] border-primary-violet mb-12 lg:mb-[2rem]">
                    <ul className="flex gap-6 ml-auto">
                        <li>
                            <a href="" className='text-primary-violet flex items-center gap-[5px]'>Our Network <Arrow width=".5rem" height=".5rem" rotation="rotate(134deg)" /></a></li>
                        <li> <a href="" className='text-primary-violet'>News &amp; events</a> </li>
                        <li> <a href="" className='text-primary-violet'>Project</a></li>
                    </ul>
                    <Button bgColor="#8C1D82" color="#FFF8FE" mL="auto" text="Contact us" />
                </div>

                <div className="flex justify-between lg:mt-[1rem] lg:mr-[2rem]">
                    <Logo logoClass="w-[100px] h-[40px] xl:w-[150px] xl:h-[50px]" />
                    <div className="w-[28px] h-[23px] md:hidden">
                        <img src="/assets/Vector 238.png" className="w-full h-full mt-[.5rem]" />
                    </div>
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