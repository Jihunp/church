import React from "react";
import {Routes, Route} from 'react-router-dom';
import styled, {ThemeProvider} from "styled-components";
import {theme} from "./Theme";

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
  color: ${(props) => props.theme.colors.test};
  margin: auto;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior: none;
  overflow-y: auto;
  scrollbar-width: none;
  background-image: url(${worship1});
  background-size: 100%;
  &::-webkit-scrollbar {
    display: none;
  };
`



function App() {

  return (
    <div>

    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
        </Routes>
        <Hello />
        <Who />
        <Team />
        <Contact />
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
