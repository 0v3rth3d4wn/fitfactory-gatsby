import './src/styles/global.css'
import React from 'react'
import Layout from './src/components/layout'
import { NavContextProvider } from './src/store/nav-context'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <NavContextProvider>{element}</NavContextProvider>
}
