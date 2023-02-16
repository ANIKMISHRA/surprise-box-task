import React, { useState } from 'react';

/**
 * Method to create a surprize box and confirm the winner and looser of surprize box.
 * @returns node
 */
function App() {
  // states
  const [user, setUser] = useState('');
  const [winners, setWinners] = useState([1, 3, 5]);
  const [users, setUsers] = useState([]);

  /**
   * Method to check the winner, looser and to stop re-enter of username.
   * @returns string
   */
  const handleCheckWinner = () => {
    if (users.includes(user)) {
      alert(`${user}, you already participated in this Surprise box and you cannot re-enter.`);
      return;
    }
    setUsers([...users, user]);

    if (winners.includes(users.length + 1)) {
      alert(`${user}, you are winner!`);
      console.log(`${user}, you are winner!`);
    } else {
      alert(`${user}, sorry you are loser.`);
      console.log(`${user}, sorry you are loser.`);
    }
  };

  return (
    <div>
      <h1>Surprise Box</h1>
      <input type="text" id="user-input" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleCheckWinner}>
        Check winner
      </button>
    </div>
  );
}

export default App;

