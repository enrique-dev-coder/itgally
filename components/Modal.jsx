import {Link} from "react-scroll"

const Modal = () => {

    const hideModal = () => {
        window.localStorage.setItem("modal", "false")
    }

    return (
        <div className={`w-4/5 p-[1rem] left-[10%] top-[20%] md:p-[2rem] lg:w-3/5 absolute lg:left-[19%] lg:top-[6%] xl:p-[4rem] flex flex-col gap-5 bg-gradient-to-r from-white/75 drop-shadow`}>

            <Link to="gallSection" smooth={true} duration={1000} className="ml-auto">
                <button onClick={hideModal}>
                    <img src="assets/Vector 205.png" alt="" />
                </button>
            </Link>
            
            <video src="assets/presentación ITGALL_2.mp4" autoplay controls loop></video>
        </div>
    )
}

export default Modal