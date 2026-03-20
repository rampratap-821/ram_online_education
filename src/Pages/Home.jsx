import React from 'react'
import HeroSection from '../Home/HeroSection'
import LinkImageData from '../Home/LinkImageData'
import Courses from '../Home/PopularCoures'
import Values from '../Home/Value'
import Events from '../Home/Events'
import OurPrograms from '../Home/OurProgram'
import LatestNews from '../Home/LatestNews'
import Logo from '../Home/Logo'
import WhatPeopleSay from '../Home/WhatPeopleSay'
import Subscribe from '../Home/Subcribe'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LinkImageData/>
      <Courses/>
      <Values/>
      <Events/>
      <OurPrograms/>
      <LatestNews/>
      <Logo/>
      <WhatPeopleSay/>
      <Subscribe/>
    </div>
  )
}

export default Home
