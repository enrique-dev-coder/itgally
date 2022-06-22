import Link from 'next/link'
import { Fragment } from "react"
import Logo from "./Logo"

const SecondHeader = ({children, text, title, imgURL, headerSize = "h-[25vh]"}) => {
    return (
        <div className={`grid relative bg-primary-white place-content-center overflow-hidden ${headerSize}`} >
            <Link href="/">
                <a className="cursor-pointer">
                    <Logo logoClass="absolute w-[120px] h-[40px] top-[5%] left-[8%] z-10" />
                </a>
            </Link>

            <div className={`z-10 ${imgURL && "w-[250px] h-[70px] sm:w-[320px] sm:h-[90px] sm:w-[370px]"}`}>
                {
                    imgURL? <img src={imgURL} alt="" className="w-full h-full" />
                    : <Fragment>
                            <h1 className='z-10 text-primary-violet font-bold text-[1.35rem] md:text-[1.6rem] md:tracking-widest'>{title}</h1>
                            {text && <p>{text}</p>}
                    </Fragment>
                }
            </div>

            {children}
        </div >
    )
}

export default SecondHeader