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
  )
}

export default Address
