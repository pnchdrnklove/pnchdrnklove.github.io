import React from "react"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Navigation from "../components/navigation"

import "../css/category.css"

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  return <Layout contents={
  <main>
    <About />
    <div className="toggle-box">
        <Link to="/">All</Link>
        <Link to="/category" className="current-view">Category</Link>
    </div>
    <div className="category-wrapper">
      {group.map(category => (
        <div key={category.fieldValue}>
          <Link to={`/category/${(category.fieldValue)}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
          <div>
            {category.edges.map(edges => (
              <Link to={`${edges.node.frontmatter.path}`} key={edges.node.frontmatter.path}>
                <span className="category-list-post-title">
                  {edges.node.frontmatter.title}<br />
                </span>
              </Link>
            ))}
          </div>
        </div>
        ))}
    </div>
    </main>}/>
  }

export default CategoryPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
        group(field: frontmatter___category) {
          fieldValue
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
    }
 `