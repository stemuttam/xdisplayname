import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setFullName(""); // Ensure full name is not displayed on invalid input
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h2>Full Name Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Ensuring text is always present */}
      <h3>Full Name Display:</h3>
      <p>{fullName || "No name entered yet"}</p>
    </div>
  );
}

export default App;
