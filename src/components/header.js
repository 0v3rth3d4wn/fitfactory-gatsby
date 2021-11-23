import React, { useEffect, useRef } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import useScrollPosition from '@react-hook/window-scroll'
import { Link } from 'gatsby'
import Nav from './nav'
import Logo from './logo'

const Header = () => {
  const headerHeight = 72
  const scrollY = useScrollPosition(60)
  let isHeaderVisible = true

  // Use useRef to store the previous value of scrollY
  const prevScrollYRef = useRef(0)

  // Store the current scrollY after the render method
  useEffect(() => {
    prevScrollYRef.current = scrollY
  }, [scrollY])

  /**
   * If the current scrollY value is smaler or equals to
   * the previous scrollY value - we are scrolling up (we are closer to the top) and then showing the header,
   * otherwise we are scrolling down (the current scrollY becomes larger) thus we are hiding the header
   * Trying to emulate Headroom.js on a basic level
   */
  isHeaderVisible = scrollY <= prevScrollYRef.current

  return (
    <>
      <header
        className={`px-4 py-2 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-center z-40 ${
          scrollY < headerHeight ? 'bg-transparent' : 'bg-black shadow'
        } duration-300 transition-all ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link to="#" className="absolute top-1/2 -translate-y-1/2 left-4">
          <LockClosedIcon className="text-white w-10 h-10" />
        </Link>
        <Logo />
        <Nav />
      </header>
    </>
  )
}

export default Header
