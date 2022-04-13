import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Separator from '../assets/images/separator.svg'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

const Trainers = ({ pageContext, data }) => {
  const {
    wpPage: {
      trainers: { trainers },
    },
  } = data

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <>
      <PageHeader pageTitle={pageContext.title} crumbs={crumbs} />
      {trainers?.map((trainer, index) => (
        <div className="relative" key={index}>
          <div className="relative p-6 mx-auto md:py-16 md:max-w-3xl xl:pt-0 xl:pb-24 xl:max-w-7xl">
            {trainer.name && trainer.photo && (
              <>
                <div className="px-4">
                  <GatsbyImage
                    alt={`Снимка на ${trainer.name}`}
                    image={
                      trainer.photo.localFile.childImageSharp.gatsbyImageData
                    }
                    className="left-1/2 h-96 -translate-x-1/2"
                    imgClassName="object-top"
                  />
                </div>
                <h2 className="mb-6 text-5xl font-bold text-center text-primary uppercase md:text-left">
                  {trainer.name}
                </h2>
              </>
            )}
            {trainer.content && (
              <>
                <div className="content">
                  {ReactHtmlParser(trainer.content.replace('<p></p>', ''))}
                </div>
                <div className="mt-12 text-center">
                  <Button
                    to="mailto:nicemail@nicenice.com"
                    out
                    className="mb-12"
                  >
                    Свържи се с {trainer.name.split(' ')[0]}
                  </Button>
                </div>
                <Separator className="block mx-auto mb-6 text-white" />
              </>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  query TrainersQuery($id: Int!) {
    wpPage(databaseId: { eq: $id }) {
      content
      trainers {
        trainers {
          name
          content
          phone
          email
          photo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
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

export default Trainers
