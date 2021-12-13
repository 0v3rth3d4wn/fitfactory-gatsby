import React from 'react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

// Get all features
const featuresQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      features {
        features {
          feature {
            name
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

const Features = () => {
  const {
    wpPage: {
      features: { features },
    },
  } = useStaticQuery(featuresQuery)

  return (
    features && (
      <div className="relative overflow-hidden">
        <div className="flex flex-wrap relative justify-between items-center">
          {features.map(({ feature: { icon, name } }, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 text-center relative square sm:rectangle"
            >
              <div className="absolute w-full flex flex-wrap flex-col items-center justify-center h-full px-4 py-4">
                {icon && (
                  <GatsbyImage
                    alt={icon.altText}
                    image={icon.localFile.childImageSharp.gatsbyImageData}
                    className="absolute block inset-0 w-full h-auto z-[9]"
                    style={{ position: 'absolute' }}
                  />
                )}
                <div className="text-white text-lg tracking-widest uppercase z-10 text-shadow sm:font-medium stretched">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default Features
