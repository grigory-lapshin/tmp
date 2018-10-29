import React from 'react'
import styled from 'styled-components'

import forbes from '../images/forbes.png'
import cnews from '../images/cnews.png'
import icoholder from '../images/icoholder.png'

const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  flex: 1 0 100%;
`

const Header = styled.h1`
  flex: 1 0 83.33333333%;

  padding-left: 16.66666667%;

  font-family: PFDinDisplayPro;
  font-size: 1.66rem;
  font-weight: 500;

  color: white;
`
const Carousel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 100%;

  align-self: stretch;
`

const ArrowBlock = styled.div`
  display: flex;
  flex: 0 0 16.66666667%;
  flex-flow: column;
  align-items: center;
`

const ArrowLeft = styled.div`
  & {
    position: relative;
    width: 128px;
    height: 128px;
  }

  &:after {
    position: absolute;
    top: 20px;
    left: 50px;
    content: '';
    width: 90px;
    height: 90px;
    transform: rotate(45deg);

    border-left: 1px solid white;
    border-bottom: 1px solid white;
  }
`

const ArrowRight = styled(ArrowLeft)`
  &:after {
    top: 20px;
    left: 0px;
    transform: rotate(-135deg);
  }
`

const Publishers = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 66.66666667%;

  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  margin-bottom: 0;
`

const Publications = () => (
  <Container>
    <Header>О нас пишут:</Header>
    <Carousel>
      <ArrowBlock>
        <ArrowLeft />
      </ArrowBlock>
      <Publishers>
        <Logo src={forbes} />
        <Logo src={cnews} />
        <Logo src={icoholder} />
      </Publishers>
      <ArrowBlock>
        <ArrowRight />
      </ArrowBlock>
    </Carousel>
  </Container>
)

export default Publications
