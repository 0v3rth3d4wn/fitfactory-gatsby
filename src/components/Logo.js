import React from 'react'
import FFLogo from '../assets/images/logo.svg'

const Logo = () => (
  <a href="/" className="h-[56px] w-auto block">
    <FFLogo className="w-full h-full" />
  </a>
)

export default React.memo(Logo)
