const Circle = ({text, bgColor, height, width, position, left, right}) => {

    const circleStyles = {
        height,
        width,
        backgroundColor: bgColor,
        position,
        left,
        right
    }

    return (
        <div style={circleStyles} className="flex justify-center items-center rounded-[50%] mt-[.5rem]">
            <a href="#" className="no-underline text-white">{text}</a>
        </div>
    )
}

export default Circle