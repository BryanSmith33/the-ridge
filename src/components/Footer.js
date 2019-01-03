import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 3.75em;
  background: #111;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  @media (max-width: 650px) {
    /* margin-bottom: 4em; */
  }
  @media (max-width: 575px) {
    text-align: center;
    font-size: 0.8em;
  }
`
const Footer = () => (
  <FooterContainer>
    the ridge market & cafe // all rights reserved {new Date().getFullYear()}
  </FooterContainer>
)

export default Footer