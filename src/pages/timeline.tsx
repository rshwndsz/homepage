/**
 * Timeline
 */
import React from "react"
import { PageProps, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const TimelinePage = ({ data }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata
  return (
      <Layout>
          <SEO title="Timeline" />
          <Timeline />
      </Layout>
  )
}

export default TimelinePage 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
