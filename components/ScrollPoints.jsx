import Circle from "../components/atoms/Circle"
import {Link} from "react-scroll"

const ScrollPoints = ({top = "45%", headerView, gallSectionView, projectsView, eventsView}) => {
    
    const scrollClass = {
        position: "absolute",
        right: "2%",
        top
    }

    return (
        <div style={scrollClass} className="flex flex-col gap-[25px] items-center z-20">

            <Link to="header" smooth={true} duration={1000}>
                <div className={`xl:transform xl:scale-125 ${headerView ? "active-view" : "no-view"}`}>
                    <img src="assets/Vector.png" alt="" className="w-full h-full" />
                </div>
            </Link>
            
            <Link to="gallSection" smooth={true} duration={1000}>
                <Circle height="7px" width="8px" bgColor="#37044E" view={gallSectionView} />
            </Link>
            
            <Link to="projects" smooth={true} duration={1000}>
                <Circle height="7px" width="8px" bgColor="#37044E" view={projectsView} />
            </Link>

            <Link to="events" smooth={true} duration={1000}>
                <Circle height="7px" width="8px" bgColor="#37044E" view={eventsView} />
            </Link>
          </div>
    )
}

export default ScrollPoints