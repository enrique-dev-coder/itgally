import Arrow from "./Arrow"

const ProjectInfo = ({title, info}) => {
  return (
    <div className="border-t-2 border-slate-400 shrink">
      <h2 className="font-bold mt-4 text-[#37044E]">{title}</h2>
      <p className="mt-4">{info}</p>
      <a href="#" className="font-bold text-[#37044E] mt-4 block">
        Learn More
        <Arrow rotation="rotate(45deg)" />
      </a>
    </div>
  )
}

export default ProjectInfo