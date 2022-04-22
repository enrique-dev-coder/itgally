const Logo = ({logoClass}) => {
    return (
    <div className={logoClass}> 
        <img src="assets/Logo.png" className="w-full h-full" />
    </div>)
}


{/* <div className={`${visible? "block": "hidden"} ${logoClass}`}></div> */}

export default Logo