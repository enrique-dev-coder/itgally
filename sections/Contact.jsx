import Image from 'next/image'
import GallInfo from "../components/GallInfo"
import Arrow from "../components/Arrow"
import Button from "../components/Button"

const Contact = () => {
    return (
        <footer className="flex flex-col md:flex-row md:flex-wrap p-12">
            <div className="footer-nav flex w-full border-b-[1px] border-primary-violet mb-12">
                <ul className="flex gap-6 ml-auto">
                    <li><a href="" className='text-primary-violet'>Our Network <Arrow width=".5rem" height=".5rem" rotation="rotate(134deg)" /></a></li>
                    <li> <a href="" className='text-primary-violet'>News &amp; events</a> </li>
                    <li> <a href="" className='text-primary-violet'>Project</a></li>
                </ul>
                <Button bgColor="bg-[#37044E]" color="text-primary-white" mL="auto" text="Contact us" />
            </div>

            <div className="flex w-full justify-between">
                <div className="block">
                    <Image src="/../public/assets/Logo.png" width={150} height={50}/> 
                </div>
            
                <div>
                    <h3 className='text-primary-violet font-bold text-xl mb-6'>ITGALL OFFICE</h3>
                    <p className='text-[#8C1D82]'>Despacho 12 - Edificio FEUGA <br /> Rúa de Lope Gómez de Marzoa <br /> 15706 Santiago de Compostela, A Coruña <br /> Galicia, Spain</p>
                </div>

                <GallInfo title="Social Media" url1="/../public/assets/Vector (3).png" text1="Linkedin" url2="/../public/assets/Vector (2).png" text2="Twitter"/>

                <GallInfo title="Contact us" url1="/../public/assets/Vector (1).png" text1="+34-602247149" url2="/../public/assets/email.png" text2="ask@itgall.org / communication@itgall.org"/>
            </div>

            
        </footer>
    )
}

export default Contact