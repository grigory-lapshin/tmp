import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: stretch;

  flex: 0 0 25%;
`

const Header = styled.h2`
  font-family: Montserrat;
  font-size: 1.44rem;
  font-weight: bold;

  color: white;

  text-transform: uppercase;
  text-align: center;
`

const PriceBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  flex: 1 0 auto;
`

const Price = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  flex: 0 0 auto;
`

const PriceLabel = styled.p`
  font-family: Montserrat;
  font-size: 1.11rem;
  font-weight: 500;

  color: #faa998;
`

const PriceValue = styled.p`
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 800;

  color: white;
`

const BuyButton = styled(Link)`
  flex: 1 0 auto;

  font-family: Montserrat;
  font-size: 1.66rem;
  font-weight: 700;

  color: white;

  text-transform: uppercase;

  border: 3px solid white;
  border-radius: 20px;
`

const HowTobuy = styled(Link)`
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
  font-size: 0.77rem;
  line-height: 1.55rem;
  font-weight: 500;

  color: #faa998;
`

const OptionIcon = styled.img``

const ExchangesBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  flex: 1 0 auto;
`

const ExchangeLabel = styled.p`
  font-family: Montserrat;
  font-size: 0.89rem;
  font-weight: 500;

  color: white;
`

const Exchanges = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  flex: 1 0 auto;
`

const ExchangeLink = styled.a`
  font-family: Montserrat;
  font-size: 0.89rem;
  font-weight: 500;

  color: white;
`

const TokenSale = () => (
  <Container>
    <Header>Приватная продажа токенов TWC</Header>
    <PriceBlock>
      <Price>
        <PriceLabel>сейчас:</PriceLabel>
        <PriceValue>1¢</PriceValue>
      </Price>
      <Price>
        <PriceLabel>на ICO:</PriceLabel>
        <PriceValue>5¢</PriceValue>
      </Price>
    </PriceBlock>
    <BuyButton>Купить TWC</BuyButton>
    <HowTobuy>Как купить токены?</HowTobuy>
    <PaymentOptions>
      <OptionLabel>Принимаем к оплате:</OptionLabel>
      <OptionIcon />
    </PaymentOptions>
    <ExchangesBlock>
      <ExchangeLabel>Продать TWC:</ExchangeLabel>
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
