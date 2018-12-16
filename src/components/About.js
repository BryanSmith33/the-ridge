import React from 'react'
import styled from 'styled-components'
import aboutImg from '../images/about_us_bg.jpg'

const HoursContainer = styled.div`
  background: aquamarine;
  padding: 2em 3em;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: url(${aboutImg}) no-repeat center;
  filter: grayscale(100%);
  background-size: cover;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
`

const About = () => (
  <HoursContainer>
    <Title>Events</Title>
    <p>
      The ridge cafe started out as a...The ridge cafe started out as a...The
      ridge cafe started out as a... The ridge cafe started out as a... The
      ridge cafe started out as a... The ridge cafe started out as a... The
      ridge cafe started out as a... The ridge cafe started out as a... The
      
    </p>
  </HoursContainer>
)

export default About
