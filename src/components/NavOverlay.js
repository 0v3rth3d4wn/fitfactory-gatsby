import ReactDom from 'react-dom'
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { XIcon } from '@heroicons/react/outline'
import { StaticImage } from 'gatsby-plugin-image'

// Get header menu from WP
const navItemsQuery = graphql`
  {
    wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
      id
      menuItems {
        nodes {
          id
          label
          url
          order
        }
      }
    }
  }
`

const NavOverlay = ({ onClick: hideOverlay }) => {
  const {
    wpMenu: {
      menuItems: { nodes: navItems },
    },
  } = useStaticQuery(navItemsQuery)

  return ReactDom.createPortal(
    <div className="fixed inset-0 z-50 bg-black">
      <StaticImage
        src="../assets/images/backgrounds/business-hours-bgr.jpg"
        alt="Nav overlay background"
        layout="fullWidth"
        className="fixed inset-0 sm:hidden"
        loading="eager"
        quality="75"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'fixed' }}
      />
      <StaticImage
        src="../assets/images/backgrounds/business-hours-large-bgr.jpg"
        alt="Nav overlay background"
        layout="fullWidth"
        className="hidden fixed inset-0 sm:block"
        loading="eager"
        quality="95"
        breakpoints={[480, 750, 1080]}
        style={{ position: 'fixed' }}
      />
      {/* Close nav btn */}
      {/* <button
        className="absolute top-4 right-4 block"
        type="button"
        onClick={hideOverlay}
      >
        <XIcon className="text-white w-10 h-10 " />
      </button> */}

      {/* Nav with nav items from graphql query */}
      {navItems && (
        <nav className="absolute inset-x-0 top-1/2 px-4 w-full text-center -translate-y-1/2">
          <ul>
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  className="block mb-6 text-2xl font-bold text-white hover:text-primary uppercase transition-colors duration-300"
                  to={navItem.url}
                  onClick={hideOverlay}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>,
    document.getElementById('portal')
  )
}

export default NavOverlay
