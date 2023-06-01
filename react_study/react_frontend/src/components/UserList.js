import React from 'react';

function User({ user,onRemove }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }


function UserList({ users,onRemove }) {

  return (
    <div>
      {/* <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div> */}
      {/* @@@@@@@@@@@@ */}
        {/* <User user={users[0]} />    
        <User user={users[1]} />
        <User user={users[2]} /> */}
        {/* @@@@@@@@@@ */}

        {/* {users.map(user => (
        <User user={user} key={user.id} />
      ))} */}

        {users.map(user => (    
        <User user={user} key={user.id} onRemove={onRemove}/>
      ))}

    </div>
  );
}

export default UserList;