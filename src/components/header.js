import * as React from "react"
import { useRef } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navigation from "./navigation"
import Search from "./search"

const removeSearchValue = () => {
    if (typeof document !== 'undefined') {
        const documentRef = useRef(document);
        if (document.getElementById('header-search')) {
            document.getElementById('header-search').value = '';
        }
    }
}
const Header = ({ siteTitle, searchbar }) => (
  <header>
    <nav className="container mynavbar navbar navbar-expand-md fixed-top">
      <Link to="/" id="header-title" onClick={removeSearchValue()}>
        {siteTitle}
      </Link>
      <span className="seperator">/</span>
      <Navigation></Navigation>
      <Search searchbar={searchbar}></Search>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,  
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
