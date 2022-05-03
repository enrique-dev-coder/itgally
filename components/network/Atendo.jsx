import NetworkModal from "../atoms/NetworkModal"

const Atendo = () => {
    return (
        <NetworkModal title="Atendo">
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p>
                    We are professionals who accompany the care of the elderly and their families. We are committed to a significant change in care for the elderly so that they remain in their homes as long as possible, offering specialized care and respecting personal autonomy. Living a longer life does not mean losing control of it, even despite the limitations, and at Atendo we help people feel more independent, safer, healthier and more connected to society. Our services begin at home and continue with Day Centers, Memory Units, Recovery Units, Intergenerational Centers, Housing with services and small centers for the elderly.

                    We would like to participate in this test because we believe that the challenges that lie ahead cannot be resolved by an institution and we need the participation of everyone. And above all, because it is time to put people at the center of processes as the main point of reference, it is the only way to bring useful and effective products and services to the market. An innovation with purpose.

                </p>

                <div className="w-[143px] h-[39px]" >
                    <img src="/assets/logo-atendo.png" alt="" className="w-full h-full" />
                </div>

                <p>
                    Luis Barrios Rios <br />
                    CEO <br />
                    <br />
                    l.barros @atendo.es <br />
                    www.atendo.es
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default Atendo