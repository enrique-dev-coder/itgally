import { Fragment } from "react"

const GallInfo = ({title, url1, url2, text1, text2, aStyles, show = false}) => {

    return (
        <div className="mb-[3rem] md:border-l-[0.5px] border-[#FFD000] md:pl-12 lg:mb-0 lg:mr-[2rem] xl:mr-0">
                <h3 className='text-[#8C1D82] font-bold text-xl mb-6'>{title}</h3>

                <div className="flex mb-6 w-full h-[23px]">
                    {
                        show ?
                        <a href="https://www.linkedin.com/company/cluster-saude-de-galicia/" target='_blank' className="flex">
                            <img src={url1} alt="" />
                            <p className={aStyles}>{text1}</p>
                        </a> :
                        <Fragment>
                            <img src={url1} alt="" />
                            <p className={aStyles}>{text1}</p>
                        </Fragment>
                    }
                </div>

                <div className="flex w-full h-[23px]">
                    {
                        show ?
                        <a href="https://clustersaude.com/" target='_blank' className="flex">
                            <img src={url2} alt="" />
                            <p className={aStyles}>{text2}</p>
                        </a> :
                        <Fragment>
                            <img src={url2} alt="" />
                            <p className={aStyles}>{text2}</p>
                        </Fragment>
                    }
                </div>
        </div>
    )
}

export default GallInfo