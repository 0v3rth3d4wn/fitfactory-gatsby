import React from 'react'
import Layout from './src/components/Layout'
import { NavContextProvider } from './src/store/nav-context'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([<div key="portal" id="portal" />])
}

export function wrapRootElement({ element }) {
  return <NavContextProvider>{element}</NavContextProvider>
}
