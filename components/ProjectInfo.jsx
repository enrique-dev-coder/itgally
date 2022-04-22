import Arrow from "./Arrow"

const ProjectInfo = ({title, info, span}) => {

  const spanStyle = {
    gridColumn: span
  }
  return (
    <div style={spanStyle} className="border-t-[1px] border-[#37044E] flex-1 mb-[3rem] lg:mr-[1.5rem] md:flex-initial flex flex-col justify-between lg:justify-start">
      <h2 className="font-bold mt-4 text-[#37044E] sm:font-[1.3rem]">{title}</h2>
      <p className="mt-4 sm:text-[1.1rem]">{info}</p>
      <a href="#" className="font-bold text-[#37044E] mt-4 block sm:text-[1.1rem]">
        Learn More
        <Arrow rotation="rotate(45deg)" />
      </a>
    </div>
  )
}

export default ProjectInfo