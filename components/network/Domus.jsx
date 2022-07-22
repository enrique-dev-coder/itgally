import NetworkModal from "../atoms/NetworkModal"

const Domus = () => {
    return (
        <NetworkModal title="DomusVi" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p className="text-primary-violet">
                    The DomusVi Group has managed to position itself in recent years as a leader in healthcare for people, with a presence in all the communities of the Spanish geography. Its growth in the management of Centers and Services has been progressive and sustainable, currently having more than 27,000 employees.
                    DomusVi offers the most specialized care for the elderly and mental health in the country. It manages more than 25,000 places in 201 residences for the elderly, care for the disabled and mental health and day care centers. In addition, it provides home care through its specialized home care units (24,305 users of the home help service and 32,774 users of the Telecare Service).


                    DomusVi considers Research, Development and Innovation activities as one of the pillars of its strategy and is aware of the importance of promoting and developing all the necessary actions in R&amp;D&amp;i. The company's R&amp;D strategy is aimed at actions that improve customer service, thus intervening in everything that can contribute to an improvement in customer service and satisfaction.

                    These actions will have the necessary tools, processes, and programs that allow an improvement in the levels of intervention and provision of the service by professionals through a specific implementation.

                    <span className="font-bold block text-primary-violet">The objectives established in the strategy are:</span>

                    <ul className="list-disc pl-[2rem] pt-[1rem] my-[1rem]">
                        <li className="text-primary-violet">Align all R&amp;D&amp;i actions with the specific needs of the Business units, with particular relevance in obtaining new products or services and supporting them, or in improving existing ones.</li>
                        <li className="text-primary-violet">Establish the mechanisms to identify and disseminate innovations, carrying out knowledge management that allows their implementation throughout the Group.</li>
                        <li className="text-primary-violet">Promote the innovative spirit and promote and encourage the generation and proposal of innovative ideas.</li>
                        <li className="text-primary-violet">Instrument research tasks with Universities and other public and private research centers.</li>
                        <li className="text-primary-violet">Carry out innovative proposals with other Private Entities at a European level, through the development of added value projects that are directly applicable.</li>
                    </ul>

                </p>

                <div className="hidden lg:block w-[120px] h-[66px]" >
                    <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Roberto González Novas <br />
                    R&amp;D&amp;i Director <br />
                    <br />
                    rgonzalez@domusvi.es <br />
                    <a href="https://www.domusvi.es" target="_blank" rel="noopener noreferrer">www.domusvi.es</a> <br />
                    
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1658515334/itgall/Domus_Vi_1_zdozey.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem] mx-auto" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[120px] h-[66px]" >
                <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Roberto González Novas <br />
                R&amp;D&amp;i Director <br />
                <br />
                rgonzalez@domusvi.es <br />
                <a href="https://www.domusvi.es" target="_blank" rel="noopener noreferrer">www.domusvi.es</a> <br />
            </p>
        </NetworkModal>
    )
}

export default Domus