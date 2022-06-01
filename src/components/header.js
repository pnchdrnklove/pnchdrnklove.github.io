import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navigation from "./navigation"
import Search from "./search"

const removeSearchValue = () => {
    if (document.getElementById('header-search')) {
        console.log(document.getElementById('header-search').value)

        document.getElementById('header-search').value = '';
    }
    console.log(document.getElementById('header-search'))
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
