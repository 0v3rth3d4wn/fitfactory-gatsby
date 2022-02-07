import React from 'react'
import Layout from './src/components/Layout'
import { NavContextProvider } from './src/store/nav-context'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './src/styles/global.css'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <NavContextProvider>{element}</NavContextProvider>
}
