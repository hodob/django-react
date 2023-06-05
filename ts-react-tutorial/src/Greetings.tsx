import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

// const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (

function Greetings({ name, mark }: GreetingsProps) {
    return (
      <div>
        Hello, {name} {mark}
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