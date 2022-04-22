import Arrow from "./atoms/Arrow"

const EventCard = ({date, title, info, url}) => {

    return (
        <div className="relative border-[1px] border-[#37044E] mt-[4rem] pb-[2rem] lg:h-auto lg:mt-0

        row-span-1 col-span-1 p-5 md:mt-16 flex flex-col justify-between z-10">
            <div className="img-container absolute -top-[40px] -left-[1px] w-[100px] h-[100px]">
              <img src={url} className="w-full h-full" />
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