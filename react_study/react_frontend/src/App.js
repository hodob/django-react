
import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }
  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

  const [users,  setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  const nextId = useRef(4);
  // const onCreate = () => {
  //   // 나중에 구현 할 배열에 항목 추가하는 로직
  //   // ...
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   // setUsers([...users, user]); //실제 유저가 추가되는 로직
  //   setUsers(users.concat(user));
  //   setInputs({
  //     username: "",
  //     email: "",
  //   });

  //   nextId.current += 1;
    
  // };

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);


  // const onRemove = id => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   setUsers(users.filter(user => user.id !== id));
  // };

  const onRemove = useCallback(
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
  // const onToggle = id => {

  //   setUsers(
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // };

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        
      />
      <UserList users={users}
      onRemove={onRemove}
      onToggle={onToggle}
      />
      <div>활성사용자 수 : {count}</div>
    </div>
    
  );
}
export default App;
