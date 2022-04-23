const GallInfo = ({title, url1, url2, text1, text2}) => {
    return (
        <div className="mb-[3rem] md:border-l-[0.5px] border-[#FFD000] md:pl-12 lg:mb-0 lg:mr-[2rem] xl:mr-0">
                <h3 className='text-[#8C1D82] font-bold text-xl mb-6'>{title}</h3>

                <div className="flex mb-6 w-full h-[23px]">
                    <img src={url1} alt="" />
                    <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text1}</a>
                </div>

                <div className="flex w-full h-[23px]">
                    <img src={url2} alt="" />
                    <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text2}</a>
                </div>
        </div>
    )
}

export default GallInfo