import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/Button"

const GallSection = () => {

    return (
        <section className="gall-section relative grid grid-cols-3 bg-primary-white pb-5 lg:pb-56 overflow-hidden">

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
                <Button text="View More" borderColor="#8C1D82" color="#8C1D82"/>
                <Button text="Watch Video" bgColor="#8C1D82" borderColor="#8C1D82" color="#FFF8FE"/>
              </div>
              
            </div>

          </div>

          <div className="absolute top-[12%] -left-[24%] sm:-left-[15%] lg:top-[18%] lg:left-[0] h-[197px] h-[208px]">
            <img src="assets/Layer 32 (2).png" className="w-full h-full" />
          </div>

          <div className="absolute lg:top-[65%] lg:left-[63%] w-[172px] h-[182px] hidden lg:block xl:top-[42%] xl:left-[70%]">
            <img src="assets/Layer 27.png" className="w-full h-full" />
          </div>

          <div className="absolute top-[60%] -right-[5%] lg:top-[45%] lg:left-[82%] lg:right-0 overflow-hidden w-[84px] h-[87px] xl:top-[30%]">
          <img src="assets/Layer 29.png" className="w-full h-full" />
          </div>

          <div className="absolute top-[62%] -right-[3%] hidden lg:block w-[183px] h-[268px] xl:top-[40%]">
          <img src="assets/Layer 28.png" className="w-full h-full" />
          </div>

          <div className="absolute -top-[24%] -left-[35%] sm:-left-0 sm:-top-[5%] lg:-top-[10%] xl:left-[26%] xl:-top-[3%] md:left-[10%] w-[644px] h-[644px]">
          <img src="assets/Ellipse 5.png" className="w-full h-full" />
          </div>

          

          <ScrollPoints />
          
        </section>
    )
    
}

export default GallSection