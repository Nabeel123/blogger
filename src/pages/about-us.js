import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => (
    <StaticQuery
        query={graphql`
        query SidebarItemsQuery {
                  allSidebarItemsJson {
                    edges {
                        node {
                            label
                            description
                        }
                    }
                  }
                }
        `}
        render={data => (
            <Layout>
                <SEO title="About us" />
                <h1>{data.allSidebarItemsJson.edges[0].node.label}</h1>
                <p>{data.allSidebarItemsJson.edges[0].node.description}</p>
            </Layout>

        )}
    />
);