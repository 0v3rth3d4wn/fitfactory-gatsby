import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Obfuscate from 'react-obfuscate'

// Get address data
const addressQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      contact {
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
const Address = ({ className = '' }) => {
  const {
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
  } = useStaticQuery(addressQuery)

  return (
    <div className={className}>
      {/* Adress */}
      {address && (
        <div className="mb-8">
          {address.location && (
            <div className="text-lg font-bold text-center text-gray uppercase">
              {address.location}
            </div>
          )}
          {address.additionalInformation && (
            <div className="text-base text-center text-gray">
              {address.additionalInformation}
            </div>
          )}
        </div>
      )}

      {/* Phone and email */}
      {phoneNumber && (
        <Obfuscate
          className="mb-8 text-2xl font-bold text-center text-gray uppercase"
          tel={phoneNumber}
        />
      )}
      {emailAddress && (
        <Obfuscate
          className="mb-12 text-2xl font-bold text-center text-gray uppercase"
          email={emailAddress}
          headers={{
            subject: 'Съобщение от FitFactory 24/7',
          }}
        />
      )}
    </div>
  )
}

export default Address
