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
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h1> Russel Shawn Dsouza</h1>

      <p> {author.education} </p>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          paddingRight: `${rhythm(1.5)}`
        }}
      >
        <a href="https://github.com/rshwndsz/"><Icon name={'github'} icon={getIcon('github')}/></a>
        <a href="https://linkedin.com/in/rshwndsz/"><Icon name={'linkedin'} icon={getIcon('linkedin')}/></a>
        <a href="mailto:rshwndsz@gmail.com"><Icon name={'email'} icon={getIcon('email')}/></a>
        <a href="mailto:russel.171ec143@nitk.edu.in"><Icon name={'email'} icon={getIcon('email')} /></a>
      </div>

    </div>
  )
}

export default Bio
