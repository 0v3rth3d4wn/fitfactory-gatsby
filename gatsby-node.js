const path = require(`path`)
const fs = require('fs')

/**
 * Get all distinct page templates
 * @param {*} param0
 * @returns
 */
const getAllPageTemplates = async ({ graphql, reporter }) => {
  const { data, errors } = await graphql(`
    {
      templates: allWpPage {
        distinct(field: template___templateName)
      }
    }
  `)

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  return data.templates.distinct
}

/**
 * Create all pages per template
 * @param {*} param0
 * @returns
 */
const createPageTemplatePages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const templates = await getAllPageTemplates({ graphql, reporter })

  await Promise.all(
    templates.map(async template => {
      // Split WordPress template name - expected to be "Default, Service Template, etc"
      const pageTemplate = path.resolve(
        `./src/templates/${template.split(' ')[0]}.js`
      )

      try {
        if (!fs.existsSync(pageTemplate)) {
          return
        }
      } catch (error) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
      }

      // Get all pages (except the front page) that have the current template assigned
      const { data, errors } = await graphql(`
      {
        pages: allWpPage(
          filter: {isFrontPage: {eq: false}, template: {templateName: {eq: "${template}"}}, status: {eq: "publish"}}
        ) {
          nodes {
            slug
            databaseId
          }
        }
      }
    `)

      // Handle errors
      if (errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      // Create all pages that have the current template
      data.pages.nodes.forEach(page => {
        createPage({
          path: page.slug,
          component: pageTemplate,
          context: {
            slug: page.slug,
            id: page.databaseId,
          },
        })
      })
    })
  )
}

exports.createPages = async params => {
  // Create all pages based on all templates that are NOT the front page and that are public
  await createPageTemplatePages(params)
}
