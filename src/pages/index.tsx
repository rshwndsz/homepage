/**
 * Homepage
 */
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Index = ({ data }: PageProps<Data>) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
