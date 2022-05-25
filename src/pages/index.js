import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostLink from "../components/post-list"
import * as styles from "../components/index.module.css"


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // you can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    
    return <Layout>
            <Seo title="Home" />
            <div className={ styles.textCenter }>
                <h1>
                  Welcome to <b>Gatsby!</b>
                </h1>
            </div>
            <div>{ Posts }</div>
        </Layout>
}

//       <p className={styles.intro}>
//         <b>Example pages:</b>{" "}
//         {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> · </>}
//           </React.Fragment>
//         ))}
//         <br />
//         Edit <code>src/pages/index.js</code> to update this page.
//       </p>
//     </div>
//   </Layout>
// }

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    id
                    excerpt(truncate: true, pruneLength: 100)
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                        path
                        title
                    }
                }
            }
        }
    }
`