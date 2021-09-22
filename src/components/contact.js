import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Obfuscate from 'react-obfuscate'
import Separator from '../assets/images/separator.svg'
import Button from './button'
import Bus from '../assets/images/transportation/bus.svg'
import Tram from '../assets/images/transportation/tram.svg'
import Subway from '../assets/images/transportation/subway.svg'

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
    <div className="relative overflow-hidden">
      <StaticImage
        alt="Black grid background"
        className="absolute block top-0 left-0 w-full"
        layout="fullWidth"
        src="../assets/images/black-grid-bgr.png"
        quality="100"
      />
      <div className="px-4 pt-5 relative z-30 flex flex-wrap items-center justify-center text-center">
        <Separator className="mb-6" />
        {/* Contact heading */}
        {contactHeading && (
          <h2 className="text-primary text-2xl text-center uppercase font-bold mb-12">
            {contactHeading}
          </h2>
        )}

        {/* Transportation */}
        {transportation && (
          <div className="mb-8 flex flex-wrap flex-col">
            {transportation.map(({ icon, transport }, index) => (
              <div
                className="flex flex-wrap flex-row items-center justify-start mb-6"
                key={index}
              >
                <div className="text-center w-16 flex flex-wrap mr-4 items-center justify-center">
                  {icons[icon] && React.createElement(icons[icon])}
                </div>
                <div className="flex-1 text-white text-left text-base">
                  {transport}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Maps url */}
        {googleMapsLink && (
          <div className="flex flex-wrap justify-center items-center mb-16">
            <Button target={googleMapsLink.target} to={googleMapsLink.url}>
              {googleMapsLink.title}
            </Button>
          </div>
        )}

        {/* Adress */}
        {address && (
          <div className="mb-6 leading-5">
            {address.location && (
              <div className="text-white text-xl font-bold">
                {address.location}
              </div>
            )}
            {address.additionalInformation && (
              <div className="text-white">{address.additionalInformation}</div>
            )}
          </div>
        )}

        {/* Phone and email */}
        {phoneNumber && (
          <Obfuscate
            className="font-bold text-4xl text-white mb-12"
            tel={phoneNumber}
          />
        )}
        {emailAddress && (
          <Obfuscate
            className="text-2xl uppercase font-bold text-white mb-12"
            email={emailAddress}
            headers={{
              subject: 'Съобщение от FitFactory 24/7',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Contact
