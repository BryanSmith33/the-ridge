import React from 'react'
import styled from 'styled-components'

const CSContainer = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background: #d82c2c;
  color: #fff;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ComingSoon = () => (
  <CSContainer>New Site Under Construction 🔨🔨🔨. Check Back Soon!</CSContainer>
)

export default ComingSoon