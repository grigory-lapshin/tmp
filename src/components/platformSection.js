import React from 'react'
import styled from 'styled-components'

import yandex from '../images/yandex.png'
import yelp from '../images/yelp.png'
import trip from '../images/trip.png'

import media from './mediaSizes'

const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  flex: 0 0 41.66666667%;
`

const Header = styled.h1`
  font-family: Montserrat;
  font-size: 12vw;
  ${media.desktop`font-size: 5.11rem;`};
  font-weight: 100;

  color: white;

  text-transform: uppercase;
`

const SubHeader = styled.h2`
  font-family: Montserrat;
  font-size: 1.66rem;
  font-weight: 500;

  color: white;

  text-transform: uppercase;
`

const AntiBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const AntiLogo = styled.img`
  max-height: 60px;

  margin-right: 34px;
`

const PlatformSection = () => (
  <Container>
    <Header>Единая платформа отзывов</Header>
    <SubHeader>
      собранных и проверенных
      <br />
      искусственным интеллектом
    </SubHeader>
    <AntiBlock>
      <AntiLogo src={yelp} />
      <AntiLogo src={yandex} />
      <AntiLogo src={trip} />
    </AntiBlock>
  </Container>
)

export default PlatformSection
