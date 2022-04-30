import Button from "../components/atoms/Button"
import Arrow from "../components/atoms/Arrow"

const Network = () => {
    return (
        <div className="px-[2.5rem] py-[4rem] lg:pr-[4rem] lg:pl-[2rem] xl:pr-[8rem] xl:pl-[4rem]">

            <div className="flex flex-col mb-[2rem]">

                <div className="flex justify-between mb-[1rem]">

                    <h2 className="text-primary-violet text-[1.35rem] md:text-3xl font-bold z-10">Our Network</h2>

                    <div className="box-btn hidden lg:flex gap-[30px]">

                        <Button text="Network" borderColor="#37044E" bgColor="#37044E" color="#FFF8FE"/>

                        <Button text="Partners" bgColor="#B75F9F" borderColor="#B75F9F" color="#FFF8FE" />

                    </div>

                </div>

                <div className="grid grid-cols-2">
                    <p className="col-span-1 text-primary-violet">
                        CSG develops a model based on clinical excellence, R&amp;D&amp;i, digital transformation and the development of technology - based products whose purposed is the well - being of the person.
                    </p>
                </div>
            </div>

            <div className="mapadiv h-[300px] w-4/5 mr-auto pr-[9rem] bg-gray-100 overflow-hidden">
                
            </div>

            <div className="flex flex-col gap-8 mt-[1.5rem]">
                <h2 className="">Discover Living Labs</h2>
                <div className="flex gap-5">
                    <Button text="All cities" bgColor="#FCF4FB" borderColor="#8C1D82" color="#8C1D82" mL="0" display="flex" gap="8px" width="fit-content">
                        <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
                    </Button>

                    <Button text="All sectors" bgColor="#FCF4FB" borderColor="#8C1D82" color="#8C1D82" mL="0" display="flex" gap="8px" width="fit-content">
                        <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
                    </Button>

                    <Button text="Networks" bgColor="#FCF4FB" borderColor="#8C1D82" color="#8C1D82" mL="0" display="flex" gap="8px" width="fit-content">
                        <Arrow rotation="rotate(135deg)" width=".5rem" height=".5rem" />
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default Network