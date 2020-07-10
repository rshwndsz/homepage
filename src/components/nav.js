import React from "react"
import Link from "./link"
import { rhythm } from "../utils/typography"

const NavBar = ({ menuLinks }) => (
  <header style={{ marginBottom: `${rhythm(1)}` }} >
    <div >
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          justifyItems: `space-between`,
          justifyContent: `right`,
          alignItems: `center`,
        }}
      >
        <div>
          <nav>
            <ul style={{ display: `flex`, flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  className="underline--magical"
                  key={link.name}
                  style={{
                    fontSize: `${rhythm(8 / 10)}`,
                    fontWeight: '600',
                    listStyleType: `none`,
                    marginRight: `${rhythm(1)}`,
                  }}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default NavBar
