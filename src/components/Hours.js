import React from 'react'
import styled from 'styled-components'
import hoursBg from '../images/hours_bg.jpg'

const HoursContainer = styled.div`
  width: 50%;
  background: tomato;
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
`
const Day = styled.span``
const Time = styled.span``
const Hours = () => (
  <HoursContainer>
    <BackgroundFilter />
    <Title>hours</Title>
    <DayContainer>
      <Day>Monday & Tuesday</Day> <Time>Closed</Time>
    </DayContainer>
    <DayContainer>
      <Day>Wednesday & Thursday</Day> <Time>11:30 AM - 8:30PM</Time>
    </DayContainer>
    <DayContainer>
      <Day>Friday</Day> <Time>11:30AM - 9:00PM</Time>
    </DayContainer>
    <DayContainer>
      <Day>Saturday</Day> <Time>9:00AM - 9:00PM</Time>
    </DayContainer>
    <DayContainer>
      <Day>Sunday</Day> <Time>9:00AM - 2:00PM</Time>
    </DayContainer>
  </HoursContainer>
)

export default Hours
