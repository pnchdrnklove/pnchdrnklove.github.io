/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"


const Layout = ({ contents, searchbar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title + ' / ' || `Title`}
          searchbar={searchbar}/>
      <main>
        {contents}
      </main>
      <div className="container myfooter">
        <footer className="container-fluid py-3 my-4">
          <span className="mb-3 mb-md-0 text-muted">
            © {new Date().getFullYear()} &middot; Built with {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  contents: PropTypes.node,
}

export default Layout
