import React, { useState } from 'react';

function Counter() {
  const [number, setNumber2] = useState(0);
//   배열 비구조화 할당 통해서 위 코드로 가능
// const numberState = useState(0);
// const number = numberState[0];
// const setNumber = numberState[1];

  const onIncrease = () => {
    setNumber2(number + 1);
  }

  const onDecrease = () => {
    setNumber2(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;