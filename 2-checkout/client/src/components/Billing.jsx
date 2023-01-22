import React, { useState, useEffect } from 'react';

const Billing = ({ handleState, handleInput }) => {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Credit Card Number"></input>
        </div>
        <div>
          <input type="text" placeholder="CVV"></input>
        </div>
        <div>
          <input type="text" placeholder="Billing Zip Code"></input>
        </div>
      </form>
      <button onClick={() => handleState(3)}>Next</button>
    </div>
  )
};

export default Billing;