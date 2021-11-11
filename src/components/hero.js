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
        className="absolute block object-cover h-full w-full top-0 left-0 brightness-50"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="100"
      />
      <StaticImage
        className="absolute block object-cover h-full w-full top-0 left-0"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="100"
        style={{
          clipPath: `url('#logo-path')`,
        }}
        // style={{
        //   clipPath: `path(
        //     'M211.3,0h44.1l-65.9,94.2h44.1h30.2h5.9v71.3h-36.2v-35.1h-69.4h-44.1L211.3,0 M0,221.9h129.5l25.3-36.2H69.5	l6.8-9.6l25.3-36.2l6.8-9.6l2.8-5.4l2.2-5.6l1.7-5.8l1.1-5.9l0.6-6l0-6l-0.6-6l-1.1-5.9l-1.7-5.8l-2.2-5.6l-2.7-5.4l-3.3-5.2 l-3.8-4.8l-4.2-4.4l-4.6-4l-5-3.6l-5.3-3.1l-5.6-2.6l-6.5-2.1l-6.6-1.6l-6.7-1l-6.8-0.5l-6.8,0.1L36.7,35L30,36.2l-6.6,1.7L17,40.2	l-6.2,2.8l-6,3.3v39.2l4.4-3.6l4.8-3.2l5-2.7l5.3-2.2l5.5-1.7l5.6-1.2l5.7-0.6l5.7-0.1l5.7,0.4l5.6,1l5.5,1.5l3.7,1.9l3.4,2.4l3,2.9	l2.5,3.3l2,3.6l1.4,3.9l0.8,4.1l0.2,4.1l-0.4,4.1l-1,4l-1.6,3.8l-13.4,19.2l-6.7,9.6l-25.3,36.2l-6.8,9.6L0,221.9'
        //   )`,
        // }}
      />
      <LogoPath />

      <div className="absolute z-30 h-full w-full top-0 py-20 left-0 flex flex-wrap flex-col justify-center items-center px-4">
        <TwentyFourSeven className="px-4" />
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
