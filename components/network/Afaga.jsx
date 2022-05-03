import NetworkModal from "../atoms/NetworkModal"

const Afaga = () => {
    return (
        <NetworkModal title="Afaga Alzheimer" >
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <h2 className="font-bold">AFAGA Alzheimer basically develops three main lines of intervention:</h2>

                <ul className=" list-disc pl-[2rem]">
                    <li>Therapeutic stimulation for people with dementia (300 users).</li>
                    <li>Programs for the prevention of cognitive deterioration in people over 60 years of age (250 users).</li>
                    <li>Multidisciplinary intervention with the family and coexistence environment of people with dementia (800 users).</li>
                </ul>

                <p>
                    At AFAGA Alzheimer we believe that intervention in people with dementia requires the involvement of all of society as a whole in order to improve their quality of life and that of their environment. To this end, we make available to the research community a significant sample of people with dementia categorized following current scientific standards and our human team to test and develop new intervention solutions.
                </p>

                <div className="w-[189px] h-[101px]" >
                    <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Iván Rarís Filgueira <br />
                    Project Manager <br />
                    <br />
                    d.juridico@afaga.com <br />
                    www.afaga.com
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Afaga