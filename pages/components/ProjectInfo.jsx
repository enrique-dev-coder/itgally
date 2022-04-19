import Reat from "react"

const ProjectInfo = ({title, info}) => {
  return (
    <div className="border-t-2 border-slate-400 shrink">
      <h2 className="font-bold mt-4 text-[#37044E]">{title}</h2>
      <p className="mt-4">{info}</p>
      <a href="#" className="font-bold text-[#37044E] mt-4 block">
        Learn More
        <span className="w-[.7rem] h-[.7rem] inline-block border-[#37044E] border-solid border-t-[2px] border-r-[2px] transition-all transform rotate-45 ml-1"></span>
      </a>
    </div>
  )
}

export default ProjectInfo