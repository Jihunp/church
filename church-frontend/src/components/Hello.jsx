import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar"
//import {theme} from "../Theme.js";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const LeftContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`
const RightContent = styled.div`
  flex 3;
  position: relative;
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
width: 100px;
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
const Img = styled.img`
  height: 400px;
  width:  auto;
  object-fit: contain;
  border-radius: 45%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation

`

const Hello = () => {
  return (
    <Section> 
      <Navbar />
      <Container>
        <LeftContent>
          <Title>God. Spirit. Jesus.</Title>
          <Manifesto>
            <Line></Line>
            <Subtitle>What we believe</Subtitle>
          </Manifesto>
          <Description>Followers of Christ, who want to see heaven on earth by looking towards Jesus.</Description>
          <Button>Learn More</Button>
        </LeftContent>
        <RightContent>
          {/* 3d models */}
          <Img src={require("../assets/images/EM.jpg")}/>
        </RightContent>
        
      </Container>
    </Section>
  )
}

export default Hello;