import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PlatfromSection from '../components/platformSection'
import Publications from '../components/publications'
import BigLogo from '../components/bigTowecoLogo'
import TokenSale from '../components/tokenSale'

const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  margin-bottom: 258px;
`

const IndexPage = () => (
  <Layout>
    <FirstRow>
      <PlatfromSection />
      <TokenSale />
    </FirstRow>
    <Publications />
    <BigLogo />
  </Layout>
)

export default IndexPage
