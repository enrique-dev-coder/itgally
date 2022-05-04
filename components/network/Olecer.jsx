import NetworkModal from "../atoms/NetworkModal"

const Olecer = () => {
    return (
        <NetworkModal title="Olecer" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p className="text-primary-violet">
                    We are a residential home with 20 beds and for 2 years we have incorporated the pillar of innovation in management and technology into our vision.

                </p>

                <div className="w-[157px] h-[72px]" >
                    <img src="/assets/logo-olecer.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Francisco Abelardo Lamilla Curros <br />
                    Innovation Director <br />
                    <br />
                    innovacion@olecer.com <br />
                    www.olecer.com
                </p>
            </div>

            <video src="/assets/network/Olecer.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 m-auto" controls autoPlay></video>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Francisco Abelardo Lamilla Curros <br />
                Innovation Director <br />
                <br />
                innovacion@olecer.com <br />
                www.olecer.com
            </p>
        </NetworkModal>
    )
}

export default Olecer