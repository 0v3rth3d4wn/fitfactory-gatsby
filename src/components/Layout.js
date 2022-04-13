import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, path }) => {
  console.log(path)
  return (
    <>
      <Header />
      <StaticImage
        src="../assets/images/backgrounds/business-hours-large-bgr.jpg"
        alt="Nav overlay background"
        layout="fullWidth"
        className="block fixed inset-0"
        loading="eager"
        quality="95"
        breakpoints={[480, 750, 1080, 2560]}
        style={{ position: 'fixed' }}
      />
      <main className="bg-black">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
