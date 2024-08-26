import { useState,useEffect } from "react";
import './App.css';

function App() {

  const [name,setName] = useState("");

  const handleSubmit =(event)=>{
    event.preventDefault();
    setName(`${event.target.fname.value} ${event.target.lname.value}`);
  };
  


  return (
    <div>
      <h1>Full Name Display</h1>
      <form action="#" onSubmit={handleSubmit}>
      <lable for="fname">First Name: </lable>
      <input type='text' id='fname' name='fname' placeholder="Enter first name" required></input>
      <br></br>
      <label for="lname">Last Name: </label>
      <input type='text' id='lname' name='lname' placeholder="Enter last name" required></input>

      <br></br>
      <button  type='submit' value='submit' >Submit</button>
      </form>
      <br/>
      {name && <p>Full Name : {name}</p>}
    </div>
  );
}

export default App;
