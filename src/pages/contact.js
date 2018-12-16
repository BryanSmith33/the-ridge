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
  @media (max-width: 1124px) {
    height: initial;
    padding-top: 7em;
  }
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
  @media (max-width: 650px) {
    width: 90%
  }
`
const ContactInfoContainer = styled.div`
  width: 400px;
  @media (max-width: 650px) {
    width: 100%;
  }
`
const Info = styled.h3`
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 450px) {
    font-size: 1.2em;
  }
`
const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 575px;
  margin: 0.5em auto;
  position: relative;
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
  padding: 0.8em;
`

const Contact = () => (
  <Layout>
    <ContactContainer>
      <BackgroundFilter />
      <Title>Contact Us</Title>
      <InfoContainer>
        <ContactInfoContainer>
          <Info>
            14886 Traverse Ridge Rd <br />
            Draper, UT 84020
          </Info>
          <Info>
            <a href="tel:801-571-8000">(801) 571-8000</a>
          </Info>
          <Info>
            <DayContainer>
              <span>Mon/Tue</span> <span>Closed</span>
            </DayContainer>
            <DayContainer>
              <span>Wed/Thur</span> <span>11:30 AM - 8:30PM</span>
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
          </Info>
        </ContactInfoContainer>
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
