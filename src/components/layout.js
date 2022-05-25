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
import SearchBar from "./search"

import "bootstrap/dist/css/bootstrap.css"
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

  const { search } = typeof window !== 'undefined' && window.location;
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = React.useState(query || '');
  
  onload = typeof window !== 'undefined' && window.onload
  onload = function() {
    document.getElementByID("header-search").innerHTML = "";
  }

  return (
    <>
      <header>
      <nav className="container mynavbar navbar navbar-expand-md fixed-top">
        <Header siteTitle={data.site.siteMetadata?.title + ' / ' || `Title`} />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </nav>
    </header>
    <main>
      {children}
    </main>
    <div className="container myfooter">
      <footer className="container-fluid py-3 my-4">
        <span className="mb-3 mb-md-0 text-muted">
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
