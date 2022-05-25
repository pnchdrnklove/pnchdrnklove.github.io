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
import "bootstrap/dist/css/bootstrap.css";
import "./layout.css"

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
    <header>
        <nav class="navbar fixed-top d-flex justify-content-center" style={{ backgroundColor: `#ffffff` }}>
          <div class="container" style={{ backgroundColor: `#333` }}>
            <ul class="nav">
              <li style={{ backgroundColor: `#ffffff` }} class="header-item">
                <Header siteTitle={data.site.siteMetadata?.title + ` / ` || `Title`} />
              </li>
            </ul>
          </div>
        </nav>
    </header>
    <main>
      {children}
    </main>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
