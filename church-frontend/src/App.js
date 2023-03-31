import React from "react";
import {Routes, Route} from 'react-router-dom'

//import pages
import Home from "./pages/Home"
//import About from "./pages/About"

//import components
import Navbar from "./components/NavBar"

//next thing to do is fetch data.
function App() {

  return (
    <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
    </div>
  );
}

export default App;
