import React, {Fragment, useRef} from 'react'
import Head from 'next/head'
import Navbar from "../../components/Navbar"
import Contact from "../../sections/Contact"
import SecondHeader from "../../components/atoms/SecondHeader"
import FadeInElement from "../../components/FadeInElement"
import MapContact from '../../components/MapContact'
import emailjs from 'emailjs-com';

const contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmz4not', 'template_de2wk4k', form.current, 'as4ZJ8-eqHWY9oy46')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <Fragment>
      <Head>
        <title>IT GALL</title>
        <link rel="icon" href="/Group-1-_5_.ico" />
      </Head>

      <div className='xl:container xl:mx-auto'>

      <SecondHeader title="CONTACT US">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[1.5rem] py-[4rem] sm:px-[4rem] gap-[2rem] 2xl:gap-[4rem] 2xl:px-[10rem]">
          
          <form ref={form} onSubmit={sendEmail} className="col-span-1 flex flex-col gap-5">
            <h3 className='text-primary-violet text-2xl font-bold mb-[.5rem]'>How can we help you?</h3>

            <label>Name <span className='text-red-500'>*</span></label>
            <input type="text" name="from_name" id="from_name" placeholder='Eluney Posadas' className='block w-full border outline-0 p-[0.4rem]' required />

            <div className="flex gap-5 flex-col lg:flex-row">
              {/* WORK POSITION */}
              <label className='w-full lg:w-1/2'>Work position <span className='text-red-500'>*</span>
              <input 
                type="text" 
                name="work" 
                id="work" 
                placeholder='Diseñador' 
                className='block lg:inline-block mt-[1.25rem] border outline-0 p-[0.4rem] w-full'
                required />
              </label>

              {/* MAIL */}
              <label className='w-full lg:w-1/2'>Mail <span className='text-red-500'>*</span>
              <input 
                type="text" 
                name="mail" 
                id="mail" 
                placeholder='eluneyposadas@empresa.com' 
                className='block lg:inline-block mt-[1.25rem] border outline-0 p-[0.4rem] w-full' 
                required />
              </label>
            </div>

            <div className="flex gap-5 flex-col lg:flex-row">
              <label className='w-full lg:w-1/2'>City
              <input type="text" name="city" id="city" placeholder='Galicia' className='block lg:inline-block mt-[1.25rem] border outline-0 p-[0.4rem] w-full' />
              </label>

              <label className='w-full lg:w-1/2'>Phone
              <input type="text" name="phone" id="phone" placeholder='6058685275' className='block lg:inline-block mt-[1.25rem] border outline-0 p-[0.4rem] w-full' />
              </label>
            </div>

            <label>Message <span className='text-red-500'>*</span></label>
            <textarea name="message" id="message" cols="30" rows="5" className='outline-0 border p-[0.4rem]' required></textarea>

            <input type="submit" 
            value="Submit" 
            className="bg-[#8C1D82] text-[#FFF8FE] hover:contrast-50 transition w-2/5 border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" />
          </form>

           <MapContact style="col-span-1 h-[400px] lg:h-full" />

        </div>
      </FadeInElement>

      <Contact 
      h3Styles="text-[#8C1D82] font-bold text-xl mb-6" 
      pStyles="text-[#8C1D82]" 
      aStyles="text-[#8C1D82] ml-[.5rem]" 
      />
  </div>
    </Fragment>
  //text-[1.3rem] h3
  //text-[1.2rem] p
  //text-[1.2rem] lg:text-[1rem] a
  )
}

export default contact