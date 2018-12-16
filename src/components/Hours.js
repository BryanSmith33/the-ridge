import React from 'react'
import styled from 'styled-components'
import hoursBg from '../images/hours_bg.jpg'

const HoursContainer = styled.div`
  width: 50%;
  padding: 2em 3em;
  font-family: 'Montserrat', sans-serif;
  background: url(${hoursBg}) no-repeat center;
  background-size: cover;
  position: relative;
  @media (max-width: 1000px) {
    width: initial;
    height: 450px;
  }
`
const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: #ffffffbf;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`
const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 575px;
  margin: 0.5em auto;
  position: relative;
  font-weight: bold;
`
const Hours = () => (
  <HoursContainer>
    <BackgroundFilter />
    <Title>hours</Title>
    <DayContainer>
      <span>Monday & Tuesday</span> <span>Closed</span>
    </DayContainer>
    <DayContainer>
      <span>Wednesday & Thursday</span> <span>11:30 AM - 8:30PM</span>
    </DayContainer>
    <DayContainer>
      <span>Friday</span> <span>11:30AM - 9:00PM</span>
    </DayContainer>
    <DayContainer>
      <span>Saturday</span> <span>9:00AM - 9:00PM</span>
    </DayContainer>
    <DayContainer>
      <span>Sunday</span> <span>9:00AM - 2:00PM</span>
    </DayContainer>
  </HoursContainer>
)

export default Hours
