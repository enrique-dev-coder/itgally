import React, {Fragment, useState, useEffect} from 'react'
import Head from 'next/head'
import Navbar from "../../components/Navbar"
import EventCard from "../../components/EventCard"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import FadeInElement from "../../components/FadeInElement"

const events = () => {

    const apiURL = 'https://blog.itgall.tech/wp-json/wp/v2/posts';
    
    const [posts, setPosts] = useState()

    const fetchApi = async () => {
      const response = await fetch(apiURL)

      const responseJSON = await response.json()

      setPosts(responseJSON)
      console.log(responseJSON)

      responseJSON.map(res => {
        console.log(res.title.rendered.replace('&#038;', '&'))
        console.log(res.excerpt.rendered.replace('<p>', ''))
      })
    }


    useEffect(() => {

        fetchApi()

    }, [])

  return (
    <Fragment>
      <Head>
        <title>IT GALL</title>
        <link rel="icon" href="/Group-1-_5_.ico" />
      </Head>

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
        <div className="flex flex-col px-[1.5rem] py-[4rem] gap-[2rem] sm:px-[4rem] lg:grid lg:grid-cols-3 2xl:gap-[4rem] 2xl:px-[10rem]">

          { posts &&
            posts.map(post => <EventCard 
              title={post.title.rendered.replace('&#038;', '&')} 
              info={post.excerpt.rendered.replace('<p>', '').replace('[&hellip;]</p>', '').replace('&#038;', '&')} 
              link={post.link}
              display='hidden'
              key={post.id}/>)
          }

        </div>
      </FadeInElement>

      <Contact 
      h3Styles="text-[#8C1D82] font-bold text-xl mb-6" 
      pStyles="text-[#8C1D82]" 
      aStyles="text-[#8C1D82] ml-[.5rem]" 
      />
  </div>
    </Fragment>
  
  )
}

export default events