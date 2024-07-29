import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://deals-data-default-rtdb.firebaseio.com/userdata.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Debugging line to check the fetched data
        // If data is an object and you need an array, convert it
        if (typeof data === 'object' && !Array.isArray(data)) {
          const dataArray = Object.values(data);
          setUsers(dataArray);
        } else {
          setUsers(data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <h1>User Details</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>
                <img src={user.image} alt={user.username} width="100" />
              </td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.Disignation}</td>
              <td>{user.gender}</td>
              <td>{user.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;