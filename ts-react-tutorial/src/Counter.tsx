import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}


function Counter() {
  // const [count, setCount] = useState<number>(0);

  // 렇다면 useState 를 사용 할 때 어떤 상황에 Generics 를 사용하는게 좋을까요?\
// 바로, 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.
  // type Information = { name: string; description: string };
// const [info, setInformation] = useState<Information | null>(null);
  // const onIncrease = () => setCount(count +1);
  // const onDecrease = () => setCount(count -1);

  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return(
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )

}
export default Counter;
