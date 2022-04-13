import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { useWindowHeight } from '@react-hook/window-size'
import { stripHtml } from 'string-strip-html'
import clsx from 'clsx'
import ScrollDown from '../assets/images/scroll-down.svg'

import Button from './Button'

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
    <div className="relative pt-[4.5rem] h-screen text-white bg-black">
      {/* Base bg xs */}
      <StaticImage
        className="block object-cover absolute inset-0 w-full h-full sm:hidden"
        src="../assets/images/backgrounds/hero/hero-base-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="85"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'absolute' }}
      />

      {/* Base bg sm and up */}
      <StaticImage
        className="hidden object-cover absolute inset-0 w-full h-full sm:block"
        src="../assets/images/backgrounds/hero/hero-base-large-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="85"
        breakpoints={[750, 1080, 1920, 2560]}
        style={{ position: 'absolute' }}
      />

      {/* Top bg xs */}
      <StaticImage
        className="block object-cover absolute inset-0 w-full h-full sm:hidden"
        src="../assets/images/backgrounds/hero/hero-top-bgr.jpg"
        alt="FitFactory 24/7 hero image overlay with logo"
        layout="fullWidth"
        loading="eager"
        quality="85"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'absolute' }}
      />

      {/* Top bg sm and up */}
      <StaticImage
        className="hidden object-cover absolute inset-0 w-full h-full sm:block"
        src="../assets/images/backgrounds/hero/hero-top-large-bgr.jpg"
        alt="FitFactory 24/7 hero image base"
        layout="fullWidth"
        loading="eager"
        quality="85"
        breakpoints={[750, 1080, 1920, 2560]}
        style={{ position: 'absolute' }}
      />

      <div className="absolute inset-0 mx-auto h-full sm:max-w-7xl">
        {/* Headline is only visible on sm and up and split on 3 lines */}
        {headline && (
          <div className="hidden absolute top-0 left-0 z-30 flex-col flex-wrap justify-end items-start px-12 pb-24 w-full h-full sm:w-1/2 md:flex">
            {headline
              .split('<br />')
              .map(line => stripHtml(line).result)
              .map((row, index) => (
                <div
                  key={index}
                  className={clsx(
                    'uppercase',
                    index === 0 && 'text-5xl font-bold text-white',
                    index === 1 && 'text-5xl font-bold text-primary',
                    index > 1 && 'text-lg font-medium tracking-widest text-gray'
                  )}
                >
                  {row}
                </div>
              ))}
          </div>
        )}
        <ScrollDown className="hidden absolute bottom-11 left-1/2 text-primary -translate-x-1/2 md:block" />
        <div className="flex absolute top-0 left-0 z-30 flex-col flex-wrap justify-end items-center px-4 w-full h-full md:right-0 md:left-auto md:items-end md:px-12 md:pb-28 md:w-1/2">
          {/* CTA Button */}
          {cta && (
            <Button to={cta.url} className="mb-11 sm:order-2 sm:mb-0">
              {cta.title}
            </Button>
          )}

          {/* Hero heading */}
          {heading && (
            <h1 className="mb-11 text-lg font-medium tracking-widest text-center text-gray uppercase sm:order-1 sm:mb-2">
              {heading}
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
