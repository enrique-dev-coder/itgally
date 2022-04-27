import BtnArrow from "./atoms/BtnArrow"

const ProjectInfo = ({title, info, span, h2Styles, pStyles, aStyles, address = "#", btnText}) => {

  const spanStyle = {
    gridColumn: span
  }
  return (
    <div style={spanStyle} className="border-t-[1px] border-[#37044E] flex-1 mb-[3rem] lg:mr-[2.5rem] md:flex-initial flex flex-col justify-between lg:justify-start">
      <h2 className={`${h2Styles}`}>{title}</h2>
      <p className={`${pStyles}`}>{info}</p>
      <BtnArrow address={address} aStyles={aStyles} btnText={btnText} />      
    </div>
  )
}

export default ProjectInfo