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
      <div className="overflow-hidden relative business-area">
        <StaticImage
          alt="Black grid background"
          className="block absolute inset-0 w-full h-full sm:hidden"
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
        <div className="flex relative z-30 flex-col flex-wrap justify-center items-center py-16 px-4 text-center md:place-content-end md:px-12 md:pl-4 lg:pl-12 business-area-content">
          {businessHoursHeading && (
            <h2 className="mb-12 text-5xl font-bold text-primary uppercase sm:hidden">
              {businessHoursHeading}
            </h2>
          )}
          {businessHoursSubheading && (
            <h3 className="mb-1 text-lg font-medium tracking-widest text-center text-gray uppercase sm:pt-4 sm:mb-16">
              {businessHoursSubheading}
            </h3>
          )}
          <Separator className="mb-12 text-white sm:mb-8" />

          {businessHoursRanges.map((range, index) => (
            <div className="mb-12 sm:mb-8" key={index}>
              <div className="text-lg font-medium tracking-widest text-gray uppercase">
                {range.days}
              </div>
              <div className="text-5xl font-bold text-white">{range.time}</div>
            </div>
          ))}

          <Separator className="hidden text-white rotate-180 sm:block sm:mb-12" />

          {businessHoursLink && (
            <Button className="mb-8" to={businessHoursLink.url}>
              {businessHoursLink.title}
            </Button>
          )}
          <Separator className="text-white rotate-180 sm:hidden" />
        </div>
      </div>
    )
  )
}

export default BusinessHours
