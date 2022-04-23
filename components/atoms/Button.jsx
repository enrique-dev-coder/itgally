const Button = ({display, gap, text, color, borderColor, bgColor,mL, mR = "0", children}) => {

    // mL = "1.75rem"

    const buttonClass = {
        backgroundColor: bgColor,
        borderColor,
        color,
        marginLeft: mL,
        marginRight: mR,
        display,
        gap
    }

    return (
        <button style={buttonClass} className={` ${display === "flex"? "items-center": ""} border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer`}>
            <a href="#our-network">{text}</a>
            {children}
        </button>
    )
}

export default Button