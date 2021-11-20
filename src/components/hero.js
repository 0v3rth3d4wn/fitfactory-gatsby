import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Button from './button'
import TwentyFourSeven from '../assets/images/hero-247.svg'
import LogoPath from './logo-path'

// Hero data graphql
const heroQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      hero {
        hero {
          heading
          cta {
            target
            title
            url
          }
        }
      }
    }
  }
`

const Hero = () => {
  // Get hero heading and CTA button
  const {
    wpPage: {
      hero: {
        hero: { heading },
      },
    },
    wpPage: {
      hero: {
        hero: { cta },
      },
    },
  } = useStaticQuery(heroQuery)

  return (
    <div className="h-screen bg-black text-white pt-[4.5rem] relative">
      <StaticImage
        className="absolute block object-cover h-full w-full inset-0 brightness-50"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="100"
        style={{ position: 'absolute' }}
      />
      {/* <StaticImage
        className="absolute block object-cover h-full w-full inset-0"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="100"
        style={{ position: 'absolute' }}
      /> */}

      <div className="absolute z-30 w-full top-8 py-20 left-0 flex flex-wrap flex-col justify-center items-center px-4">
        <TwentyFourSeven className="px-8 sm:w-[600px]" />
      </div>

      <div className="absolute z-30 h-full w-full top-0 left-0 flex flex-wrap flex-col justify-end items-center px-4">
        {/* CTA Button */}
        {cta && (
          <Button to={cta.url} className="mb-6">
            {cta.title}
          </Button>
        )}

        {/* Hero heading */}
        {heading && (
          <h1 className="text-gray tracking-widest text-center text-base uppercase font-semibold mb-9">
            {heading}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Hero
