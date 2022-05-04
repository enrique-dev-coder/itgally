const NetworkModal = ({title, children, modalClass}) => {
    return (
        <div className={` ${modalClass} shadow-2xl scrollbar `}>
            <span className="block p-[1.5rem] pl-[2.5rem] border-b border-slate-200 font-bold text-primary-violet text-[1.2rem]">{title}</span>

            <div className="grid grid-cols-2 gap-[2.25rem] lg:gap-0">
                {children}
            </div>
        </div>
    )
}

export default NetworkModal