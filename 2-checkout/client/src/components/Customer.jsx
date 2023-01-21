import React, { useState, useEffect } from 'react';

const Customer = ({ handleState }) => {
  return (
    <div>Please Fill Out
      <form>
        <div>
          <input type="text" placeholder="Name"></input>
        </div>
        <div>
          <input type="text" placeholder="Email"></input>
        </div>
        <div>
          <input type="text" placeholder="Password"></input>
        </div>
      </form>
      <button onClick={() => handleState(1)}>Next</button>
    </div>
  )
};

export default Customer;