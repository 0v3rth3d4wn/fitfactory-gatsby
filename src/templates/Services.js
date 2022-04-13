import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser'
import Separator from '../assets/images/separator.svg'
import PageHeader from '../components/PageHeader'

const Services = ({ pageContext, data }) => {
  const {
    wpPage: {
      services: { services },
    },
  } = data

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <PageHeader pageTitle={pageContext.title} crumbs={crumbs} />
      {services?.map((service, index) => (
        <div
          className="relative"
          key={index}
          id={service.anchor ? service.anchor : ''}
        >
          <div className="relative p-6 mx-auto md:py-16 md:max-w-3xl xl:pt-0 xl:pb-24 xl:max-w-7xl">
            {service.name && (
              <>
                {index > 0 && (
                  <Separator className="block mx-auto mb-20 text-white" />
                )}
                <h2 className="mb-6 text-5xl font-bold text-left text-primary uppercase">
                  {service.name}
                </h2>
              </>
            )}
            {service.content && (
              <div className="content">{ReactHtmlParser(service.content)}</div>
            )}
          </div>
        </div>
      ))}
    </>
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
