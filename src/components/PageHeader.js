import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import React from 'react'

const PageHeader = ({ crumbs, pageTitle }) => (
  <div className="relative p-6 mx-auto mt-[5.5rem] md:pb-8 md:max-w-3xl xl:pb-12 xl:max-w-7xl">
    <Breadcrumb crumbs={crumbs} crumbSeparator=" - " crumbLabel={pageTitle} />
    <h1 className="mt-0 text-5xl font-bold text-left text-gray uppercase">
      {pageTitle}
    </h1>
  </div>
)

export default PageHeader
