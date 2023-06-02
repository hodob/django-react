import React, { useState,useReducer } from 'react';



function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT' :
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
  
}



function Counter() {
  const [number, setNumber] = useState(0);
  const [number2,dispatch] = useReducer(reducer,0);


  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }
  const onIncrease2 = () => {
    dispatch({type:'INCREMENT'})
  };
  const onDecrease2 = () => {
    dispatch({type:'DECREMENT'})
  }

  return (
    <div>
      <h1>{number2}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;