import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Access from '../assets/images/features/access.svg'
import Cardio from '../assets/images/features/cardio.svg'
import Flex from '../assets/images/features/flex.svg'
import Protein from '../assets/images/features/protein.svg'
import Sauna from '../assets/images/features/sauna.svg'
import Solarium from '../assets/images/features/solarium.svg'

// Get all features
const featuresQuery = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      features {
        features {
          feature {
            icon
            name
          }
        }
      }
    }
  }
`
// Icons for each features importet as SVG and used like a component
const icons = {
  access: Access,
  cardio: Cardio,
  flex: Flex,
  protein: Protein,
  sauna: Sauna,
  solarium: Solarium,
}

const Features = () => {
  const {
    wpPage: {
      features: { features },
    },
  } = useStaticQuery(featuresQuery)

  return (
    features && (
      <div className="relative overflow-hidden">
        <StaticImage
          alt="Yellow grid background"
          className="absolute block top-0 left-0 w-full h-auto"
          layout="fullWidth"
          src="../assets/images/yellow-grid-bgr.png"
          quality="100"
        />

        <div className="flex flex-wrap relative z-30 justify-between items-center">
          {features.map(({ feature }, index) => (
            <div
              key={index}
              className="w-1/2 text-center relative after:block after:pb-[100%]"
            >
              <div className="absolute w-full flex flex-wrap flex-col items-center justify-center h-full px-4 py-4">
                {icons[feature.icon] &&
                  React.createElement(icons[feature.icon], {
                    className: 'block mb-3 ',
                  })}
                <div className="uppercase font-semibold leading-4 ">
                  {feature.name}
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
