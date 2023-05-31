import "./App.css";
import { useState } from 'react';





function App() {


  return (
    <>
            <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </>
  );
}
export default App;

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
