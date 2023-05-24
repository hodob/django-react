import './App.css';
import React, { useState } from "react";
import axios from "axios";


function App() {

  const [text, setText] = useState("없음");
  // const csrf_token = Cookies.get('CSRF-Token-2NGYY');

  const clicked = () => {
    axios
      .get("http://127.0.0.1:8001", {
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
    </div>
  );
}

export default App;
