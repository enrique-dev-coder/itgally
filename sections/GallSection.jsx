import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/atoms/Button"
import { useInView } from "react-intersection-observer"
import FadeInElement from "../components/FadeInElement"
import Modal from "../components/Modal"
import {useState} from "react"
import { Link as Scroll } from "react-scroll"

const GallSection = () => {

  const {ref, inView} = useInView({
    threshold: 0.25
  })

  const [modal, setModal] = useState(false)

    return (
      <FadeInElement>
        <section className="gall-section relative grid grid-cols-3 bg-primary-white pb-5 overflow-hidden" ref={ref} id="gallSection">

          <div className="h-screen flex md:items-center lg:justify-center col-span-3 z-10">

            <div className="my-auto pt-[4rem] text-center flex flex-col lg:w-2/5 lg:my-0 lg:px-0">

              <div className="px-[4rem] lg:px-0">
              <h2 className="text-primary-violet font-bold text-[1.75rem] md:text-4xl mb-9">
      What is <span className="font-bold md:font-normal">IT</span>GALL?
              </h2>

              <p className="text-primary-violet text-[1rem] lg:text-lg">
                <span className="font-bold">ITGALL</span> is a Living lab network managed by SG spread along all the Galicia geography, combining capabilities for testing solutions within the <span className="font-bold">healthcare, social care</span> and <span className="font-bold">onehealth sectors</span>
              </p>
              </div>

              <div className="button-box mt-[1.5rem] lg:mt-14 flex gap-[1.5rem] justify-center">
                <Scroll to='network' smooth={true} duration={1000}>
                  <Button text="View More" borderColor="#8C1D82" color="#8C1D82"/>
                </Scroll>
                <button className="bg-[#8C1D82] border-[#8C1D82] text-primary-white border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7" onClick={() => setModal(true)}>
                  Watch Video
                </button>
              </div>
    
            </div>

          </div>

          <div className="absolute top-[12%] -left-[24%] sm:-left-[15%] lg:top-[18%] lg:left-[0] h-[197px] h-[208px]">
            <img src="assets/Layer 32 (2).png" className="w-full h-full" />
          </div>

          <div className="absolute lg:top-[65%] lg:left-[63%] w-[172px] h-[182px] hidden lg:block xl:left-[70%]">
            <img src="assets/Layer 27.png" className="w-full h-full" />
          </div>

          <div className="absolute top-[60%] -right-[5%] lg:top-[45%] lg:left-[82%] lg:right-0 overflow-hidden w-[84px] h-[87px] xl:top-[44%]">
          <img src="assets/Layer 29.png" className="w-full h-full" />
          </div>

          <div div className="absolute top-[62%] -right-[3%] hidden lg:block w-[183px] h-[268px]">
          <img src="assets/Layer 28.png" className="w-full h-full" />
          </div>

          <div className="absolute top-[12%] -left-[20%] sm:left-[3%] md:left-[8%] lg:left-[20%] xl:left-[26%] 2xl:left-[29%] w-[644px] h-[644px]">
          <img src="assets/Ellipse 5.png" className="w-full h-full" />
          </div>

          <ScrollPoints gallSectionView={inView} />

          {modal && <Modal modal={modal} setModal={setModal} />}

          </section>

      </FadeInElement>
        
    )
    
}

export default GallSection