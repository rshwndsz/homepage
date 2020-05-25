/**
 * Base layout of all pages
 */
import React from "react"

import { rhythm } from "../utils/typography"

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main> {children} </main>

      <footer >
        Here be dragons 🐉.
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>.
      </footer>
    </div>
  )
}

export default Layout
