import { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  // console.log(count);
  }, [count]);

  return (
    <div className='border-2 m-4 p-4 border-blue-300'>
      <h2 className='p-b2 mb-2 font-semibold text-lg '>{count}</h2>
      <button
        className='border-2 text-xl font-semibold border-blue-300 px-4 py-1 rounded-lg'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
export default App;
