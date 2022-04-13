import React from 'react'
import FFLogo from '../assets/images/logo.svg'

const Logo = () => (
  <a href="/" className="block w-auto h-[56px]">
    <FFLogo className="w-full h-full" />
  </a>
)

export default React.memo(Logo)
