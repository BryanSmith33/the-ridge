import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import menuBg from '../images/menu.jpg'

const MenuHeader = styled.div`
  height: 400px;
  background: url(${menuBg}) no-repeat center;
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
  background: #e7e7e7cf;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  color: #111;
`

const Menu = () => (
  <Layout>
    <MenuHeader>
      <BackgroundFilter />
      <Title>menu</Title>
    </MenuHeader>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Menu
