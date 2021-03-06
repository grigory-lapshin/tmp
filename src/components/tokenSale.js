import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;

  flex: 0 0 25%;

  min-width: 350px;
`

const Header = styled.h2`
  margin-bottom: 48px;

  font-family: Montserrat;
  font-size: 1.44rem;
  font-weight: 400;

  color: white;

  text-transform: uppercase;
  text-align: center;
`

const PriceBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  flex: 0 0 auto;
`

const Price = styled.div`
  margin-bottom: 68px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: baseline;

  flex: 0 0 auto;

  :first-child {
    margin-right: 70px;
  }

  // needed to accomodate cent sign
  :last-child {
    padding-right: 20px;
  }
`

const PriceLabel = styled.p`
  margin: 0 18px 0 0;

  font-family: Montserrat;
  font-size: 1.11rem;
  font-weight: 500;

  color: #faa998;
`

const PriceValue = styled.p`
  position: relative;

  margin: 0;
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 800;

  color: white;

  :after {
    position: absolute;
    top: 0px;
    right: -20px;
    content: '¢';
    font-weight: 400;
  }
`

const BuyButton = styled.a`
  flex: 0 0 auto;

  padding: 28px 64px;

  margin-bottom: 18px;

  font-family: Montserrat;
  font-size: 1.66rem;
  line-height: 1.66rem;
  font-weight: 700;

  color: white;

  text-transform: uppercase;

  border: 3px solid white;
  border-radius: 20px;
`

const HowTobuy = styled(Link)`
  margin-bottom: 68px;

  font-family: Montserrat;
  font-size: 0.77rem;
  font-weight: 500;

  color: #faa998;

  text-align: center;
`

const PaymentOptions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  flex: 1 0 auto;
`

const OptionLabel = styled.p`
  font-family: Montserrat;
  font-size: 1rem;
  line-height: 1.55rem;
  font-weight: 500;

  color: #faa998;
`

const OptionIcon = styled.img``

const ExchangesBlock = styled.div`
  padding: 0 16px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  flex: 0 0 auto;
`

const ExchangeLabel = styled.p`
  margin: 0;

  flex: 0 0 33.33%;

  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 500;

  color: white;
`

const Exchanges = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  flex: 0 1 66.66%;
`

const ExchangeLink = styled.a`
  :nth-child(odd) {
    margin-right: 36px;
  }

  font-family: Montserrat;
  font-size: 0.89rem;
  font-weight: 500;

  color: white;

  text-decoration: underline;
`

const TokenSale = () => (
  <Container>
    <Header>Приватная продажа токенов TWC</Header>
    <PriceBlock>
      <Price>
        <PriceLabel>сейчас:</PriceLabel>
        <PriceValue>1</PriceValue>
      </Price>
      <Price>
        <PriceLabel>на ICO:</PriceLabel>
        <PriceValue>5</PriceValue>
      </Price>
    </PriceBlock>
    <BuyButton>Купить TWC</BuyButton>
    <HowTobuy>Как купить токены?</HowTobuy>
    <PaymentOptions>
      <OptionLabel>Принимаем к оплате:</OptionLabel>
      <OptionIcon />
    </PaymentOptions>
    <ExchangesBlock>
      <ExchangeLabel>
        Продать <br /> TWC:
      </ExchangeLabel>
      <Exchanges>
        <ExchangeLink>BIT forex</ExchangeLink>
        <ExchangeLink>BTC Alpha</ExchangeLink>
        <ExchangeLink>BIT MART</ExchangeLink>
        <ExchangeLink>BIT lite</ExchangeLink>
      </Exchanges>
    </ExchangesBlock>
  </Container>
)

export default TokenSale
