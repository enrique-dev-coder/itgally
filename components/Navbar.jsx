import Link from 'next/link'
import { Link as Scroll } from "react-scroll"
import { useInView } from "react-intersection-observer"
import {useState} from "react"
import Logo from "../components/atoms/Logo"
import Modal from "../components/Modal"

const Navbar = ({show = true}) => {

    const {ref, inView} = useInView({
      threshold: 1,
    })

    const [modal, setModal] = useState(false)

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="border-y border-primary-violet py-[.5rem] col-span-3 bg-white flex justify-center sticky top-0 z-40 items-center" ref={ref}>

            {inView && show? 
            <Scroll to="header" smooth={true} duration={1000} className="relative -left-[18%]" >
              <Logo logoClass="h-[40px] w-[125px] lg:w-[150px] lg:h-[48px]" />
            </Scroll>
            : ""}

            <ul className={`list-none justify-center gap-[2.25rem] mr-5 hidden lg:flex ${inView? "relative -left-[3%]": "" }`}>
              <li>
                {
                  show? 
                  <Scroll to="network" smooth={true} duration={1000} className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                    Our Network
                  </Scroll> : 
                  <Link href='/' className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                    <a className="text-primary-violet hover:text-[#8C1D82]">Our Network</a>
                  </Link> 
                }
                
              </li>
              <li>
                <Link href='/events' className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                  <a className="text-primary-violet hover:text-[#8C1D82]">New &amp; Events</a>
                </Link> 
              </li>
              <li>
                <Link href="/projects" className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                  <a className="text-primary-violet hover:text-[#8C1D82]">Project</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                  <a className="text-primary-violet hover:text-[#8C1D82]">Contact us</a>
                </Link> 
              </li>
            </ul>

            <div className={`mr-10 block lg:hidden w-[28px] cursor-pointer`} onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu? 
              <button className={`text-[#8C1D82] font-bold text-[1.5rem]`}>
                x
              </button>
              :<img src="/assets/Vector 238.png" className='w-full h-full' />
            }
            </div>

            {/* MENU MOBILE. SE MUESTRA AL PRESIONAR MENU HAMBURGUESA */}
            <ul className={`list-none absolute z-40 w-full left-0 text-center top-[100%] bg-white ${mobileMenu? "block" : "hidden"} lg:hidden`}>
              <li className='p-[1rem] border-primary-violet border-y'>
                {
                  show? 
                  <Scroll to="network" smooth={true} duration={1000} className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                    Our Network
                  </Scroll> : 
                  <Link href='/' className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                    <a className="text-primary-violet hover:text-[#8C1D82]">Our Network</a>
                  </Link> 
                }
              </li>
              <li className='p-[1rem] border-primary-violet border-b-[1px]'>
                <Link href="/events">
                  <a className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">New &amp; Events</a>
                </Link>
              </li>
              <li className='p-[1rem] border-primary-violet border-b-[1px]'>
                <Link href="/projects">
                  <a className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">Project</a>
                </Link>
              </li>
              <li className='p-[1rem] border-primary-violet border-b-[1px]'>
                <Link href="/contact" className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                  <a className="text-primary-violet hover:text-[#8C1D82]">Contact us</a>
                </Link>
              </li>
            </ul>

            <div className={`w-[27px] h-[27px] cursor-pointer ${inView ? "relative -left-[2%]" : ""}`} onClick={() => setModal(true)}>
              <img src="/assets/Subtract.png" className='w-full h-full' />
            </div>

            {modal && <Modal modal={modal} setModal={setModal} />}

          </nav>
    )
}

export default Navbar