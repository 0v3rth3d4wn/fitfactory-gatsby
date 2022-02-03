import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { stripHtml } from 'string-strip-html'
import Separator from '../assets/images/separator.svg'
import Button from './Button'

const aboutQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      about {
        about {
          cta {
            target
            title
            url
          }
          heading
          headline
        }
      }
    }
  }
`

const About = () => {
  const {
    wpPage: {
      about: {
        about: { heading, headline, cta },
      },
    },
  } = useStaticQuery(aboutQuery)

  return (
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

      <div className="flex relative z-30 flex-wrap justify-center items-center px-4 mx-auto max-w-7xl md:px-12">
        {heading && (
          <h2 className="mb-80 text-lg font-medium tracking-widest text-center text-gray uppercase sm:w-full sm:text-5xl sm:font-bold sm:tracking-normal sm:text-left sm:text-white">
            {heading}
          </h2>
        )}

        <div className="mt-auto text-center sm:w-full sm:text-right">
          {headline && (
            <h3 className="mb-11">
              {headline
                .split('<br />')
                .map(line => stripHtml(line).result)
                .map((row, index) => {
                  let headlineClasses =
                    'block text-5xl font-bold text-white uppercase sm:inline-block sm:text-primary'

                  if (index === 0) {
                    headlineClasses =
                      'block mb-1 text-lg font-medium tracking-widest text-gray uppercase sm:text-5xl sm:font-bold sm:tracking-normal sm:text-white'
                  } else if (index === 1) {
                    headlineClasses =
                      'block text-5xl font-bold text-primary uppercase sm:inline-block sm:mr-4'
                  }
                  return (
                    <span key={index} className={headlineClasses}>
                      {row}
                    </span>
                  )
                })}
            </h3>
          )}
          {cta && cta.title && cta.url && (
            <Button className="mb-11 sm:mb-24" to={cta.url}>
              {cta.title}
            </Button>
          )}

          <Separator className="block mx-auto text-white sm:hidden" />
        </div>
      </div>
    </div>
  )
}

export default About
