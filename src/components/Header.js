import React, { useEffect, useRef } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import useScrollPosition from '@react-hook/window-scroll'
import { Link } from 'gatsby'
import Nav from './Nav'
import Logo from './Logo'

const FitSysLink = React.memo(({ to = '' }) => (
  <Link to={to} className="absolute top-1/2 -translate-y-1/2 left-4">
    <LockClosedIcon className="text-white w-10 h-10" />
  </Link>
))

FitSysLink.displayName = 'FitSysLink'

const Header = () => {
  const headerHeight = 88
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
  isHeaderVisible = scrollY <= prevScrollYRef.current || scrollY < headerHeight

  return (
    <>
      <header
        className={`p-4 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-center z-[60] ${
          scrollY < headerHeight ? 'bg-transparent' : 'bg-black shadow'
        } duration-300 transition-all ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <FitSysLink />
        <Logo />
        <Nav />
      </header>
    </>
  )
}

export default Header
