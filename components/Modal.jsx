const Modal = ({modal, setModal}) => {

    return (
        <div className={`w-full h-screen fixed top-0 bg-black/75 z-50 place-content-center 2xl:container ${modal? "flex" : "hidden"}`}>

            <div className="w-4/5 md:w-3/5 flex flex-col gap-10 items-center justify-center">
                <button className="text-[#8C1D82] font-bold text-[1.5rem] ml-auto" onClick={() => { setModal(false) }}>
                    X
                </button>

                <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1658514375/itgall/presentaci%C3%B3n_ITGAL_2_2_1_b6r1td.mp4" autoPlay controls loop></video>
            </div>

        </div>
    )
}

export default Modal