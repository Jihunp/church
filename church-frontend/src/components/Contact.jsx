import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`

const RightContent = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-weight: 200;
`

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: white;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.olive};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 20px;
  `

const Contact = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message" rows={10}/>
            <Button>send</Button>
          </Form>
        </LeftContent>
        <RightContent>
          <Map/>
        </RightContent>
      </Container>
    </Section>
  )
}

export default Contact;