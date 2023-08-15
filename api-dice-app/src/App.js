import React, { useState, useEffect } from 'react';
import { fetchRollNumber } from './DiceRollApi';
import './App.css';

function App() {
  const [rollNumber, setRollNumber] = useState(null);

  useEffect(() => {
    const fetchRoll = async () => {
      const number = await fetchRollNumber();
      console.log(number)
      setRollNumber(number);
    };

    fetchRoll();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Roll Dice</h1>
          {rollNumber !== null ? (
              <p>Your rolled number: {rollNumber}</p>
          ) : (
              <p>Loading...</p>
          )}
        </header>
      </div>
  );
}

export default App;


