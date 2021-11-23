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

const NavOverlay = ({ onClick }) => {
  const {
    wpMenu: {
      menuItems: { nodes: navItems },
    },
  } = useStaticQuery(navItemsQuery)

  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-black z-50">
      <StaticImage
        src="../assets/images/backgrounds/working-hours-bgr.jpg"
        layout="fullWidth"
        className="fixed inset-0"
        style={{ position: 'fixed' }}
      />
      {/* Close nav btn */}
      <button
        className="absolute top-4 right-4 block"
        type="button"
        onClick={onClick}
      >
        <XIcon className="text-white w-10 h-10 " />
      </button>

      {/* Nav with nav items from graphql query */}
      {navItems && (
        <nav className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full px-4 text-center">
          <ul>
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  className="text-white hover:text-primary transition-colors duration-300 font-bold text-2xl uppercase mb-6 block"
                  to={navItem.url}
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
