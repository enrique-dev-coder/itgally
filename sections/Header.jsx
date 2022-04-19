import ScrollPoints from "../components/ScrollPoints"
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

            <div>
              <h1 className="text-3xl text-[#37044E] font-bold text-center">TECH FOR PEOPLE</h1>
              <p className="text-[#37044E] tracking-[.1rem] text-xl">YOUR LIVING LAB NETWORK</p>
            </div>

          </div>

          <ScrollPoints />

    </section>
    )
    
}

export default Header