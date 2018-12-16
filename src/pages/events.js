import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import eventBg from '../images/about.jpg'

const EventsContainer = styled.div`
  height: calc(100vh - 3.7em);
  background: url(${eventtBg}) no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
`
const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: #000000cf;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`

const Events = () => (
  <Layout>
    <EventsContainer>
      <BackgroundFilter />
      <Title>upcoming events</Title>
    </EventsContainer>
  </Layout>
)

export default Events
