import React, { useEffect, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import useScrollPosition from '@react-hook/window-scroll'
import { Link } from 'gatsby'
import Nav from './nav'
import Logo from './logo'

const Header = () => {
  const headerHeight = 72
  const scrollY = useScrollPosition(60)
  const [currentScrollY, setCurrentScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    setCurrentScrollY(prevScroll => {
      // If prevScroll is >= it means we are scrolling up, else we are scrolling down
      // If scrolling up - show the header, else hide it
      if (scrollY >= headerHeight) {
        setIsHeaderVisible(prevScroll >= scrollY)
      }

      return scrollY
    })
  }, [scrollY])

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
