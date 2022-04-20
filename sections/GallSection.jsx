import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/Button"
import Image from 'next/image'

const GallSection = () => {

    return (
        <section className="gall-section relative grid grid-cols-3 bg-primary-white pb-56">
          <nav className="border-y border-primary-violet py-[.5rem] col-span-3 bg-white">
            <ul className="list-none justify-center flex gap-5">
              <li><a href="" className="text-primary-violet">Our Network</a></li>
              <li><a href="" className="text-primary-violet">New Events</a></li>
              <li><a href="" className="text-primary-violet">Project</a></li>
              <li><a href="" className="text-primary-violet">Contact us</a></li>
              <Image src="/../public/assets/Subtract.png" width={27} height={27}/>
            </ul>
          </nav>

          <div className="h-screen flex items-center justify-center col-span-3 z-10">

            <div className="it-gall-title text-center flex flex-col w-2/5">

              <h2 className="text-primary-violet font-bold text-4xl mb-9">
                What is <span className="font-normal">IT</span>GALL?
              </h2>

              <p className="text-primary-violet text-lg">
                <span className="font-bold">ITGALL</span> is a Living lab network managed by SG spread along all the Galicia geography, combining capabilities for testing solutions within the <span className="font-bold">healthcare, social care</span> and <span className="font-bold">onehealth sectors</span>
              </p>

              <div className="button-box mt-14 flex gap-2 justify-center">
                <Button text="View More" borderColor="#8C1D82" color="#8C1D82" />
                <Button text="Watch Video" bgColor="#8C1D82" borderColor="#8C1D82" color="#FFF8FE" />
              </div>
              
            </div>

          </div>

          <div className="absolute top-[18%]">
            <Image src="/../public/assets/Layer 32 (2).png" width={197} height={208} />
          </div>

          <div className="absolute top-[65%] left-[72%]">
            <Image src="/../public/assets/Layer 27.png" width={172} height={182} />
          </div>

          <div className="absolute top-[45%] left-[82%]">
            <Image src="/../public/assets/Layer 29.png" width={84} height={87} />
          </div>

          <div className="absolute top-[62%] right-[0]">
            <Image src="/../public/assets/Layer 28.png" width={183} height={268} />
          </div>

          <div className="absolute top-[1%] left-[27%]">
            <Image src="/../public/assets/Ellipse 5.png" width={644} height={644}/>
          </div>

          

          <ScrollPoints />
          
        </section>
    )
    
}

export default GallSection