import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Hours from '../components/Hours'
import Menu from '../components/Menu'
import Event from '../components/Event'

const HoursMenuContainer = styled.section`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const IndexPage = () => (
  <Layout>
    <Hero />
    <HoursMenuContainer>
      <Hours />
    </HoursMenuContainer>
  </Layout>
)

export default IndexPage
