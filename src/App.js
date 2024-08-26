import { useState } from "react";
import './App.css';

function App() {

  // Initialize with empty strings to avoid undefined issues
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
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

    // Check that both fields are filled before setting isSubmit to true
    if (fullName.firstName.trim() && fullName.lastName.trim()) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
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
              value={fullName.firstName}
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
              value={fullName.lastName}
              required
            />
          </label>
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      {isSubmit && (
        <div className="result">
          {`Full Name: ${fullName.firstName} ${fullName.lastName}`}
        </div>
      )}
    </div>
  );
}

export default App;
