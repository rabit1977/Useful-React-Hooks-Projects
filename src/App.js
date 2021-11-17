import { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const endPoint =
    'https://my-json-server.typicode.com/ifeanyidike/jsondata/users';

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(endPoint);
      setUsers(data);
    };
    fetchUsers();
    // console.log(count);
  }, []);

  return (
    <div className='border-2 rounded-lg m-4 p-4 border-blue-300'>
      {users.map((user) => (
        <div className='border-b pb-3'>
          <h2 className='text-2xl  font-bold'>{user.name}</h2>
          <p>Occupation: {user.job}</p>
          <p>Sex: {user.sex}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
