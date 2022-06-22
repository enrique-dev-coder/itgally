import NetworkModal from "../atoms/NetworkModal"

const Saraiva = () => {
    return (
        <NetworkModal title="Saraiva" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p className="text-primary-violet">
                   Saraiva is a company with more than 15 years of experience that provides services to the elderly in all stages of aging, from prevention to dependency care services.
Our methodology is based on the PCC, housing model and significant activities and we are a reference in our aging sector.
A key in our work is innovation and continuous improvement, which is why we participate in research projects with universities and in European projects in the field of health and ageing.
                </p>

                <div className="w-[129px] h-[62px]" >
                    <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Lucia Saborido <br />
                    CEO Saraiva <br />
                    <br />
                    luciasaborido@saraiva.es <br />
                    <a href="https://www.saraivasenior.es" target="_blank" rel="noopener noreferrer">www.saraivasenior.es</a>
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767257/itgall/Saraiva_mnhyji.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem] mx-auto" controls autoPlay></video>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Lucia Saborido <br />
                CEO Saraiva <br />
                <br />
                luciasaborido@saraiva.es <br />
                <a href="https://www.saraivasenior.es" target="_blank" rel="noopener noreferrer">www.saraivasenior.es</a>
            </p>
        </NetworkModal>
    )
}

export default Saraiva