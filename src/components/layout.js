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
import "./layout.css"
import "bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div class="container">
      <nav class="navbar fixed-top d-flex justify-content-center" style={{ backgroundColor: `var(--bs-orange)` }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div class="container">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Profile</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Messages</a></li>
            </ul>
        </div>
      </nav>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
        paddingTop: `142px`,
      }}
    >
          
        <main>{children}</main>
        <footer
            style={{
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
            }}
        >
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com" style={{textDecoration: `none`,}}>Gatsby</a>
        </footer>
    </div>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
