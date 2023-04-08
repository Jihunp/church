import React from "react";
import {Routes, Route} from 'react-router-dom';
import styled from "styled-components";

//import pages
import Home from "./pages/Home";
//import About from "./pages/About"

//import images
import worship1 from "./assets/images/worship1.jpg";

//import components
//import NavBar from "./components/NavBar/NavBar"

import Contact from "./components/Contact";
import Hello from "./components/Hello";
import Team from "./components/Team";
import Who from "./components/Who";
import NavBar from "./components/NavBar";

//webkit-scrollbar is to erase scroll bar for chrome
const Container = styled.div`
  margin: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior: none;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-image: url(${worship1});
  background-size: 100%;
  opacity: 0.6;
  &::-webkit-scrollbar {
    display: none;
  };
`


function App() {

  return (
    <div>

    
    <Container>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}

      </Routes>
      <Hello />
      <Who />
      <Team />
      <Contact />
    </Container>
    </div>
  );
}

export default App;
