import React from 'react'
import styled from 'styled-components'

import forbes from '../images/forbes.png'
import cnews from '../images/cnews.png'
import icoholder from '../images/icoholder.png'

import media from './mediaSizes'

const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  flex: 1 0 100%;
`

const Header = styled.h1`
  align-self: stretch;
  text-align: center;

  ${media.desktop`
  flex: 1 0 83.33333333%;
  padding-left: 16.66666667%;

  align-self: flex-start;
  text-align: left;
  `};

  font-family: PFDinDisplayPro;
  font-size: 1.66rem;
  font-weight: 500;

  color: white;
`
const CarouselBlock = styled.div`
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
    width: 100%;
    height: 64px;

    ${media.desktop`
    width: 128px;
    height: 128px;`};
  }

  &:after {
    position: absolute;
    content: '';

    top: 50%;
    left: 25px;
    width: 40px;
    height: 40px;

    ${media.desktop`
    top: 20px;
    left: 50px;
    width: 90px;
    height: 90px;`};

    transform: rotate(45deg);

    border-left: 1px solid white;
    border-bottom: 1px solid white;
  }
`

const ArrowRight = styled(ArrowLeft)`
  &:after {
    top: 50%;
    left: 0px;
    ${media.desktop`top: 20px;
    left: 0px;`};

    transform: rotate(-135deg);
  }
`

const Publishers = styled.div`
  display: flex;
  flex-flow: column;
  ${media.desktop`flex-flow: row nowrap;`} flex: 1 0 66.66666667%;

  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  margin-bottom: 48px;
  ${media.desktop`margin-bottom: 0;`};
`

const pubs = [forbes, cnews, icoholder, icoholder, cnews]

class Carousel extends React.Component {
  state = { pubs: pubs, currentIndex: 0 }

  nextBlock = () => {
    this.setState(({ currentIndex: prevIndex, pubs }) => {
      if (pubs.length > prevIndex + 3) {
        return {
          currentIndex: prevIndex + 3,
        }
      }
    })
  }

  prevBlock = () => {
    this.setState(({ currentIndex: prevIndex }) => {
      if (prevIndex - 3 >= 0) {
        return {
          currentIndex: prevIndex - 3,
        }
      }
    })
  }

  render() {
    const { pubs, currentIndex } = this.state
    return (
      <CarouselBlock>
        <ArrowBlock onClick={() => this.prevBlock()}>
          <ArrowLeft />
        </ArrowBlock>
        <Publishers>
          {pubs.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <Logo src={item} key={String(index)} />
          ))}
        </Publishers>
        <ArrowBlock onClick={() => this.nextBlock()}>
          <ArrowRight />
        </ArrowBlock>
      </CarouselBlock>
    )
  }
}

const Publications = () => (
  <Container>
    <Header>О нас пишут:</Header>
    <Carousel />
  </Container>
)

export default Publications
