import NetworkModal from "../atoms/NetworkModal"

const Atendo = () => {
    return (
        <NetworkModal title="Atendo" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p className="text-primary-violet">
                    We are professionals who accompany the care of the elderly and their families. We are committed to a significant change in care for the elderly so that they remain in their homes as long as possible, offering specialized care and respecting personal autonomy. Living a longer life does not mean losing control of it, even despite the limitations, and at Atendo we help people feel more independent, safer, healthier and more connected to society. Our services begin at home and continue with Day Centers, Memory Units, Recovery Units, Intergenerational Centers, Housing with services and small centers for the elderly.

                    We would like to participate in this test because we believe that the challenges that lie ahead cannot be resolved by an institution and we need the participation of everyone. And above all, because it is time to put people at the center of processes as the main point of reference, it is the only way to bring useful and effective products and services to the market. An innovation with purpose.

                </p>

                <div className="hidden lg:block w-[143px] h-[39px]" >
                    <img src="/assets/logo-atendo.svg" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Luis Barros Rios <br />
                    CEO <br />
                    <br />
                    l.barros@atendo.es <br />
                    <a href="https://www.atendo.es" target="_blank" rel="noopener noreferrer">www.atendo.es</a>
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767249/itgall/Atendo_ixqp7y.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem] mx-auto" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[143px] h-[39px]" >
                <img src="/assets/logo-atendo.svg" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Luis Barros Rios <br />
                CEO <br />
                <br />
                l.barros@atendo.es <br />
                <a href="https://www.atendo.es" target="_blank" rel="noopener noreferrer">www.atendo.es</a>
            </p>
        </NetworkModal>
    )
}

export default Atendo