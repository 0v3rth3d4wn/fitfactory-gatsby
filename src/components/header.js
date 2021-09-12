import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Nav from './nav'
import Logo from './logo'

const Header = () => {
  const topOffsetClass = 'top-[72px]'
  const { ref, inView } = useInView()

  return (
    <>
      <header
        className={`px-4 py-2 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-center z-40 ${
          inView ? 'bg-transparent' : 'bg-black shadow'
        } transition-colors duration-300`}
      >
        <Logo />
        <Nav />
      </header>
      <div
        ref={ref}
        className={`absolute left-0 ${topOffsetClass} w-[1px] h-[1px] z-[-1]`}
      />
    </>
  )
}

export default Header
