import ScrollPoints from "../components/ScrollPoints"
import { useInView } from "react-intersection-observer"
import Button from "../components/atoms/Button"
import Arrow from "../components/atoms/Arrow"
import FadeInElement from "../components/FadeInElement"
import NetworkLogos from "../components/network/NetworkLogos"
import NetworkBtn from "../components/network/NetworkBtn"
import NetworkMap from "../components/network/NetworkMap"
import Partners from "../components/partners/Partners"
import { useState} from "react"
import { Link as Scroll } from "react-scroll"

const Network = () => {

    const { ref, inView } = useInView()

    const [city, setCity] = useState({
        coruna: false,
        barcelona: false,
        galicia: false,
        madrid: false,
        pontevedra: false,
        vigo: false,
        allCities: true
    })

    const [network, setNetwork] = useState({
        afaga: false,
        ategal: false,
        atendo: false,
        cruz: false,
        domus: false,
        olecer: false,
        saraiva: false,
        fegerec: false
    })

    const [btnControl, setBtnControl] = useState(false)

    let currentCity

    if (city.coruna) {
        currentCity = "A Coruña"
    } else if (city.barcelona) {
        currentCity = "Barcelona"
    }  else if (city.galicia) {
        currentCity = "Galicia"
    } else if (city.madrid) {
        currentCity = "Madrid"
    } else if (city.pontevedra) {
        currentCity = "Pontevedra"
    } else if (city.vigo) {
        currentCity = "Vigo"
    } else if (city.allCities) {
        currentCity = "All cities"
    }

    return (
        <FadeInElement>
            <div className="px-[2.5rem] py-[4rem] lg:pr-[4rem] lg:pl-[2rem] xl:pl-[4rem] relative" ref={ref} id="network">

            <div className="flex flex-col mb-[2rem]">

                <div className="flex justify-between mb-[1rem]">

                    <h2 className="text-primary-violet text-[1.35rem] md:text-3xl font-bold z-10">Our Network</h2>

                    <Scroll to='map' smooth={true} duration={1000}>
                        <Button text="Learn More" borderColor="#8C1D82" bgColor="#8C1D82" color="#FFF8FE" moreStyles="hidden lg:block"/>
                    </Scroll>
                    

                </div>

                <div className="grid grid-cols-2">
                    <p className="col-span-2 lg:col-span-1 text-primary-violet">
                        CSG develops a model based on clinical excellence, R&amp;D&amp;i, digital transformation and the development of technology - based products whose purposed is the well - being of the person.
                    </p>
                </div>
            </div>

            {/* ml-[2%]  w-full mr-auto md:w-4/5***/}
            <div className="w-4/5 ml-auto mr-[2%] h-[200px] sm:h-[250px] lg:h-[300px] md:mr-auto relative opacity-75 overflow-hidden">
                <NetworkMap city={city} setCity={setCity} setNetwork={setNetwork} setBtnControl={setBtnControl} />
            </div>

            <div className="flex flex-col gap-8 mt-[1.5rem]">
                <h2 className="text-primary-violet">Discover ITGALL Living Labs</h2>

                <div className="flex gap-5" id='map'>

                    <div className={`flex flex-col relative z-30 mr-[1rem] ${city.vigo && 'pr-[1rem]'}`}>
                        <button className="flex items-center gap-[8px] bg-[#FCF4FB] border-[#8C1D82] text-[#8C1D82] ml-0 w-fit border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => setBtnControl(true)}>
                            <span>{currentCity}</span>
                            <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
                        </button>
                        {
                            btnControl && 
                            <NetworkBtn setCity={setCity} setNetwork={setNetwork} setBtnControl={setBtnControl} />        
                        }
                    </div>

                </div>

                <NetworkLogos city={city} network={network} setNetwork={setNetwork} />
            </div>

            <Partners />

            <ScrollPoints networkView={inView} top="25%"/>
        </div>
        </FadeInElement>
        
        
    )
}

export default Network