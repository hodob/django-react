
import React, { useRef, useState, useMemo, useCallback, useReducer } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

  function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }
  const initialState = {
    inputs : {
      username: '',
      email : ''
    },
    users: [
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
    ]
  };
function reducer (state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name] : action.value
        }
      };
    default :
      return state;
  }

}



function App() {
  
  const [state, dispatch] = useReducer(reducer,initialState)
  const {username, email} = state.inputs;
  
  const onChange = (e) =>{
    const{name, value} = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value,
    });
  }
  
  return (
    <div>
      <CreateUser
        // username={username}
        // email={email}
        onChange={onChange}
        // onCreate={onCreate}
        
      />
      {/* <UserList 
      // users={users}
      // onRemove={onRemove}
      // onToggle={onToggle}
      /> */}
      {/* <div>활성사용자 수 : {count}</div> */}
    </div>
    
  );
}
export default App;
