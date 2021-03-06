/**
 * Base layout of all pages
 */
import React from "react"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        padding: `${rhythm(3/2)} ${rhythm(3/4)}`,
      }}
    >
      <main> 
        {children}
      </main>
    </div>
  )
}

export default Layout
