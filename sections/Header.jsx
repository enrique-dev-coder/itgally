import ScrollPoints from "../components/ScrollPoints"
import Circle from "../components/Circle"
import Image from 'next/image'

const Header = () => {

    return (
        <section className="header relative grid grid-cols-4 lg:grid-cols-3">
          <div className="w-full block pl-20 pt-1">
            <Image src="/../public/assets/Logo.png" width={150} height={50}/>
          </div>

          <div className="absolute -top-[10px]">
            <Image src="/../public/assets/_itgall LOGOS-04.png" width={300} height={630}/>
          </div>

          <div className="h-screen grid place-content-center md:col-span-2 lg:col-span-1">

            <div className="w-full">
              <h1 className="text-4xl text-primary-violet font-bold text-center">TECH FOR PEOPLE</h1>
              <p className="text-primary-violet tracking-[.1rem] text-3xl">YOUR LIVING LAB NETWORK</p>
              
              <div className="circles flex justify-center mt-5 gap-5">

                <div className="circle-box-left transform rotate-[13deg] mr-[.5rem]">
                  <Circle bgColor="#37044E" height="20px" width="20px" position="relative" left="1.5rem"/>
                  <Circle bgColor="#37044E" height="35px" width="35px" />
                  <Circle bgColor="#37044E" height="20px" width="20px" position="relative" left="1.5rem"/>
                </div>

                <div className="circle-box flex">
                  <Circle text="ABOUT US" bgColor="#37044E" height="150px" width="150px" position="relative" left="1rem"/>
                  <Circle text="OUR OFFER" bgColor="#FFD000" height="150px" width="150px"/>
                </div>

                <div className="circle-box-right pt-[5rem] transform rotate-[21deg] ml-[20px]">
                  <Circle bgColor="#FFD000" height="20px" width="20px" position="relative" right="1rem"/>
                  <Circle bgColor="#FFD000" height="35px" width="35px" />
                  <Circle bgColor="#FFD000" height="20px" width="20px" position="relative" right="1rem"/>
                </div>

                <div className="absolute right-[0] -bottom-[5px] ">
                  <Image src="/../public/assets/image 137.png" width={490} height={313}/>
                </div>
                
              </div>

            </div>

          </div>

          <ScrollPoints />

    </section>
    )
    
}

export default Header