import React from 'react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

// Get all features
const featuresQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      features {
        features {
          feature {
            name
            link {
              title
              url
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    quality: 75
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
      <div className="overflow-hidden relative">
        <div className="flex relative flex-wrap justify-between items-center">
          {features.map(({ feature: { icon, name, link } }, index) => (
            <div
              key={index}
              className="relative w-1/2 text-center sm:w-1/3 square sm:rectangle"
            >
              <div className="group flex overflow-hidden absolute flex-col flex-wrap justify-center items-center p-4 w-full h-full">
                {icon && (
                  <GatsbyImage
                    alt={icon.altText}
                    image={icon.localFile.childImageSharp.gatsbyImageData}
                    className="block absolute inset-0 z-[9] w-full h-auto transition-transform duration-300 scale-100 group-hover:scale-110"
                    style={{ position: 'absolute' }}
                  />
                )}
                <Link
                  to={link.url}
                  className="z-10 text-lg tracking-widest text-white uppercase group-hover:opacity-0 transition-all duration-300 group-hover:translate-y-[-100%] sm:font-medium text-shadow stretched"
                >
                  {name}
                </Link>
                <div className="absolute top-1/2 z-10 text-sm tracking-widest text-center text-primary uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[50%] group-hover:-translate-y-1/2 sm:font-medium md:text-lg text-shadow">
                  ?????? ????????????
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
