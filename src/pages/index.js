import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PlatfromSection from '../components/platformSection'
import Publications from '../components/publications'
import BigLogo from '../components/bigTowecoLogo'

const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`

const IndexPage = () => (
  <Layout>
    <FirstRow>
      <PlatfromSection />
    </FirstRow>
    <Publications />
    <BigLogo />
  </Layout>
)

export default IndexPage
