import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Obfuscate from 'react-obfuscate'
import ReactHtmlParser from 'react-html-parser'
import Button from './Button'
import Bus from '../assets/images/transportation/bus.svg'
import Tram from '../assets/images/transportation/tram.svg'
import Subway from '../assets/images/transportation/subway.svg'
import Address from './Address'

// Get call data for the contact component + some info from the options
const contactQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      contact {
        contactHeading
        googleMapsLink {
          target
          title
          url
        }
        transportation {
          icon
          transport
        }
        address {
          location
          additionalInformation
        }
      }
    }
    wp {
      optionsPage {
        options {
          phoneNumber
          emailAddress
        }
      }
    }
  }
`

// Icons for each transport imported as SVG and used like a component
const icons = {
  bus: Bus,
  tram: Tram,
  subway: Subway,
}

const Contact = () => {
  const {
    wpPage: {
      contact: { contactHeading },
    },
    wpPage: {
      contact: { transportation },
    },
    wpPage: {
      contact: { googleMapsLink },
    },
    wpPage: {
      contact: { address },
    },
    wp: {
      optionsPage: {
        options: { emailAddress },
      },
    },
    wp: {
      optionsPage: {
        options: { phoneNumber },
      },
    },
  } = useStaticQuery(contactQuery)
  return (
    <div className="overflow-hidden relative contact-area">
      <StaticImage
        alt="Contact area background"
        className="block absolute inset-0 w-full h-full sm:hidden"
        layout="fullWidth"
        src="../assets/images/backgrounds/contact-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      />

      {/* <StaticImage
        alt="Contact area background"
        className="absolute hidden inset-0 w-full h-full"
        layout="fullWidth"
        src="../assets/images/backgrounds/business-hours-large-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      /> */}
      <div className="flex relative z-30 flex-col flex-wrap justify-center items-center px-4 pt-20 text-center md:place-content-start md:px-12 md:pr-4 lg:pr-12 contact-area-content">
        {/* Contact heading */}
        {contactHeading && (
          <h2 className="mb-12 text-lg font-medium tracking-widest text-center text-gray uppercase sm:mb-20">
            {contactHeading}
          </h2>
        )}

        {/* Transportation */}
        {transportation && (
          <div className="flex flex-col flex-wrap mb-8">
            {transportation.map(({ icon, transport }, index) => (
              <div
                className="flex flex-row flex-wrap justify-start items-center mb-6"
                key={index}
              >
                <div className="flex flex-wrap justify-center items-center mr-4 w-16 text-center">
                  {icons[icon] &&
                    React.createElement(icons[icon], {
                      className: 'text-gray sm:w-16 sm:h-16',
                    })}
                </div>
                <div className="flex-1 text-base text-left text-white sm:text-lg sm:font-medium sm:uppercase">
                  {ReactHtmlParser(transport)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Maps url */}
        {googleMapsLink && (
          <div className="flex flex-wrap justify-center items-center mb-16">
            <Button out target={googleMapsLink.target} to={googleMapsLink.url}>
              {googleMapsLink.title}
            </Button>
          </div>
        )}

        <Address className="flex flex-col flex-wrap md:hidden" />
      </div>
    </div>
  )
}

export default Contact
