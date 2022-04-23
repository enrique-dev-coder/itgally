import Circle from "../components/atoms/Circle"

const ScrollPoints = ({top = "45%", headerView, gallSectionView, projectsView, eventsView}) => {
    
    const scrollClass = {
        position: "absolute",
        right: "2%",
        top
    }

    return (
        <div style={scrollClass} className="flex flex-col gap-[25px] items-center">
            <div className={`xl:transform xl:scale-125 ${headerView? "active-view": "no-view"}`}>
                <img src="assets/Vector.png" alt="" className="w-full h-full" />
            </div>
            <Circle height="7px" width="8px" bgColor="#37044E" view={gallSectionView}/>
            <Circle height="7px" width="8px" bgColor="#37044E" view={projectsView} />
            <Circle height="7px" width="8px" bgColor="#37044E" view={eventsView}/>
          </div>
    )
}

export default ScrollPoints