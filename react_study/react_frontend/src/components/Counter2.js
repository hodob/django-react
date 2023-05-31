import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber2 => prevNumber2 + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count+ 1);
    setCount(count+ 1);
    console.dir(count);
  };

  const onClick2 = () => {
    setCount(count=> count+ 1);
    setCount(count=> count+ 1);
      console.dir(count);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onClick}>test</button>
      <button onClick={onClick2}>test</button>
    </div>
  );
}

export default Counter;