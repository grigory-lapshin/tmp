import React from 'react'
import styled from 'styled-components'

import logo from '../images/toweco.png'

const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

const Logo = styled.img`
  padding: 4rem 0 4rem 0;
`

export default () => (
  <Container>
    <Logo src={logo} />
  </Container>
)
