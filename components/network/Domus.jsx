import NetworkModal from "../atoms/NetworkModal"

const Domus = () => {
    return (
        <NetworkModal title="Domus">
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p>
                    The DomusVi Group has managed to position itself in recent years as a leader in healthcare for people, with a presence in all the communities of the Spanish geography. Its growth in the management of Centers and Services has been progressive and sustainable, currently having more than 23,000 employees.
                    DomusVi offers the most specialized care for the elderly and mental health in the country. It manages more than 25,000 places in 201 residences for the elderly, care for the disabled and mental health and day care centers. In addition, it provides home care through its specialized home care units (24,305 users of the home help service and 32,774 users of the Telecare Service).


                    DomusVi considers Research, Development and Innovation activities as one of the pillars of its strategy and is aware of the importance of promoting and developing all the necessary actions in R&amp;D&amp;i. The company's R&amp;D strategy is aimed at actions that improve customer service, thus intervening in everything that can contribute to an improvement in customer service and satisfaction.

                    These actions will have the necessary tools, processes, and programs that allow an improvement in the levels of intervention and provision of the service by professionals through a specific implementation.

                    <span className="font-bold block">The objectives established in the strategy are:</span>

                    <ul className="list-disc pl-[2rem] pt-[1rem] my-[1rem]">
                        <li>Align all R&amp;D&amp;i actions with the specific needs of the Business units, with particular relevance in obtaining new products or services and supporting them, or in improving existing ones.</li>
                        <li>Establish the mechanisms to identify and disseminate innovations, carrying out knowledge management that allows their implementation throughout the Group.</li>
                        <li>Promote the innovative spirit and promote and encourage the generation and proposal of innovative ideas.</li>
                        <li>Instrument research tasks with Universities and other public and private research centers.</li>
                        <li>Carry out innovative proposals with other Private Entities at a European level, through the development of added value projects that are directly applicable.</li>
                    </ul>

                </p>

                <div className="w-[138px] h-[76px]" >
                    <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Roberto González Novas <br />
                    R&amp;D&amp;i Director <br />
                    <br />
                    rgonzalez@domusvi.es <br />
                    www.domusvi.es
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Domus