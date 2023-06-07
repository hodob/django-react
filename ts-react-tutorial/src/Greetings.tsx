import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
//특정함수를 props 로 받아와야한다면?
onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.

};

// const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (

function Greetings({ name, mark,optional,onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
      <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
      </div>
      
    );
  }

//     const Greetings = ({ name, mark }: GreetingsProps) => (   //화살표 함수 사용
//   <div>
//     Hello, {name} {mark}
//   </div>
// );

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;