import React, { useState } from 'react';
export default function App() {
  const [arr, setArr] = useState([3, 6]);
  const [obj, setObj] = useState({ num: 1, name: 'Desmond' });

  const handleArrClick = () => {
    const newArr = [1, 5, 7];
    setArr([...arr, ...newArr]);
  };
  const handleObjClick = () => {
    const newObj = { name: 'Ifeanyi', age: 25 };
     setObj({ ...obj, ...newObj });
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
        boxShadow: '3px 3px 6px rgba(5,5,5,.5)', borderRadius: '10px'
      }}
    >
      <button style={{ margin: '15px' }} onClick={handleArrClick}>
        Set Array State
      </button>
      {arr}
      <button style={{ margin: '15px' }} onClick={handleObjClick}>
        Set Object State
      </button>
      {obj.name}
    </div>
  );
}
