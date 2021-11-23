import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { useWindowHeight } from '@react-hook/window-size'

import Button from './button'
import TwentyFourSeven from '../assets/images/hero-247.svg'

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
function setViewportProperty(doc) {
  let prevClientHeight
  const customVar = `--${'vh'}`
  function handleResize() {
    const { clientHeight } = doc
    if (clientHeight === prevClientHeight) return
    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty(customVar, `${clientHeight * 0.01}px`)
      prevClientHeight = clientHeight
    })
  }
  handleResize()
  return handleResize
}

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

  // Get window height
  const windowHeight = useWindowHeight()

  // Whenever window height changes, set the --vh css var to the window height
  useEffect(() => {
    setViewportProperty(document.documentElement)
  }, [windowHeight])

  return (
    <div className="h-screen bg-black text-white pt-[4.5rem] relative">
      <StaticImage
        className="absolute block object-cover h-full w-full inset-0 opacity-50"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="75"
        breakpoints={[480, 750, 1080, 1366, 1920]}
        style={{ position: 'absolute' }}
      />

      <StaticImage
        className="absolute block object-cover h-full w-full inset-0 opacity-50 blur-3xl"
        src="../assets/images/hero-bgr-bright.jpg"
        alt="FitFactory 24/7 hero"
        layout="fullWidth"
        loading="eager"
        quality="75"
        breakpoints={[480, 750, 1080, 1366, 1920]}
        style={{ position: 'absolute' }}
      />

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
