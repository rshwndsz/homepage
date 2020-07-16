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
import Skills from "../components/skills"

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

            <h2 style={{borderBottom: '2px solid #84fab0', lineHeight: '0.1em', marginBottom: `${rhythm(1)}`}}>
                <span style={{background: '#181a1b', padding: `0 ${rhythm(1/4)}`}}>Skills</span>
            </h2>
            <div style={{margin: '0 0 2em 2em'}}>
                <Skills data={data.site.siteMetadata.skillData} />
            </div>

            <h2 style={{borderBottom: '2px solid #84fab0', lineHeight: '0.1em', marginBottom: `${rhythm(1)}`}}>
                <span style={{background: '#181a1b', padding: `0 ${rhythm(1/4)}`}}>Experience</span>
            </h2>
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
        skillData {
            type
            skills
        }
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

