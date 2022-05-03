const NetworkModal = ({title, children}) => {
    return (
        <div className="w-full border pb-[3rem] h-[450px] overflow-scroll">
            <span className="block p-[1.5rem] pl-[2.5rem] border-b border-slate-200">{title}</span>

            <div className="grid grid-cols-2">
                {children}
            </div>
        </div>
    )
}

export default NetworkModal