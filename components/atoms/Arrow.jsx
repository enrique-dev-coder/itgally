const Arrow = ({rotation, width = ".7rem", height = ".7rem", mR}) => {

    const arrowRotation = {
        transform: rotation,
        width,
        height,
        marginRight: mR
    }

    return (
        <span style={arrowRotation} className="inline-block border-[#37044E] border-solid border-t-[2px] border-r-[2px] transition-all transform ml-1"></span>
    )
}

export default Arrow