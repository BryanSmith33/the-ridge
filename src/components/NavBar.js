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
`
const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
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
      <li style={{margin: `0 1em`}}>
        <Link to="/about/">about</Link>
      </li>
      <li>
        <Link to="/contact/">contact</Link>
      </li>
    </NavLinks>
  </Nav>
)

export default NavBar
