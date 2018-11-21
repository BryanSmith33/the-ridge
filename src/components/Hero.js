import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/ridge_sunset.jpg'

const BrandContainer = styled.div`
  text-transform: uppercase;
  width: 100%;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${heroImg}) no-repeat center;
  background-size: cover;
  overflow: hidden;
  filter: grayscale(100%);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
`
const The = styled.span`
  font-size: 7em;
  line-height: 1em;
`
const Ridge = styled.span`
  font-size: 7em;
`
const SubHeader = styled.div`
  font-size: 2.65em;
  margin-top: 0.5em;
`

const Hero = () => (
  <BrandContainer>
    <The>the</The> <br />
    <Ridge>ridge</Ridge> <br />
    <SubHeader>Market & Cafe</SubHeader>
  </BrandContainer>
)

export default Hero
