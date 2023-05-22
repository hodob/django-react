import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import CSRFToken from './csrftoken';

function App() {
  

  // axios.defaults.xsrfCookieName = 'csrftoken';
  // axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  const [text, setText] = useState("없음");
  <CSRFToken />
  const clicked = () => {
    axios
      .get("http://127.0.0.1:8000", {
        params: {
          abc: "가나다",
        },
      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))
      ;
  };


  return (


    <div>
      <h1>{text}</h1>
      <button onClick={clicked}>클릭</button>
    </div>
  );
}

export default App;
