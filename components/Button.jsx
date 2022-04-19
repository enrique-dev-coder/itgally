const Button = ({display, gap, text, color, borderColor, bgColor, mR = "0", mL = "1.75rem", children}) => {

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
        <button style={buttonClass} className="border py-2 px-7 cursor-pointer">
            <a href="#our-network">{text}</a>
            {children}
        </button>
    )
}

export default Button