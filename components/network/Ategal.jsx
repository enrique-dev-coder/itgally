import NetworkModal from "../atoms/NetworkModal"

const Ategal = () => {
    return (
        <NetworkModal title="Ategal" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll" >
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p className="text-primary-violet">
                    Training center for the elderly with more than 40 years of experience in Galicia. More than 10 years testing products and services for the elderly, we are a link between companies and the elderly.
                </p>

                <div className="hidden lg:block w-[148px] h-[69px]" >
                    <img src="/assets/logo-ategal.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Paula Sande Nieto <br />
                    Vicepresident <br />
                    <br />
                    administracion@ategal.com <br />
                    www.ategal.com
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767246/itgall/ategal_ujclfb.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 m-auto" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[148px] h-[69px]" >
                <img src="/assets/logo-ategal.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Paula Sande Nieto <br />
                Vicepresident <br />
                <br />
                administracion@ategal.com <br />
                www.ategal.com
            </p>
        </NetworkModal>
    )
}

export default Ategal