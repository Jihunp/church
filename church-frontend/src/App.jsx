import React from "react";
import {Routes, Route} from 'react-router-dom';
import styled from "styled-components";

//import pages
import Home from "./pages/Home";
//import About from "./pages/About"

//import components
//import NavBar from "./components/NavBar/NavBar"

import Contact from "./components/Contact";
import Hello from "./components/Hello";
import Team from "./components/Team";
import Who from "./components/Who";

//webkit-scrollbar is to erase scroll bar for chrome
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background 
  &::-webkit-scrollbar {
    display: none;
  };
`


function App() {

  return (
    <Container>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}

      </Routes>
      <Hello />
      <Who />
      <Team />
      <Contact />
    </Container>
  );
}

export default App;
