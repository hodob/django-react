import "./App.css";
import { useState } from 'react';





function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
export default App;
