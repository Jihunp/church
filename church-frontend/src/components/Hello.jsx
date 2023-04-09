import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar"

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
`
const RightContent = styled.div`
`
const Title = styled.div`
`
const CoolPic = styled.div`
`
const Manifesto = styled.div`
`
const Line = styled.div`
  color: red;
  background: red;
  height: 10%;
  width: 10%;
`
const Subtitle = styled.div`
`
const Description = styled.div`
`
const Button = styled.button`
`
const Img = styled.img`
  height: 200px;
  opacity: none;
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