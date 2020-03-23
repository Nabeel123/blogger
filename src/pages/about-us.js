import React from "react"
// import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { render } from "react-dom"



// export default () => (
// <StaticQuery
//     query={graphql`
//     query aboutus {
//       site {
//         about {
//           title,
//           description
//         }
//       }
//     }
//   `}

//     render={data => (
//         <Layout>
//             <SEO title={data.site.about.title} />
//             <h1> {data.site.about.title} </h1>
//             <p> {data.site.about.description} </p>
//         </Layout>
//     )}
// />
// )

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
                {            getSidebarLabels(data) }
                <h1>{data.allSidebarItemsJson.edges[0].node.label}</h1>
                <p>{data.allSidebarItemsJson.edges[0].node.description}</p>
            </Layout>

        )}
    />
);

function getSidebarLabels(data) {
    console.log(data);
    // const sidebarItemsArray = [];
    // data.allSidebarItemsJson.edges.forEach(item => {
    //     sidebarItemsArray.push(<li key={item.node.label}> {item.node.label} </li>);
    // });

    // return sidebarItemsArray;
}