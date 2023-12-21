
import './App.css';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';

function Userform(props: any) {
  const [user, setUser] = useState<object>({})
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let users:any = user;
    users[event.target.name] = event.target.value;
    setUser(users)
  }
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(user)
    props.addUser(user);
  }
  return (

    <>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input name="id" onChange={(event) => handleChange(event)}></input>
        <label>FirstName</label>
        <input name="fname" onChange={(event) => handleChange(event)}></input>
        <label>Last Name</label>
        <input name="lname" onChange={(event) => handleChange(event)}></input>
        <button type="submit">submit</button>

      </form>
    </>
  );

}
export default Userform;