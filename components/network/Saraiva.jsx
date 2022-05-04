import NetworkModal from "../atoms/NetworkModal"

const Saraiva = () => {
    return (
        <NetworkModal title="Saraiva" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p className="text-primary-violet">
                    At Saraiva we have a line of innovation that we want to promote and thus improve the solutions that are going to be marketed with our clients.
                </p>

                <div className="w-[149px] h-[70px]" >
                    <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Lucia Saborido Piñeiro <br />
                    Director <br />
                    <br />
                    luciasaborido@saraiva.es <br />
                    www.saraivasenior.es
                </p>
            </div>

            <video src="/assets/network/saraiva.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 m-auto" controls autoPlay></video>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Lucia Saborido Piñeiro <br />
                Director <br />
                <br />
                luciasaborido@saraiva.es <br />
                www.saraivasenior.es
            </p>
        </NetworkModal>
    )
}

export default Saraiva