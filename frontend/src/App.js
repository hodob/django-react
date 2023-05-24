import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';


function App() {
  
  const [text, setText] = useState("없음");
  // const csrf_token = Cookies.get('CSRF-Token-2NGYY');

  const clicked = () => {
    axios
      .get("http://127.0.0.1:8000", {
        params: {
          abc: "가나다",
        },

      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))      ;
    
  };
  const clicked2 = () => {
    axios
      .get("http://127.0.0.1:8000/api", {
        params: {
          abc: "가나다",
        },

      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))      ;
    
  };
  const clicked3 = () => {
    axios
      .get("http://127.0.0.1:8000/api2", {
        params: {
          abc: "가나다",
        },

      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))      ;
    
  };
  const clicked4 = () => {
    axios
      .get("http://127.0.0.1:8000/api3", {
        params: {
          abc: "가나다",
        },

      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))      ;
    
  };


  return (


    <div>
      <h1>{text}</h1>
      <button onClick={clicked}>클릭기본데이터</button>
      <button onClick={clicked2}>클릭초데이터</button>
      <button onClick={clicked3}>api5</button>
      <button onClick={clicked4}>다른데이터가져고이</button>
    </div>
  );
}

export default App;
