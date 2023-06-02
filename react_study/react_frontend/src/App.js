import React, { useState,useRef } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  const [input, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = input;
  const onChange = (e) => {
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
    
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;

  };

  return (
    <div>
      <CreateUser
        onCreate={onCreate}
        username={username}
        onChange={onChange}
        email={email}
      />
      <UserList users={users} />
    </div>
  );
}
export default App;
