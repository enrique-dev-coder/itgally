const NetworkModal = ({title, children}) => {
    return (
        <div className="w-full border pb-[3rem]">
            <span className="block p-[1.5rem] pl-[2.5rem] border-b-[1px] border-[#FCFCFC]">{title}</span>

            <div className="grid grid-cols-2">
                {children}
            </div>
        </div>
    )
}

export default NetworkModal