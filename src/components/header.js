import React from 'react'
import Nav from './nav'
import Logo from './logo'

const header = () => (
  <header className="px-4 py-2 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-center z-40">
    <Logo />
    <Nav />
  </header>
)

export default header
