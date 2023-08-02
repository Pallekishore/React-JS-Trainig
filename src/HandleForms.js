import React, { useState } from 'react';
import './HandleForms.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const HandleForms = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [userData, setUserData] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }

    const newUser = { name, number };
    setUserData([...userData, newUser]);
    //    setUserData([...userData, { name, number }]);

    // Clear the input fields after submitting
    setName('');
    setNumber('');
  };

  const handleDelete = (index) => {
    const updatedData = userData.filter((user, i) => i !== index);
    setUserData(updatedData);
  };

  return (
    <div className='mx-auto col-10 col-md-8 col-lg-6 mt-5 p-5 bg-secondary'>

      <form onSubmit={handleSubmit}>
        <div>
          <h1 className='text-center'>User Registration</h1>
          <label>Name:</label>
          <input type="text" className='form-control' placeholder="Enter name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label> Number:</label>
          <input type="text" className='form-control' placeholder="Enter number" value={number} onChange={handleNumberChange} />
        </div>
        <div class="text-center">
          <button type="submit" className='btn btn-success btn-sm' >Register</button>
        </div>
      </form>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            <span>{user.number}</span>
            <span>{user.name}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default HandleForms;
