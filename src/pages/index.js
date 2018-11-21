import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Hours from '../components/Hours'
import Menu from '../components/Menu'
import About from '../components/About'

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
      <Menu />
    </HoursMenuContainer>
    <About />
  </Layout>
)

export default IndexPage
