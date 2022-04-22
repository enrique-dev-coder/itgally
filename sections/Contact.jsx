import GallInfo from "../components/GallInfo"
import Arrow from "../components/atoms/Arrow"
import Button from "../components/atoms/Button"

const Contact = () => {
    return (
        <footer className="flex flex-col lg:flex-wrap lg:flex-row p-12 border-t-[1px] border-[#63257E] lg:border-t-0 xl:p-[4rem]">
            <div className="footer-nav hidden lg:flex w-full border-b-[1px] border-[#63257E] border-primary-violet mb-12 lg:mb-[2rem]">
                <ul className="flex gap-6 ml-auto">
                    <li><a href="" className='text-primary-violet'>Our Network <Arrow width=".5rem" height=".5rem" rotation="rotate(134deg)" /></a></li>
                    <li> <a href="" className='text-primary-violet'>News &amp; events</a> </li>
                    <li> <a href="" className='text-primary-violet'>Project</a></li>
                </ul>
                <Button bgColor="#8C1D82" color="#FFF8FE" mL="auto" text="Contact us" />
            </div>

            <div className="flex justify-between lg:mt-[1rem] lg:mr-[2rem]">
                    <div className="w-[100px] h-[40px] xl:w-[150px] xl:h-[50px]">
                        <img src="assets/Logo.png" className="w-full h-full" />
                    </div>
                    <div className="w-[28px] h-[23px] md:hidden">
                        <img src="assets/vector 238.png" className="w-full h-full mt-[.5rem]" />
                    </div>
            </div>

            <div className="flex flex-col md:justify-between lg:flex-row lg:mt-[1rem] lg:flex-1 lg:justify-around">
            
                <div className="mt-[2.5rem] mb-[1rem] lg:mt-0 lg:mr-[2rem] xl:mr-0">
                    <h3 className='text-[#8C1D82] font-bold text-xl mb-6'>ITGALL OFFICE</h3>
                    <p className='text-[#8C1D82]'>Despacho 12 - Edificio FEUGA <br /> Rúa de Lope Gómez de Marzoa <br /> 15706 Santiago de Compostela, A Coruña <br /> Galicia, Spain</p>
                </div>

                <GallInfo title="Social Media" url1="assets/Vector (3).png" text1="Linkedin" url2="assets/Vector (2).png" text2="Twitter"/>

                <GallInfo title="Contact us" url1="assets/Vector (1).png" text1="+34-602247149" url2="assets/email.png" text2="ask@itgall.org / communication@itgall.org"/>
            </div>

            
        </footer>
    )
}

export default Contact