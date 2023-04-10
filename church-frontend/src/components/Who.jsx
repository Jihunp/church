import React from "react";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const LeftContent = styled.div`
  flex: 1;
`
const RightContent = styled.div`
  flex 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`
const Title = styled.h1`
  font-size: 80px;
`
const Manifesto = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const Line = styled.div`
  color: red;
  background: red;
  border-radius: 5px;
  height: 3px;
  width: 30px;
`
const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.olive};
`
const Description = styled.p`
  color: black;
  opacity: 0.6;
`
const Button = styled.button`
font-size: 14px;
font-weight: 500;
width: 160px;
padding: 10px;
background-color: ${(props) => props.theme.colors.olive};
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
  color: black;
}
`


const Who = () => {
  return (
    <Section> 
      <Container>
        <LeftContent>{/* 3d models */}</LeftContent>
        <RightContent>
          <Title>Christ Centered</Title>
          <Manifesto>
            <Line></Line>
            <Subtitle>Who We Are</Subtitle>
          </Manifesto>
          <Description>Followers of Christ, who want to see heaven on earth by looking towards Jesus.</Description>
          <Button>See what we're doing</Button>
        
          {/* < Img src={require("../assets/images/EM.jpg")}/> */}
        </RightContent>
      </Container>
    </Section>
  )
}

export default Who;