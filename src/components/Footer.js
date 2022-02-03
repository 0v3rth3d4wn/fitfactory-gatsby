import React from 'react'

const Footer = () => (
  <footer className="relative z-10 text-sm text-gray bg-[#000000] ">
    <div className="flex flex-col flex-wrap gap-2 justify-center items-center p-4 mx-auto max-w-7xl text-center md:flex-row">
      <div>&copy; Fit Factory {new Date().getFullYear()}</div>
      <div>
        Design and development by{' '}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://brokkolli.com"
        >
          Brokkolli
        </a>{' '}
        &{' '}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ivokaradzhov.com"
        >
          Ivo Karadzhov
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
