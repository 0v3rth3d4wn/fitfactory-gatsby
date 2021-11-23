import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavOverlay from './nav-overlay'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-4">
      {/* Toggle nav button */}
      <button
        type="button"
        className="block"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <XIcon className="text-white w-10 h-10" />
        ) : (
          <MenuIcon className="text-white w-10 h-10" />
        )}
      </button>
      {/* Nav overlay with nav items if isNavOpen is true - pass setIsNavOpen false to close the overlay */}
      {isNavOpen && <NavOverlay onClick={() => setIsNavOpen(false)} />}
    </div>
  )
}

export default Nav
