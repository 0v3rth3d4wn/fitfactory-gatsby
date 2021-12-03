import { Link } from 'gatsby'
import React from 'react'

const buttonStyles = {
  primary:
    'inline-block uppercase text-white border-4 border-primary text-lg border-solid font-bold py-1 leading-[2rem] px-3 hover:bg-primary focus:bg-primary hover:text-black focus:text-black transition-colors duration-300 tracking-widest',
}

const Button = ({
  to,
  style = 'primary',
  className = '',
  children,
  out = false,
  ...props
}) => {
  // const mergedClassName = [
  //   ...new Set([...buttonStyles[style].split(' '), ...className.split(' ')]),
  // ]

  const button = (
    <button
      type="button"
      className={`${buttonStyles[style]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
  const link = out ? (
    <a href={to} className={`${buttonStyles[style]} ${className}`} {...props}>
      {children}
    </a>
  ) : (
    <Link to={to} className={`${buttonStyles[style]} ${className}`} {...props}>
      {children}
    </Link>
  )

  return to ? link : button
}

export default Button
