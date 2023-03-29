import React from "react";
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Axios from "axios";

//import components
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const [data, setData] = useState("");

  // const getData = async() => {
  //   const response = await Axios.get("http://localhost:4000/api/ffpc");
  //   setData(response.data);
  // }

  const url = 'http://localhost:5000/'
  const getAllData = () => {
    Axios.get(`${url}ffpc`)
    .then((response) => {
      const allData = response.data.body
    })
    .catch(error => console.error`Error:${error}`)
  }

// next step is to find out how to connect front end and backend together
  useEffect(() => {
    getAllData()
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
