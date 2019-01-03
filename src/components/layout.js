import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import ComingSooon from './ComingSoon'
import NavBar from './NavBar'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Ridge Market & Cafe' },
            { name: 'keywords', content: 'Market, Restaurante, The Ridge, Suncrest, food, lunch, dinner' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ComingSooon />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
