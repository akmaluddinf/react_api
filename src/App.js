import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    //fetching data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <h1>Fetching data from API</h1>
      <div>
        <Users data={users} />
      </div>
    </>
  );

}

export default App;
