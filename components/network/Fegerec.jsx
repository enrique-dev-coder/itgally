import NetworkModal from "../atoms/NetworkModal"

const Fegerec = () => {
    return (
        <NetworkModal title="Fegerec" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll" >
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p className="text-primary-violet">
                    Fegerec is an entity of the third socio-health sector whose main objective is to improve knowledge of RES, as well as to treat, care for and accompany people who suffer from them before and after diagnosis and throughout their life cycle. We base our strength on the union of many people and entities.
                </p>

                <div className="hidden lg:block w-[135px] h-[40px]" >
                    <img src="/assets/logo-fegerec.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Teléfonos: 981 234 651 / 691 011 855 <br />
                    <br />
                    fegerec@cofc.es <br />
                    <a href="https://fegerec.es/" target="_blank" rel="noopener noreferrer">fegerec.es</a>
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767244/itgall/Fegerec_jx8fy6.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem] mx-auto" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[135px] h-[40px]" >
                <img src="/assets/logo-fegerec.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Teléfonos: 981 234 651 / 691 011 855 <br />
                <br />
                fegerec@cofc.es <br />
                <a href="https://fegerec.es/" target="_blank" rel="noopener noreferrer">fegerec.es</a>
            </p>
        </NetworkModal>
    )
}

export default Fegerec