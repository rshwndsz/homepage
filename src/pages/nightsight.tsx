import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export class Nightsight extends React.Component {
    componentDidMount() {
        window.location.replace("https://www.notion.so/rshwndsz/Major-Project-8d9bb43c8212493f8ad538270b287553");
    }
    render() {
        return (
            <Layout>
                <SEO title="Nightsight" />
            </Layout>
        )
    }
}

export default Nightsight
