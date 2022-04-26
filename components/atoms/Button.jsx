const Button = ({display, gap, width, text, color, borderColor, bgColor,mL, mR = "0", children, modal = false, address = "#"}) => {

    const showModal = () => {
        window.localStorage.setItem("modal", "true")
    }

    const buttonClass = {
        backgroundColor: bgColor,
        borderColor,
        color,
        marginLeft: mL,
        marginRight: mR,
        display,
        gap,
        width
    }

    return (
        <button style={buttonClass} className={` ${display === "flex"? "items-center": ""} border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer`} onClick={modal? showModal : ""}>
            <a href={address}>{text}</a>
            {children}
        </button>
    )
}

export default Button