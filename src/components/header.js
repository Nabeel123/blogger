import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>

      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly', color: '#fff', padding: '1rem', marginTop: '5px' }}>
          <li>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>

          </li>

          <li>
            <Link
              to="/about-us/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
            About us
            </Link>
          </li>
          

          <li>
            <Link
              to="/products/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
            Products
            </Link>
          </li>

          <li>
            <Link
              to="/blog/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
            Blog
            </Link>
          </li>


          <li>Contact us</li>
        </ul>
      </nav>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
