import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Hello = () => {
  return (
    <Section> 
      <Navbar />
    </Section>
  )
}

export default Hello;