import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Navigation from "./navigation"
import Search from "./search"

import "../css/header.css"

const Header = ({ siteTitle, searchbar }) => {
    const removeSearchValue = e => {
        e.nativeEvent.stopImmediatePropagation();
        if (searchbar.useSearch) { 
            searchbar.setQuery(''); 
        }
    }
    
    return <>
        <header>
            <nav className="container mynavbar navbar navbar-expand-md fixed-top">
              <Link to="/" id="header-title" onClick={event => removeSearchValue(event)}>
                {siteTitle}
              </Link>
              <span className="seperator">/</span>
              <Navigation/>
              <Search searchbar={searchbar}></Search>
            </nav>
        </header>
        </>
}

Header.propTypes = {
  siteTitle: PropTypes.string,  
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
