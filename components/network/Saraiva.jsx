import NetworkModal from "../atoms/NetworkModal"

const Saraiva = () => {
    return (
        <NetworkModal title="Saraiva">
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                <p>
                    At Saraiva we have a line of innovation that we want to promote and thus improve the solutions that are going to be marketed with our clients.
                </p>

                <div className="w-[149px] h-[70px]" >
                    <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Lucia Saborido Piñeiro <br />
                    Director <br />
                    <br />
                    luciasaborido@saraiva.es <br />
                    www.saraivasenior.es
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Saraiva