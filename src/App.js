import React, { useState } from 'react';

// Predefined winner number list
const WinnerNumberList = [1, 2, 3];

function SurpriseBox() {
  // Object to hold username visit counts
  const [visits, setVisits] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const currentVisits = visits[username] || 0;
    const updatedVisits = { ...visits, [username]: currentVisits + 1 };
    setVisits(updatedVisits);
  }

  function isWinner(username) {
    const visitCount = visits[username] || 0;
    return WinnerNumberList.includes(visitCount);
  }

  return (
    <div>
      <h1>Surprise Box</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" />
        <button type="submit">Submit</button>
      </form>
      {Object.keys(visits).map((username) => (
        <p key={username}>
          {username} has visited {visits[username]} times. {' '}
          {isWinner(username) ? 'winner!' : 'loser!.'}
        </p>
      ))}
    </div>
  );
}

export default SurpriseBox;
