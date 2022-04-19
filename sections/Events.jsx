import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/Button"
import EventCard from "../components/EventCard"

const Events = () => {
    return (
        <section className="news-and-events h-screen grid grid-rows-3 gap-x-20 grid-cols-3 p-16 pr-[8rem] relative">

          <div className="flex items-center col-span-3 justify-between">
            <h2 className="text-[#37044E] font-bold text-3xl">News and events</h2>

            <div className="box-btn">

            <Button text="Learn More" bgColor="#FFF8FE" borderColor="#37044E" color="#37044E"/>

            <Button text="Contact us" bgColor="#37044E" borderColor="#37044E" color="#FFF8FE"/>

            </div>

          </div>

          <EventCard date="15th July 2021" title="Projects selecting for testing under IN4AHA / Focus group"  info="Developing a Decalogue of values of technologies with purpose" url="/../public/assets/Rectangle 57.png"/>
          <EventCard date="14th of May 2021" title="IN4AHA Open Call &amp; Finalists" info="Five projects to achieve active and healthy ageing were selected for testing." url="/../public/assets/Rectangle 55.png" />
          <EventCard date="15th February 2021" title="Participation of CSG within IN4AHA" info="Kick-off of the H2020 CSA project IN-4-AHA : a result of joining the dots back in 2017." url="/../public/assets/Rectangle 53.png"/>

          <ScrollPoints top="35%" />
        </section>
    )
}

export default Events