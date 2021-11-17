import React, { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 5);
  };

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
        boxShadow: '3px 3px 6px rgba(5,5,5,.5)',
      }}
    >
      <h1>{count}</h1>
      <button style={{ margin: '15px' }} onClick={handleClick}>
        Add Five
      </button>
    </div>
  );
}
