import { Fragment } from "react"
import Logo from "./Logo"

const SecondHeader = ({children, text, title, imgURL, headerSize = "h-[25vh]"}) => {
    return (
        <div className={`grid relative bg-primary-white place-content-center overflow-hidden ${headerSize}`} >
            <Logo logoClass="absolute w-[120px] h-[40px] top-[5%] left-[8%] z-10" />

            <div className={`z-10 ${imgURL && "w-[250px] h-[70px] lg:w-[350px] lg:h-[80px]"}`}>
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