import React, { useState, useEffect } from 'react';

const Customer = ({ handleState, handleInput }) => {

  const [ name, setName ] = useEffect('');
  const [ email, setEmail ] = useEffect('');
  const [ password, setPassword ] = useEffect('');

  const assembledData = {cust_name: name, email: email, pw: password};

  return (
    <div>Please Fill Out
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {setName(e.target.value)}}
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
        console.log(assembledData);
        handleState(1);
        }
        }>Next</button>
    </div>
  )
};

export default Customer;