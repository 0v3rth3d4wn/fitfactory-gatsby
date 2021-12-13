import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Separator from '../assets/images/separator.svg'
import Button from './Button'

// Get business hours title and rangers
const businessHoursQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      businessHours {
        businessHoursHeading
        businessHoursSubheading
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
      businessHours: { businessHoursHeading, businessHoursSubheading },
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
      <div className="relative overflow-hidden business-area ">
        <StaticImage
          alt="Black grid background"
          className="absolute block inset-0 w-full h-full sm:hidden"
          layout="fullWidth"
          src="../assets/images/backgrounds/business-hours-bgr.jpg"
          loading="eager"
          quality="75"
          breakpoints={[480, 750, 1080]}
          objectPosition="center center"
          style={{ position: 'absolute' }}
        />
        {/* <StaticImage
          alt="Black grid background"
          className="absolute hidden sm:block inset-0 w-full h-full"
          layout="fullWidth"
          src="../assets/images/backgrounds/business-hours-large-bgr.jpg"
          loading="eager"
          quality="85"
          breakpoints={[750, 1080, 2560]}
          objectPosition="center center"
          style={{ position: 'absolute' }}
        /> */}
        <div className="business-area-content px-4 py-16 relative z-30 flex flex-wrap flex-col items-center justify-center text-center">
          {businessHoursHeading && (
            <h2 className="text-primary text-5xl font-bold mb-12 uppercase sm:hidden">
              {businessHoursHeading}
            </h2>
          )}
          {businessHoursSubheading && (
            <h3 className="text-gray text-lg text-center uppercase mb-1 font-medium tracking-widest sm:pt-4 sm:mb-16">
              {businessHoursSubheading}
            </h3>
          )}
          <Separator className="mb-12 sm:mb-8 text-white" />

          {businessHoursRanges.map((range, index) => (
            <div className="mb-12 sm:mb-8" key={index}>
              <div className=" text-lg uppercase text-gray font-medium tracking-widest">
                {range.days}
              </div>
              <div className="text-white font-bold text-5xl">{range.time}</div>
            </div>
          ))}

          <Separator className="rotate-180 text-white hidden sm:block sm:mb-12" />

          {businessHoursLink && (
            <Button className="mb-8" to={businessHoursLink.url}>
              {businessHoursLink.title}
            </Button>
          )}
          <Separator className="rotate-180 text-white sm:hidden" />
        </div>
      </div>
    )
  )
}

export default BusinessHours
