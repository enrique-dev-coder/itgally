import ScrollPoints from "../components/ScrollPoints"
import Button from "../components/atoms/Button"
import EventCard from "../components/EventCard"
import { useInView } from "react-intersection-observer"
import FadeInElement from "../components/FadeInElement"

const Events = () => {

  const {ref, inView} = useInView({
    threshold: 0.25
  })

    return (
      <FadeInElement>
        <section className="news-and-events lg:grid lg:gap-x-[2rem] lg:grid-cols-3 px-[2.5rem] py-[4rem] relative lg:mb-[1rem] lg:pr-[4.5rem] xl:pr-[8rem] xl:pl-[4rem] " ref={ref} id="events">

          <div className="flex md:items-center lg:col-span-3 lg:justify-between lg:mb-[5rem]">
            <h2 className="text-[#63257E] font-bold text-3xl">News and events</h2>

            <div className="box-btn hidden lg:flex gap-[30px] relative left-[6%]">

              <Button text="Learn More" borderColor="#8C1D82" color="#8C1D82" />

              <Button text="Contact us" bgColor="#8C1D82" borderColor="#8C1D82" color="#FFF8FE" />

            </div>

          </div>

          <EventCard date="15th July 2021" title="Projects selecting for testing under IN4AHA / Focus group" info="Developing a Decalogue of values of technologies with purpose" url="assets/Rectangle 57.png" />
          <EventCard date="14th of May 2021" title="IN4AHA Open Call &amp; Finalists" info="Five projects to achieve active and healthy ageing were selected for testing." url="assets/Rectangle 55.png" />
          <EventCard date="15th February 2021" title="Participation of CSG within IN4AHA" info="Kick-off of the H2020 CSA project IN-4-AHA : a result of joining the dots back in 2017." url="assets/Rectangle 53.png" />

          <div className="box-btn mt-[2rem] flex justify-between lg:hidden">

            <Button text="Learn More" borderColor="#8C1D82" color="#8C1D82" />

            <Button text="Contact us" bgColor="#8C1D82" borderColor="#8C1D82" color="#FFF8FE" />

          </div>

          <div className="absolute top-[62%] right-0 w-[228px] h-[351px] sm:top-[60%] lg:top-[42%]">
            <img src="assets/Ellipse 3 (1).png" className="w-full h-full" />
          </div>

          <ScrollPoints top="35%" eventsView={inView} />
        </section>
      </FadeInElement>
        
    )
}

export default Events