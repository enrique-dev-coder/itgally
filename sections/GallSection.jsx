import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/Button"
import Image from 'next/image'

const GallSection = () => {

    return (
        <section className="gall-section relative grid grid-cols-3">
          <nav className="border-y border-primary-violet py-[.5rem] col-span-3">
            <ul className="list-none justify-center flex gap-5">
              <li><a href="" className="text-primary-violet">Our Network</a></li>
              <li><a href="" className="text-primary-violet">New Events</a></li>
              <li><a href="" className="text-primary-violet">Project</a></li>
              <li><a href="" className="text-primary-violet">Contact us</a></li>
              <Image src="/../public/assets/Subtract.png" width={27} height={27}/>
            </ul>
          </nav>

          <div className="bg-primary-white h-screen flex items-center justify-center col-span-3">

            <div className="it-gall-title text-center flex flex-col w-2/5">

              <h2 className="text-primary-violet font-bold text-4xl mb-9">
                What is <span className="font-normal">IT</span>GALL?
              </h2>

              <p className="text-primary-violet text-lg">
                <span className="font-bold">ITGALL</span> is a Living lab network managed by SG spread along all the Galicia geography, combining capabilities for testing solutions within the <span className="font-bold">healthcare, social care</span> and <span className="font-bold">onehealth sectors</span>
              </p>

              <div className="button-box mt-14 flex gap-5 justify-center">
                <Button text="View More" bgColor="primary-white" borderColor="primary-violet" color="primary-violet" />
                <Button text="Watch Video" bgColor="primary-violet" borderColor="primary-violet" color="primary-white" />
              </div>
              
            </div>

          </div>

          <ScrollPoints />
          
        </section>
    )
    
}

export default GallSection