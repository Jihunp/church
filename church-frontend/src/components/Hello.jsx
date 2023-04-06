import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #8d8b55;
  scroll-snap-align: center;
`

const Hello = () => {
  return (
    <Section> Hello</Section>
  )
}

export default Hello;