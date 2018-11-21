import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import menuBg from '../images/menu_bg.jpg'

const MenuContainer = styled.div`
  width: 50%;
  background: slategray;
  padding: 2em 1em;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: url(${menuBg}) no-repeat center;
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
  background: #2b2933c7;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`
const MenuText = styled.p`
  padding: 0 3em;
  position: relative;
`
const MenuLink = styled(Link)`
  text-decoration: underline;
`

const Menu = () => (
  <MenuContainer>
    <BackgroundFilter />
    <Title>Menu</Title>
    <MenuText>
      Our menu changes seasonally and includes the freshest locally sourced
      ingredients. You can <MenuLink to="/menu/">view our menu here</MenuLink>.
    </MenuText>
  </MenuContainer>
)

export default Menu
