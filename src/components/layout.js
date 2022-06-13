import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

// import "bootstrap/dist/css/bootstrap.css"
import "../css/layout.css"

const Layout = ({ contents, searchbar, postData }) => {
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
  console.log(postData);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title}
          searchbar={searchbar}
          postData={postData}/>
      { contents }
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
  about: PropTypes.node,
}

export default Layout
