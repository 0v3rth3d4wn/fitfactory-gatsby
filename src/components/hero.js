import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { useWindowHeight } from '@react-hook/window-size'
import { stripHtml } from 'string-strip-html'
import ScrollDown from '../assets/images/scroll-down.svg'

import Button from './button'

// Hero data graphql
const heroQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      hero {
        hero {
          heading
          headline
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
        hero: { heading, headline },
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
      {/* Base bg xs */}
      <StaticImage
        className="absolute block object-cover h-full w-full inset-0 sm:hidden"
        src="../assets/images/backgrounds/hero/hero-base-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="100"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'absolute' }}
      />

      {/* Base bg sm and up */}
      <StaticImage
        className="absolute sm:block object-cover h-full w-full inset-0 hidden"
        src="../assets/images/backgrounds/hero/hero-base-large-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="100"
        breakpoints={[750, 1080, 1920, 2560]}
        style={{ position: 'absolute' }}
      />

      {/* Top bg xs */}
      <StaticImage
        className="absolute block object-cover h-full w-full inset-0 sm:hidden"
        src="../assets/images/backgrounds/hero/hero-top-bgr.jpg"
        alt="FitFactory 24/7 hero image overlay with logo"
        layout="fullWidth"
        loading="eager"
        quality="100"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'absolute' }}
      />

      {/* Top bg sm and up */}
      <StaticImage
        className="absolute sm:block object-cover h-full w-full inset-0 hidden"
        src="../assets/images/backgrounds/hero/hero-top-large-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="100"
        breakpoints={[750, 1080, 1920, 2560]}
        style={{ position: 'absolute' }}
      />

      <div className="absolute h-full mx-auto sm:max-w-7xl inset-0">
        {/* Headline is only visible on sm and up and split on 3 lines */}
        {headline && (
          <div className="hidden sm:flex absolute z-30 h-full w-full sm:w-1/2 top-0 left-0 flex-wrap flex-col justify-end items-start px-12 pb-24">
            {headline
              .split('<br />')
              .map(line => stripHtml(line).result)
              .map((row, index) => {
                let headlineClasses = 'text-5xl font-bold'

                if (index === 0) {
                  headlineClasses = `${headlineClasses} text-white`
                } else if (index === 1) {
                  headlineClasses = `${headlineClasses} text-primary`
                } else {
                  headlineClasses = `text-lg text-gray tracking-widest font-medium`
                }

                return (
                  <div key={index} className={`${headlineClasses} uppercase`}>
                    {row}
                  </div>
                )
              })}
          </div>
        )}
        <ScrollDown className="hidden sm:block text-primary absolute left-1/2 -translate-x-1/2 bottom-11" />
        <div className="absolute z-30 h-full w-full sm:w-1/2 sm:items-end sm:left-auto sm:right-0 top-0 left-0 flex flex-wrap flex-col justify-end items-center px-4 sm:px-12 sm:pb-28">
          {/* CTA Button */}
          {cta && (
            <Button to={cta.url} className="mb-11 sm:order-2 sm:mb-0">
              {cta.title}
            </Button>
          )}

          {/* Hero heading */}
          {heading && (
            <h1 className="text-gray tracking-widest text-center text-lg uppercase font-medium mb-11 sm:order-1 sm:mb-2">
              {heading}
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
