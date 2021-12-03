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
        alt="Contact area background"
        className="absolute block sm:hidden inset-0 w-full h-full"
        layout="fullWidth"
        src="../assets/images/backgrounds/contact-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      />

      <StaticImage
        alt="Contact area background"
        className="absolute hidden inset-0 w-full h-full sm:block"
        layout="fullWidth"
        src="../assets/images/backgrounds/contact-large-bgr.jpg"
        quality="75"
        objectPosition="bottom"
        style={{ position: 'absolute' }}
      />
      <div className="px-4 pt-12 relative z-30 flex flex-wrap items-center justify-center text-center">
        <Separator className="mb-6" />
        {/* Contact heading */}
        {contactHeading && (
          <h2 className="text-gray text-lg mb-12 text-center uppercase font-medium tracking-widest">
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
                  {icons[icon] &&
                    React.createElement(icons[icon], {
                      className: 'text-gray',
                    })}
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
            <Button out target={googleMapsLink.target} to={googleMapsLink.url}>
              {googleMapsLink.title}
            </Button>
          </div>
        )}

        {/* Adress */}
        {address && (
          <div className="mb-8">
            {address.location && (
              <div className="text-gray text-lg text-center uppercase font-bold">
                {address.location}
              </div>
            )}
            {address.additionalInformation && (
              <div className="text-gray text-base text-center">
                {address.additionalInformation}
              </div>
            )}
          </div>
        )}

        {/* Phone and email */}
        {phoneNumber && (
          <Obfuscate
            className="text-gray text-2xl mb-8 text-center uppercase font-bold"
            tel={phoneNumber}
          />
        )}
        {emailAddress && (
          <Obfuscate
            className="text-gray text-2xl mb-12 text-center uppercase font-bold"
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
