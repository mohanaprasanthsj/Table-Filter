import './App.css';
import React, { useState } from 'react';

const StudentTable = () => {
  const initialData = [
    { id: 1, firstName: 'Karuna', lastName: 'Karan', email: 'Karuna@example.com', phone: '963-456-7890' },
    { id: 2, firstName: 'Kavin', lastName: 'Kumar', email: 'Kavin@example.com', phone: '987-654-3210' },
    { id: 3, firstName: 'Bala', lastName: 'Logesh', email: 'bala@example.com', phone: '635-123-4567' },
    { id: 4, firstName: 'Mohan', lastName: 'Prasanth', email: 'Mohan@example.com', phone: '895-123-4567' },
    { id: 5, firstName: 'Praveen', lastName: 'Kumar', email: 'praveen@example.com', phone: '975-123-4567' }
    
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredData = initialData.filter(item =>
      item.firstName.toLowerCase().includes(value) ||
      item.lastName.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value) ||
      item.phone.includes(value)
    );

    setData(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;










