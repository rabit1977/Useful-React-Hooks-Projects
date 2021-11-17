import React, { useState } from 'react';
export default function App() {
  const [num, setNum] = useState(0);
  function incrementNumber() {
    setNum(num + 1);
  }
  function decrementNumber() {
    setNum(num - 1);
  }
  function resetNumber() {
    setNum(0);
  }

  return (
    <div
      style={{
        border: '2px solid black',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
        margin: '10px',
        boxShadow: '3px 3px 6px rgba(0,0,0,.5)',
      }}
    >
      <h1>{num}</h1>
      <button style={{ margin: '15px' }} onClick={incrementNumber}>
        Increment
      </button>
      <button style={{ marginBottom: '15px' }} onClick={decrementNumber}>
        Decrement
      </button>
      <button onClick={resetNumber}>Reset</button>
    </div>
  );
}
