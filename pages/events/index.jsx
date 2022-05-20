import React, {useEffect} from 'react'
import Navbar from "../../components/Navbar"
import EventCard from "../../components/EventCard"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import FadeInElement from "../../components/FadeInElement"

const events = () => {

    const apiURL = 'https://blog.itgall.tech';
    //const apiURL = 'https://malvestida.com';


    useEffect(() => {

        fetch(`${apiURL}/wp-json/wp/v2/posts`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

  return (
  <div className='xl:container xl:mx-auto'>

      <SecondHeader title="News &amp; events">
        <div className="absolute top-[30%] left-[20%] w-[35px] h-[35px] hidden md:block">
          <img src="/assets/Layer 27.png" className="w-full h-full" />
        </div>

        <div className="absolute top-[58%] left-[70%] w-[55px] h-[55px]">
          <img src="/assets/Layer 31.png" className="w-full h-full" />
        </div>

        <div className="absolute top-[10%] left-[29%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] md:left-[35%] md:-top-[5%] xl:-top-[15] xl:left-[40%]">
          <img src="/assets/Ellipse 5.png" className="w-full h-full" />
        </div>
      </SecondHeader>

      <Navbar show={false}/>


      <FadeInElement>
        <div className="flex flex-col px-[1.5rem] py-[4rem] gap-[2rem] sm:px-[4rem] lg:flex-row 2xl:gap-[4rem] 2xl:px-[10rem]">

          <EventCard 
          date="15th July 2021" 
          title="Projects selecting for testing under IN4AHA / Focus group" 
          info="Developing a Decalogue of values of technologies with purpose" 
          url="assets/Rectangle 57.png" />
          <EventCard 
          date="14th of May 2021" 
          title="IN4AHA Open Call &amp; Finalists" 
          info="Five projects to achieve active and healthy ageing were selected for testing." 
          url="assets/Rectangle 55.png" />
          <EventCard 
          date="15th February 2021" 
          title="Participation of CSG within IN4AHA" 
          info="Kick-off of the H2020 CSA project IN-4-AHA : a result of joining the dots back in 2017." 
          url="assets/Rectangle 53.png" />

        </div>
      </FadeInElement>

      <Contact 
      h3Styles="text-[#8C1D82] font-bold text-[1.3rem] mb-6" 
      pStyles="text-[#8C1D82] text-[1.2rem]" 
      aStyles="text-[#8C1D82] ml-[.5rem] text-[1.2rem] lg:text-[1rem]" 
      />
  </div>
  )
}

export default events