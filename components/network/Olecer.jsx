import NetworkModal from "../atoms/NetworkModal"

const Olecer = () => {
    return (
        <NetworkModal title="Olecer">
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p>
                    We are a residential home with 20 beds and for 2 years we have incorporated the pillar of innovation in management and technology into our vision.

                </p>

                <div className="w-[157px] h-[72px]" >
                    <img src="/assets/logo-olecer.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Francisco Abelardo Lamilla Curros <br />
                    Innovation Director <br />
                    <br />
                    innovacion@olecer.com <br />
                    www.olecer.com
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Olecer