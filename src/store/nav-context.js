import React, { createContext, useEffect, useState } from 'react'

const NavContext = createContext({
  isNavOpen: false,
  setNavOpen: () => {},
  setNavClosed: () => {},
})

export const NavContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const setNavOpen = () => {
    setIsNavOpen(true)
  }

  const setNavClosed = () => {
    setIsNavOpen(false)
  }

  useEffect(() => {
    const overflow = isNavOpen ? 'hidden' : 'auto'
    document.documentElement.style.setProperty('--body-overflow', overflow)
  }, [isNavOpen])

  return (
    <NavContext.Provider value={{ isNavOpen, setNavOpen, setNavClosed }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext
