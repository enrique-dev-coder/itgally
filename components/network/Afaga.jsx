import NetworkModal from "../atoms/NetworkModal"

const Afaga = () => {
    return (
        <NetworkModal title="Afaga Alzheimer" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll" >
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <h2 className="font-bold text-primary-violet">AFAGA Alzheimer basically develops three main lines of intervention:</h2>

                <ul className=" list-disc pl-[2rem]">
                    <li className="text-primary-violet">Therapeutic stimulation for people with dementia (300 users).</li>
                    <li className="text-primary-violet">Programs for the prevention of cognitive deterioration in people over 60 years of age (250 users).</li>
                    <li className="text-primary-violet">Multidisciplinary intervention with the family and coexistence environment of people with dementia (800 users).</li>
                </ul>

                <p className="text-primary-violet">
                    At AFAGA Alzheimer we believe that intervention in people with dementia requires the involvement of all of society as a whole in order to improve their quality of life and that of their environment. To this end, we make available to the research community a significant sample of people with dementia categorized following current scientific standards and our human team to test and develop new intervention solutions.
                </p>

                <div className="hidden lg:block w-[189px] h-[101px]" >
                    <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Iván Rarís Filgueira <br />
                    Project Manager <br />
                    <br />
                    d.juridico@afaga.com <br />
                    <a href="https://www.afaga.com" target="_blank" rel="noopener noreferrer">www.afaga.com</a>
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767251/itgall/Afaga_efagdl.mov" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem]" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[189px] h-[101px]" >
                <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Iván Rarís Filgueira <br />
                Project Manager <br />
                <br />
                d.juridico@afaga.com <br />
                <a href="https://www.afaga.com" target="_blank" rel="noopener noreferrer">www.afaga.com</a>
            </p>
        </NetworkModal>
    )
}

export default Afaga