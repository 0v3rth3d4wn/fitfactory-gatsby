import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Separator from '../assets/images/separator.svg'
import Button from './button'

// Get business hours title and rangers
const businessHoursQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      businessHours {
        businessHoursHeading
        businessHoursLink {
          target
          title
          url
        }
        ranges {
          days
          time
        }
      }
    }
  }
`

function BusinessHours() {
  const {
    wpPage: {
      businessHours: { businessHoursHeading },
    },
    wpPage: {
      businessHours: { ranges: businessHoursRanges },
    },
    wpPage: {
      businessHours: { businessHoursLink },
    },
  } = useStaticQuery(businessHoursQuery)
  return (
    businessHoursRanges && (
      <div className="relative overflow-hidden">
        <StaticImage
          alt="Black grid background"
          className="absolute block top-0 left-0 w-full h-full"
          layout="fullWidth"
          src="../assets/images/black-grid-bgr.png"
          quality="100"
        />
        <div className="px-4 py-12 relative z-30 flex flex-wrap items-center justify-center text-center">
          <Separator className="mb-8" />
          {businessHoursHeading && (
            <h2 className="text-primary text-2xl text-center uppercase font-bold mb-6">
              {businessHoursHeading}
            </h2>
          )}

          {businessHoursRanges.map((range, index) => (
            <div className="mb-11" key={index}>
              <div className="text-base mb-2 uppercase text-white font-semibold">
                {range.days}
              </div>
              <div className="text-gray font-bold text-5xl">{range.time}</div>
            </div>
          ))}

          {businessHoursLink && (
            <Button className="mb-8" to={businessHoursLink.url}>
              {businessHoursLink.title}
            </Button>
          )}
          <Separator className="rotate-180" />
        </div>
      </div>
    )
  )
}

export default BusinessHours
