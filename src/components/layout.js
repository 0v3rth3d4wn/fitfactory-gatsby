import React from 'react'
import Header from './header'
import Footer from './Footer'

const layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default layout
