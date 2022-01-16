import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Separator from '../assets/images/separator.svg'
import Button from './Button'

const About = () => (
  <div className="overflow-hidden relative pt-11 sm:pt-24 about-area">
    <StaticImage
      alt="Black grid background"
      className="block absolute inset-0 w-full h-full sm:hidden"
      layout="fullWidth"
      src="../assets/images/backgrounds/about-bgr.jpg"
      loading="eager"
      quality="75"
      breakpoints={[480, 750, 1080]}
      objectPosition="center center"
      style={{ position: 'absolute' }}
    />
    <StaticImage
      alt="Black grid background"
      className="hidden absolute inset-0 w-full h-full sm:block"
      layout="fullWidth"
      src="../assets/images/backgrounds/about-large-bgr.jpg"
      loading="eager"
      quality="75"
      breakpoints={[750, 1080, 2560]}
      objectPosition="center center"
      style={{ position: 'absolute' }}
    />

    <div className="flex relative z-30 flex-wrap justify-center items-center px-4 mx-auto max-w-7xl">
      <h2 className="mb-80 text-lg font-medium tracking-widest text-center text-gray uppercase sm:w-full sm:text-5xl sm:font-bold sm:tracking-normal sm:text-left sm:text-white">
        От 9 до 5 не съществува
      </h2>
      <div className="mt-auto text-center sm:w-full sm:text-right">
        <h3 className="mb-11">
          <span className="block mb-1 text-lg font-medium tracking-widest text-gray uppercase sm:text-5xl sm:font-bold sm:tracking-normal sm:text-white">
            Само
          </span>
          <span className="block text-5xl font-bold text-primary uppercase sm:inline-block sm:mr-4">
            сериозните
          </span>
          <span className="block text-5xl font-bold text-white uppercase sm:inline-block sm:text-primary">
            остават
          </span>
        </h3>
        <Button className="mb-11 sm:mb-24" to="##">
          Още за нас
        </Button>
        <Separator className="block mx-auto text-white sm:hidden" />
      </div>
    </div>
  </div>
)

export default About
