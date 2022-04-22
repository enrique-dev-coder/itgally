const GallInfo = ({title, url1, url2, text1, text2}) => {
    return (
        <div className="md:border-l-[0.5px] border-[#FFD000] md:pl-12 lg:mr-[2rem] xl:mr-0">
                <h3 className='text-[#8C1D82] font-bold text-xl mb-6'>{title}</h3>

                <div className="flex mb-6 w-[21px] h-[21px]">
                    <img src={url1} className="w-full h-full" alt="" />
                    <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text1}</a>
                </div>

                <div className="flex w-[21px] h-[21px]">
                    <img src={url2} className="w-full h-full" alt="" />
                    <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text2}</a>
                </div>

        </div>
    )
}

export default GallInfo