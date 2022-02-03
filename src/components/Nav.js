import React, { useContext } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavOverlay from './NavOverlay'
import NavContext from '../store/nav-context'

const Nav = () => {
  const { setNavOpen, setNavClosed, isNavOpen } = useContext(NavContext)

  return (
    <div className="absolute top-1/2 right-4 -translate-y-1/2">
      {/* Toggle open / close nav button */}
      {isNavOpen ? (
        <button type="button" className="block" onClick={() => setNavClosed()}>
          <XIcon className="w-10 h-10 text-white" />
        </button>
      ) : (
        <button type="button" className="block" onClick={() => setNavOpen()}>
          <MenuIcon className="w-10 h-10 text-white" />
        </button>
      )}

      {/* Nav overlay with nav items if isNavOpen is true */}
      {isNavOpen && <NavOverlay onClick={() => setNavClosed()} />}
    </div>
  )
}

export default React.memo(Nav)
