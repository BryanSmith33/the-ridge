import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const Nav = styled.nav`
  height: 4.5em;
  width: 100%;
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: fixed;
  z-index: 2;
  font-family: 'Montserrat', sans-serif;
  background: #00000070;
  @media (max-width: 650px) {
    justify-content: center;
  }
`
const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  @media (max-width: 650px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    background: #111;
    padding: 1em;
  }
`

const NavBar = () => (
  <Nav>
    <div>
      <Link to="/">the ridge market & cafe</Link>
    </div>
    <NavLinks>
      <li>
        <Link to="/menu/">menu</Link>
      </li>
      <li style={{ margin: `0 1em` }}>
        <Link to="/about/">events</Link>
      </li>
      <li>
        <Link to="/contact/">contact</Link>
      </li>
    </NavLinks>
  </Nav>
)

export default NavBar
