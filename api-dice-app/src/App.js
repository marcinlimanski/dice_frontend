import React, { useState, useEffect } from 'react';
import { fetchRollNumber } from './DiceRollApi';
import './App.css';

function App() {
    const [rollNumber, setRollNumber] = useState(null);

    const handleRollClick = async () => {
        const number = await fetchRollNumber();
        setRollNumber(number);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Roll Number App</h1>
                {rollNumber !== null ? (
                    <p>Your rolled number: {rollNumber}</p>
                ) : (
                    <p>No number rolled yet.</p>
                )}
                <button onClick={handleRollClick}>Roll the Number</button>
            </header>
        </div>
    );
}

export default App;