import { useState } from "react";
import './App.css';

function App() {

  const [fullName, setFullName] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setFullName({
      ...fullName,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullName.firstName !== undefined && fullName.lastName !== undefined) {
      setIsSubmit(true);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label htmlFor="firstName">
            First Name:
            <input
              type='text'
              id='firstName'
              name='firstName'
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </label>
        </div>
        <br />

        <div>
          <label htmlFor="lastName">
            Last Name:
            <input
              type='text'
              id='lastName'
              name='lastName'
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </label>
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      {isSubmit && (
        <div>
          {`Full Name: ${fullName.firstName} ${fullName.lastName}`}
        </div>
      )}
    </div>
  );
}

export default App;
