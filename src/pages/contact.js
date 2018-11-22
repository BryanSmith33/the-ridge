import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import contactBg from '../images/contact.jpg'

const ContactContainer = styled.div`
  height: calc(100vh - 3.7em);
  background: url(${contactBg}) no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #eee;
`
const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: #000000cf;
`
const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;
  width: 80%;
`
const Address = styled.h3`
  font-family: 'Montserrat', sans-serif;
`
const ContactForm = styled.form`
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`
const Input = styled.input`
  width: 100%;
  margin: 0.3em 0;
  background: transparent;
  border: 2px solid #eee;
  height: 3em;
  color: #eee;
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 0.3em 0;
  background: transparent;
  border: 2px solid #eee;
  color: #eee;
  resize: none;
`
const Btn = styled.button`
  text-transform: uppercase;
  border: none;
  background: #eee;
  width: 100%;
  margin: 0.3em 0;
  padding: 0.4em;
`

const Contact = () => (
  <Layout>
    <ContactContainer>
      <BackgroundFilter />
      <Title>Contact Us</Title>
      <InfoContainer>
        <div>
          <Address>
            14886 Traverse Ridge Rd <br />
            Draper, UT 84020
          </Address>
          <Address>
            <a href="tel:801-571-8000">(801) 571-8000</a>
          </Address>
        </div>
        <ContactForm action="">
          <Input type="text" placeholder="NAME" />
          <Input type="email" placeholder="EMAIL" />
          <TextArea name="" id="" cols="30" rows="10" />
          <Btn>Submit</Btn>
        </ContactForm>
      </InfoContainer>
    </ContactContainer>
  </Layout>
)

export default Contact
