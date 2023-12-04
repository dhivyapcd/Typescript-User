import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Userform from "./Userform";
import { useState, useRef } from "react";
import { SelectedUser } from "./SelectedUser";


function App(props: any) {
  const [users, setUsers] = useState([
    { id: 0, fname: "AAA", lname: "AAA", done: false },
    { id: 1, fname: "BBB", lname: "BBB", done: false },
    { id: 2, fname: "CCC", lname: "CCC", done: false },
  ]);
  const onaddUser = (user: any) => {
    const auser = [...users, user];

    setUsers(auser);
  };
  const handleChange =(i: any) => {
    let user = [...users];
    user[i].done = !user[i].done;
    setUsers(user);
  };
  return (
    <div className="App">
      <Userform addUser={onaddUser} />
      <ul>
        {users ? (
          users.map((user, i) => (
            <li key={user.id}>
              <input
                type="checkbox"
                onChange={() => handleChange(i)}
                checked={user.done}
              />
              {user.done?
              <SelectedUser user={user.fname+""+user.lname}/>:null}
              <span>
                Id:{user.id} {user.fname} {user.lname}
              </span>
            </li>
          ))
        ) : (
          <p>List empty</p>
        )}
      </ul>
    </div>
  );
}

export default App;
