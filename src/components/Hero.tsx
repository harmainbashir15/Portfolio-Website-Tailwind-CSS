import Navbar from './Navbar'
import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile2.png)] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[85px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Harmain</p>
            <p data-aos="zoom-in-up">Bashir</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
