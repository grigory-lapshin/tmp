import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import back from '../images/back@2x.png'

import Header from './header'
import './layout.css'
import media from './mediaSizes'

const Background = styled.div`
  background-image: ${`url(${back})`};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 560px ${media.desktop`max-width: 752px;`};
  ${media.desktop`max-width: 976px;`};
  ${media.ldesktop`max-width: 1184px;`};
  ${media.xldesktop`max-width: 1660px;`};
`

const Content = styled.div`
  padding: 0;
  padding-top: 0;

  font-family: PFDinDisplayPro, sans-serif;
`

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
      <Background>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>{children}</Content>
        </Container>
      </Background>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
