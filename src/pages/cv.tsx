/**
 * CV in Viz
 */
import React from "react"
import { PageProps, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline"
import ResumeButton from "../components/resume-button"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
    timelineData: {
        type: string,
        startDate: string,
        endDate: string,
        title: string,
        subtitle: string,
        description: string
    }
  }
}

const TimelinePage = ({ data }: PageProps<Data>) => {
    return (
        <Layout>
            <SEO title="CV" />
            <ResumeButton text="View Resume as PDF" />
            <Timeline data={data.site.siteMetadata.timelineData} />
        </Layout>
    )
}

export default TimelinePage 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        timelineData {
            type
            startDate
            endDate
            title
            subtitle
            description
        }
      }
    }
  }
`

