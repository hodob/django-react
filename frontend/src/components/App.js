import "./App.css";
import React from "react";
import axios from "axios";
import Gallery from "./Gallery";

import { useNavigate } from "react-router-dom";


function App() {
  const navi = useNavigate();
  return (
    <>
    <button onClick={()=>{navi('/gallery');}}>test.</button>
    <button onClick={()=>{navi('/map');}}>map.</button>
  <Gallery />
  </>

  );
}

export default App;
