import React from "react"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post(s) in category "${category}"`
  return (
    <Layout contents={
    <main>
    <div>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { title, path } = node.frontmatter
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/category">All categories</Link>
    </div>
    </main>}/>
  )
}
export default categories
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`