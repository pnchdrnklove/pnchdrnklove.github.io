import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, searchbar }) => (
  <header>
    <nav className="container mynavbar navbar navbar-expand-md fixed-top">
      <Link to="/" id="header-title">
        {siteTitle}
      </Link>
      {searchbar}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  searchbar: PropTypes.node.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
  searchbar: ``,
}

export default Header
