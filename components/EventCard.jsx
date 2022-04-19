import Image from 'next/image'
import Arrow from "../components/Arrow"

const EventCard = ({date, title, info, url}) => {

    return (
        <div className="relative border-2 border-[#37044E/50] row-span-1 col-span-1 p-5 pb-[4rem] h-64 lg:h-72 mt-16 flex flex-col justify-between">
            <div className="img-container absolute -top-[63px] -left-[1px]">
              <Image src={url} width={100} height={100}/>
            </div>

            <div>
                <span className="mb-[2rem] block text-right text-[#37044E]">{date}</span>
                <h3 className="text-[#37044E] text-lg font-bold">{title}</h3>
                <p className="text-[#37044E] my-2 text-[.9rem]">{info}</p>
            </div>
            

            <a href="#" className="font-bold text-[#37044E] mt-4 block">
              Learn More
              <Arrow rotation="rotate(45deg)" />
            </a>
        </div>
    )
}

export default EventCard