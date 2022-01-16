import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../components/Hero'
import Features from '../components/Features'
import BusinessHours from '../components/BusinessHours'
import Contact from '../components/Contact'
import About from '../components/About'

import '../styles/index.css'
import Address from '../components/Address'

const index = () => (
  <div className="">
    <Hero />
    <Features />
    <div className="relative index-bottom-area">
      <StaticImage
        alt="Contact area background"
        className="hidden absolute inset-0 w-full h-full sm:block"
        layout="fullWidth"
        src="../assets/images/backgrounds/contact-large-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      />
      <BusinessHours />
      <About />
      <Contact />
      <Address className="hidden max-w-7xl sm:grid sm:relative sm:grid-cols-3 sm:px-4 sm:pt-16 sm:mx-auto address-area" />
    </div>
  </div>
)

export default index
