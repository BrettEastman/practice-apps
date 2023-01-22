import React, { useState, useEffect } from 'react';

const Customer = ({ handleState, handleInput }) => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const assembledData = {cust_name: name, email: email, pw: password};

  return (
    <div>Please Fill Out
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}>
          </input>
        </div>
      </form>
      <button onClick={() => {
        handleInput(assembledData);
        console.log('assembledData: ', assembledData);
        handleState(1);
        }}
      >
        Next
      </button>
    </div>
  )
};

export default Customer;