import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Separator from '../assets/images/separator.svg'
import Button from './button'

const about = () => (
  <div className="relative overflow-hidden pt-11">
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

    <div className="px-4 relative z-30 flex flex-wrap items-center justify-center text-center">
      <h2 className="text-gray text-lg mb-80 text-center uppercase font-medium tracking-widest">
        От 9 до 5 не съществува
      </h2>
      <div className="mt-auto">
        <h3 className="mb-11">
          <span className="block mb-1 text-gray text-lg text-center uppercase font-medium tracking-widest">
            Само
          </span>
          <span className="block text-primary text-5xl font-bold  uppercase">
            сериозните
          </span>
          <span className="block text-white text-5xl font-bold  uppercase">
            остават
          </span>
        </h3>
        <Button className="mb-11" to="##">
          Още за нас
        </Button>
        <Separator className="text-white block mx-auto" />
      </div>
    </div>
  </div>
)

export default about
