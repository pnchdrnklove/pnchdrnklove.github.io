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
      <nav class="container mynavbar navbar navbar-expand-md fixed-top">
        <div class="container-fluid">
          <Header siteTitle={data.site.siteMetadata?.title + ' / ' || `Title`} />
          {/* <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div> */}
        </div>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <div class="container myfooter">
      <footer class="container-fluid py-3 my-4">
        <span class="mb-3 mb-md-0 text-muted">
          © {new Date().getFullYear()} &middot; Built with {` `}
          <a href="https://www.gatsbyjs.com" style={{textDecoration: `none`,}}>Gatsby</a>
        </span>
      </footer>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
