import { Link } from 'gatsby'
import React from 'react'

const buttonStyles = {
  primary:
    'inline-block uppercase text-white border-4 border-white text-2xl border-solid font-bold py-3 px-2 hover:border-primary focus:border-primary hover:text-primary focus:text-primary transition-colors duration-300',
}

const Button = ({
  to,
  style = 'primary',
  className,
  children,
  out = false,
  ...props
}) => {
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
