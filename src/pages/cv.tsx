/**
 * CV in Viz
 */
import React from "react"
import { PageProps, graphql } from "gatsby"
import { IconContext } from "react-icons";
import { AiOutlineFilePdf } from "react-icons/ai";

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline"

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
            <div style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `center`,
                marginBottom: `${rhythm(1)}`
                }} >
                <a style= {{
                    border: `2px solid #84fab0`,
                    borderRadius: `4px`,
                    background: `#181a1b`,
                    color: `#e8e6e3`,
                    boxShadow: `none`,
                    padding: `${rhythm(1/2)}`,
                    }} 
                    href="https://raw.githubusercontent.com/rshwndsz/resume/master/CV.pdf"
                > 
                    <span style={{ verticalAlign: 'middle' }}>
                        View as PDF 
                    </span>
                    <IconContext.Provider value={{ color: "#ff8177", size: '1.3em', 
                        style: { verticalAlign: 'middle', margin: '0 0 0.2em 0.2em' } }}>
                        <AiOutlineFilePdf />
                    </IconContext.Provider>
                </a>
            </div>
            <Timeline data={data.site.siteMetadata.timelineData}/>
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

