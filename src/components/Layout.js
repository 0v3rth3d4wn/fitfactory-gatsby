import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, path }) => {
  console.log(path)
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
