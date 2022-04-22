const Circle = ({text, bgColor, height, width, position, left, right}) => {

    const circleStyles = {
        height,
        width,
        backgroundColor: bgColor,
        position,
        left,
        right,
    }

    return (
        <div style={circleStyles} className="flex justify-center items-center rounded-[50%] mt-[.5rem] xl:transform xl:scale-125">
            <a href="#" className="no-underline text-white text-sm md:text-base">{text}</a>
        </div>
    )
}

export default Circle