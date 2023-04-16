import React from "react";
import styled from "styled-components";

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
`


const RightContent = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-weight: 200;
`

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
`

const TextArea = styled.textarea`
  padding: 20px;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Button = styled.button`
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
            <Input placeholder="Write your message" />
            <button>send</button>
          </Form>
        </LeftContent>
      </Container>
    </Section>
  )
}

export default Contact;