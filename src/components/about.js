import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Separator from '../assets/images/separator.svg'
import Button from './button'

const about = () => (
  <div className="relative overflow-hidden pt-11 sm:pt-24 about-area">
    <StaticImage
      alt="Black grid background"
      className="absolute block inset-0 w-full h-full sm:hidden"
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
      className="absolute hidden sm:block inset-0 w-full h-full"
      layout="fullWidth"
      src="../assets/images/backgrounds/about-large-bgr.jpg"
      loading="eager"
      quality="75"
      breakpoints={[750, 1080, 2560]}
      objectPosition="center center"
      style={{ position: 'absolute' }}
    />

    <div className="px-4 mx-auto max-w-7xl relative z-30 flex flex-wrap items-center justify-center ">
      <h2 className="text-gray text-lg mb-80 text-center uppercase font-medium tracking-widest sm:text-white sm:text-5xl sm:font-bold sm:text-left sm:tracking-normal sm:w-full">
        От 9 до 5 не съществува
      </h2>
      <div className="mt-auto text-center sm:text-right sm:w-full">
        <h3 className="mb-11">
          <span className="block mb-1 text-gray text-lg uppercase font-medium tracking-widest sm:text-white sm:text-5xl sm:tracking-normal sm:font-bold">
            Само
          </span>
          <span className="block text-primary text-5xl font-bold  uppercase sm:inline-block sm:mr-4">
            сериозните
          </span>
          <span className="block text-white text-5xl font-bold  uppercase sm:inline-block sm:text-primary">
            остават
          </span>
        </h3>
        <Button className="mb-11 sm:mb-24" to="##">
          Още за нас
        </Button>
        <Separator className="text-white block mx-auto sm:hidden" />
      </div>
    </div>
  </div>
)

export default about
