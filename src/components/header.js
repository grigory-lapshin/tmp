import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/toweco_logo.png'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding-top: 70px;

  max-width: 1660px;
  background: transparent;
  margin-bottom: 1.45rem;
`

const Logo = styled.img`
  max-width: 319px;
  max-height: 78px;
`

const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 50%;
`

const MenuItem = styled(Link)`
  font-family: PFDinDisplayPro;
  font-size: 1rem;
  font-weight: 500;

  color: white;

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
    <Logo src={logo} />
    <Navigation>
      {sections.map(item => (
        <MenuItem>{item}</MenuItem>
      ))}
    </Navigation>
  </Container>
)

export default Header
