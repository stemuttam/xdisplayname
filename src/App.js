import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(null); // Change to null so it doesn't show empty state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setFullName(null); // Prevent displaying an empty name
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h2>Full Name Display</h2>
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

      {/* Show Full Name only if it's not null */}
      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
