const ScrollPoints = ({top = "45%"}) => {
    
    const scrollClass = {
        position: "absolute",
        right: "2%",
        top
    }

    return (
        <div style={scrollClass}>
            <div>Scroll Points</div>
          </div>
    )
}

export default ScrollPoints