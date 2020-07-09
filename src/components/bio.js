/**
 * My brief bio
 *
 * Queries for data with Gatsby's useStaticQuery component
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Icon from "./icon"
import getIcon from "../utils/getIcon"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            education
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{ marginBottom: 0, minWidth: 50, borderRadius: `100%` }}
        imgStyle={{ borderRadius: `50%` }}
      />

      <h1>Russel Shawn Dsouza</h1>

      <p>
        Electronics & Communications Undergrad @ 
        <span className="underline--magical">
          <a href="https://nitk.ac.in" style={{fontWeight: '600'}}>NITK, India</a>
        </span>
      </p>

      <div style={{ display: `flex`, flexDirection: `row` }}>
        <a href="https://github.com/rshwndsz/"><Icon name={'GitHub Profile'} icon={getIcon('github')} color="#e8e6e3" height="1.2em" width="1.2em"/></a>
        <a href="https://linkedin.com/in/rshwndsz/"><Icon name={'LinkedIn Profile'} icon={getIcon('linkedin')} color="#0687c9" height="1.23em"/></a>
        <a href="mailto:rshwndsz@gmail.com"><Icon name={'NITK mail'} icon={getIcon('email')} color="#84fab0" height="1.34em"/></a>
        <a href="mailto:russel.171ec143@nitk.edu.in"><Icon name={'Personal mail'} icon={getIcon('email')} color="#ff8177" height="1.35em"/></a>
      </div>

    </div>
  )
}

export default Bio
