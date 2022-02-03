import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Separator from '../assets/images/separator.svg'

const Services = ({ pageContext, data }) => {
  const {
    wpPage: {
      services: { services },
    },
  } = data

  const {
    breadcrumb: { crumbs },
  } = pageContext

  console.log(pageContext)

  return (
    services &&
    services.map((service, index) => (
      <div
        className="relative"
        key={index}
        id={service.anchor ? service.anchor : ''}
      >
        {service.background && (
          <GatsbyImage
            alt={service.name}
            className="absolute inset-0"
            image={service.background.localFile.childImageSharp.gatsbyImageData}
            style={{ position: 'absolute' }}
          />
        )}
        <div
          className={`${
            index === 0 ? 'md:pb-16 xl:pb-24' : 'md:py-16 xl:py-24'
          } relative py-6 px-4 mx-auto md:max-w-3xl xl:max-w-7xl`}
        >
          {pageContext.title && index === 0 && (
            <>
              <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" - "
                crumbLabel={pageContext.title}
              />
              <h1 className="mt-0 mb-8 text-5xl font-bold text-left text-white uppercase">
                {pageContext.title}
              </h1>
            </>
          )}
          {service.name && (
            <>
              {index > 0 && (
                <Separator className="block mx-auto mb-6 text-white md:hidden" />
              )}
              <h2 className="mb-6 text-5xl font-bold text-center text-primary uppercase md:text-left">
                {service.name}
              </h2>
            </>
          )}
          {service.content && (
            <div className="content">{ReactHtmlParser(service.content)}</div>
          )}
        </div>
      </div>
    ))
  )
}

export const query = graphql`
  query ServicesQuery($id: Int!) {
    wpPage(databaseId: { eq: $id }) {
      content
      services {
        services {
          anchor
          content
          name
          background {
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
`
export default Services
