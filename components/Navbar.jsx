import { useInView } from "react-intersection-observer"
import Logo from "../components/atoms/Logo"

const Navbar = () => {

    const {ref, inView} = useInView({
      threshold: 1,
    }) 

    return (
        <nav className="border-y border-primary-violet py-[.5rem] col-span-3 bg-white flex justify-center sticky top-0 z-40 items-center" ref={ref}>
            {inView? <Logo logoClass="h-[20px] w-[80px] relative -left-[21%]" />: ""}
            <ul className={`list-none justify-center lg:flex gap-[2.25rem] mr-5 hidden ${inView? "relative -left-[3%]": "" }`}>
              <li><a href="" className="text-primary-violet">Our Network</a></li>
              <li><a href="" className="text-primary-violet">New Events</a></li>
              <li><a href="" className="text-primary-violet">Project</a></li>
              <li><a href="" className="text-primary-violet">Contact us</a></li>
            </ul>
            <div className="mr-10 block lg:hidden w-[28px] h-[23px]">
              <img src="assets/vector 238.png" className='w-full h-full' />
            </div>
            <div className={`w-[27px] h-[27px] ${inView? "relative -left-[2%]": "" }`}>
              <img src="assets/Subtract.png" className='w-full h-full' />
            </div>
          </nav>
    )
}

export default Navbar