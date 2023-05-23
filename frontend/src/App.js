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
        // headers:{
        //   'csrftoken':csrf_token
        // }
      })
      // .then((response) => console.log(response));
      .then((response) => setText(JSON.stringify(response.data)))
      ;
    

    // console.log(csrf_token);
    // axios.get('api',{
    //   params:{abs:"가나다"},
    //   headers:{
    //     test:123,
    //   },
    // })
  };


  return (


    <div>
      <h1>{text}</h1>
      <button onClick={clicked}>클릭</button>
    </div>
  );
}

export default App;
