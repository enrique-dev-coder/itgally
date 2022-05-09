import { useInView } from "react-intersection-observer"
import ScrollPoints from "../components/ScrollPoints"
import Circle from "../components/atoms/Circle"
import Logo from "../components/atoms/Logo"
import {Link} from "react-scroll"

const Header = () => {

    const {ref, inView} = useInView()

    return (
      <section className="header relative grid grid-cols-2 overflow-hidden" ref={ref} id="header">

          <Logo logoClass="absolute w-[125px] h-[40px] top-[5%] left-[8%] md:w-[156px] md:h-[51px] md:top-0 md:pl-20 lg:w-[150px] lg:h-[50px] md:pt-1 md:col-span-2 md:pl-2"/>

        <div className="absolute w-[550px] h-[550px] -left-[75%] top-[7%] animate-spin-slow sm:-left-[44%] sm:top-[5%] sm:w-[664px] sm:h-[667px] md:top-[4%] md:-left-[29%] lg:top-[2%] lg:-left-[31%] xl:-left-[25%] 2xl:-left-[22%]">
          <img src="/assets/_itgall LOGOS-04.png" className="w-full h-full" />
          </div>

          <div className="h-screen grid place-content-center col-span-2 pt-[5rem]">

            <div className="w-full flex flex-col items-center">

              <div className="">
                <h1 className="text-3xl md:text-4xl text-primary-violet font-bold text-center">TECH FOR PEOPLE</h1>
                <p className="text-primary-violet leading-[1.7rem] px-[3rem] text-[1.4rem] md:text-3xl text-center">YOUR LIVING LAB NETWORK</p>
              </div>

              <div className="circles flex justify-center mt-16 lg:mt-5 xsm:gap-5">

                <div className="circle-box-left transform rotate-[21deg] pr-[1rem] xl:pr-[2rem]">
                  <Circle bgColor="#37044E" height="10px" width="10px" position="relative" left="2rem"/>
                  <Circle bgColor="#37044E" height="20px" width="20px" position="relative" left="1rem" />
                  <Circle bgColor="#37044E" height="10px" width="10px" position="relative" left="2rem"/>
                </div>

                <div className="circle-box flex xl:gap-[20px]">
                  <Link to="gallSection" smooth={true} duration={1000}>
                    <Circle text="ABOUT US" bgColor="#37044E" height="100px" width="100px" position="relative" left=".2rem" />
                  </Link>
                  <Link to="network" smooth={true} duration={1000}>
                    <Circle text="OUR OFFER" bgColor="#FFD000" height="100px" width="100px"/>
                  </Link>
                </div>

                <div className="circle-box-right pt-[5rem] pl-[1rem] rotate-[21deg] xl:ml-[10px]">
                  <Circle bgColor="#FFD000" height="10px" width="10px" position="relative" right="1.5rem"/>
                  <Circle bgColor="#FFD000" height="20px" width="20px" position="relative" right="1rem"/>
                  <Circle bgColor="#FFD000" height="10px" width="10px" position="relative" right="1.5rem"/>
                </div>

                <div className="absolute right-[0] -bottom-[5px] w-[320px] h-[220px] hidden lg:block xl:w-[490px] xl:h-[313px]">
                  <img src="/assets/image 137.png" className="w-full h-full" />
                </div>
                
              </div>

              <div className="w-[12px] h-[31px]">
                <img src="/assets/Vector 202.png" alt="" className="w-full h-full" />
              </div>

            </div>

          </div>

          <ScrollPoints headerView={inView}/>

    </section>
    )
    
}

export default Header