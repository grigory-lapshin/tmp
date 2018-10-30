import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/toweco_logo.png'

import media from './mediaSizes'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${media.desktop`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: center;
  `};

  padding-top: 70px;

  margin-bottom: 128px;

  max-width: 1660px;
  background: transparent;
`

const LogoContainer = styled.div`
  display: flex;
  flex: 1 0 33.33333333%;
  align-items: center;
`

const Logo = styled.img`
  max-width: 159.5px;
  max-height: 39px;

  ${media.desktop`max-width: 319px;
  max-height: 78px;`};
`

const Navigation = styled.nav`
  order: 1;

  display: block;

  padding: 16px 0;

  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  ${media.desktop`
  order: 0;
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 50%;
  justify-content: space-between;
  align-items: center;`};
`

const MenuItem = styled(Link)`
  margin-right: 1rem;

  ${media.desktop` margin-right: 0;`};

  font-family: PFDinDisplayPro;
  font-size: 1rem;
  font-weight: 500;

  color: white;

  text-transform: uppercase;
  text-decoration: none;
`
const Auth = styled.div`
  display: flex;
  flex: 1 0 16.66666667%;
  justify-content: flex-end;
  align-items: center;
`

const Login = styled.a`
  font-family: PFDinDisplayPro;
  font-size: 1rem;
  font-weight: 500;

  color: white;

  text-transform: uppercase;
  text-decoration: none;
`

const sections = [
  'White Paper',
  'О компании',
  'Новости',
  'Road Map',
  'Команда',
  'контакты',
]

const Header = ({}) => (
  <Container>
    <LogoContainer>
      <Logo src={logo} />
    </LogoContainer>
    <Navigation>
      {sections.map(item => (
        <MenuItem to="/">{item}</MenuItem>
      ))}
    </Navigation>
    <Auth>
      <Login href="https://toweco.io">Войти</Login>
    </Auth>
  </Container>
)

export default Header
