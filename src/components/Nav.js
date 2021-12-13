import React, { useContext } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavOverlay from './NavOverlay'
import NavContext from '../store/nav-context'

const Nav = () => {
  const { setNavOpen, setNavClosed, isNavOpen } = useContext(NavContext)

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-4">
      {/* Open nav button */}
      <button type="button" className="block" onClick={() => setNavOpen()}>
        <MenuIcon className="text-white w-10 h-10" />
      </button>
      {/* Nav overlay with nav items if isNavOpen is true */}
      {isNavOpen && <NavOverlay onClick={() => setNavClosed()} />}
    </div>
  )
}

export default React.memo(Nav)
