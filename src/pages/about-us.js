import React from "react"
// import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



export default () => (
    <StaticQuery
        query={graphql`
        query aboutus {
          site {
            aboutUs {
              title,
              description
            }
          }
        }
      `}

        render={data => (
            <Layout>
                <SEO title={data.site.aboutUs.title} />
                <h1> {data.site.aboutUs.title} </h1>
                <p> {data.site.aboutUs.description} </p>
            </Layout>
        )}
    />
)