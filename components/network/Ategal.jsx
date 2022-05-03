import NetworkModal from "../atoms/NetworkModal"

const Ategal = () => {
    return (
        <NetworkModal title="Ategal" >
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p>
                    Training center for the elderly with more than 40 years of experience in Galicia. More than 10 years testing products and services for the elderly, we are a link between companies and the elderly.
                </p>

                <div className="w-[148px] h-[69px]" >
                    <img src="/assets/logo-ategal.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Paula Sande Nieto <br />
                    Vicepresident <br />
                    <br />
                    administracion@ategal.com <br />
                    www.ategal.com
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Ategal