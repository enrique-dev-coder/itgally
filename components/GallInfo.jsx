import Image from 'next/image'

const GallInfo = ({title, url1, url2, text1, text2}) => {
    return (
        <div className="border-l-[0.5px] border-[#FFD000] pl-12">
                <h3 className='text-[#8C1D82] font-bold text-xl mb-6'>{title}</h3>

                <span className="mb-6 block">
                <Image src={url1} width={21} height={21}/>
                <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text1}</a>
                </span>

                <span className="block">
                <Image src={url2} width={21} height={21}/>
                <a href="#" className='text-[#8C1D82] ml-[.5rem]'>{text2}</a>
                </span>

        </div>
    )
}

export default GallInfo