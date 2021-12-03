import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../components/hero'
import Features from '../components/features'
import BusinessHours from '../components/business-hours'
import Contact from '../components/contact'
import About from '../components/about'

import '../styles/index.css'
import Address from '../components/Address'

const index = () => (
  <div className="">
    <Hero />
    <Features />
    <div className="index-bottom-area relative">
      <StaticImage
        alt="Contact area background"
        className="absolute hidden inset-0 w-full h-full sm:block"
        layout="fullWidth"
        src="../assets/images/backgrounds/contact-large-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      />
      <BusinessHours />
      <About />
      <Contact />
      <Address className="address-area sm:grid-cols-3 sm:grid sm:pt-16 hidden sm:relative sm:px-4 sm:mx-auto max-w-7xl" />
    </div>
  </div>
)

export default index
