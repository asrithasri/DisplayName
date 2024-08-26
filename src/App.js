import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.firstName.trim() && fullName.lastName.trim()) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      alert("Please fill out both first name and last name.");
    }
  };

  return (
    <div className="app-container">
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>

        <div className="form-group">
          <label htmlFor="firstName">First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={fullName.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
            
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={fullName.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="result">
          <h2>{`Full Name:${fullName.firstName} ${fullName.lastName}`}</h2>
            
        </div>
      )}
    </div>
  );
}

export default App;
