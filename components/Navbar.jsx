import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="border-y border-primary-violet py-[.5rem] col-span-3 bg-white flex justify-center sticky top-0 z-40">
            <ul className="list-none justify-center lg:flex gap-5 mr-5 hidden">
              <li><a href="" className="text-primary-violet">Our Network</a></li>
              <li><a href="" className="text-primary-violet">New Events</a></li>
              <li><a href="" className="text-primary-violet">Project</a></li>
              <li><a href="" className="text-primary-violet">Contact us</a></li>
            </ul>
            <div className="mr-10 block lg:hidden">
              <Image src="/../public/assets/vector 238.png" width={28} height={23}/>
            </div>
            <Image src="/../public/assets/Subtract.png" width={27} height={27}/>
          </nav>
    )
}

export default Navbar