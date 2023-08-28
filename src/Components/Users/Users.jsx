import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Users() {
  const [users, setUsers] = useState([]);
    // const fetchUsers = ()=>{

    // }
    const fetchUsers = async()=>{
        

        const {data} = await axios.get('http://localhost:5000/api/user/all');

        setUsers(data);
    }
    useEffect(()=>{
        fetchUsers();
    },[]);

//   useEffect(() => {
//     fetch('/api/user')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Username:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
