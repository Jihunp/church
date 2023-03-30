import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//import components
import Home from "./pages/Home"
//import About from "./pages/About"

//pages
import Navbar from "./components/navBar"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
