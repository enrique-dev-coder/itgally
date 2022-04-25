const Circle = ({text = "", bgColor, height, width, position, left, right, view}) => {

    const circleStyles = {
        height,
        width,
        backgroundColor: bgColor,
        position,
        left,
        right,
    }

    return (
        view ? <div className={"active-view"}>
            <div style={circleStyles} className="block rounded-[50%] xl:transform xl:scale-125"></div>
        </div> 
        : <div style={circleStyles} className="flex justify-center items-center rounded-[50%] mt-[.5rem] xl:transform xl:scale-125 no-view">
            <a href="#" className="no-underline text-white text-sm md:text-base">{text}</a>
        </div>
    )
}

export default Circle