import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Separator from '../assets/images/separator.svg'
import Button from '../components/Button'

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
    trainers &&
    trainers.map((trainer, index) => (
      <div className="relative" key={index}>
        {trainer.background && (
          <GatsbyImage
            alt={trainer.name}
            className="absolute inset-0"
            image={trainer.background.localFile.childImageSharp.gatsbyImageData}
            style={{ position: 'absolute' }}
          />
        )}
        <div
          className={`${
            index === 0 ? 'md:pb-16 xl:pb-24' : 'md:py-16 xl:py-24'
          } relative py-6 px-6 mx-auto md:max-w-3xl xl:max-w-7xl`}
        >
          {pageContext.title && index === 0 && (
            <>
              <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" - "
                crumbLabel={pageContext.title}
              />
              <h1 className="mt-0 mb-8 text-5xl font-bold text-left text-gray uppercase">
                {pageContext.title}
              </h1>
            </>
          )}
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
              <div className="text-center">
                <Button to="mailto:nicemail@nicenice.com" out className="mb-6">
                  Свържи се с {trainer.name.split(' ')[0]}
                </Button>
              </div>
              <Separator className="block mx-auto mb-6 text-white" />
            </>
          )}
        </div>
      </div>
    ))
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

export default Trainers
