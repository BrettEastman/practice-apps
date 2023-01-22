import React, { useState, useEffect } from 'react';

const Billing = ({ handleState, handleInput }) => {

  const [ credit, setCredit ] = useState('');
  const [ exp, setExp ] = useState('');
  const [ cvv, setCvv ] = useState('');
  const [ zipcode, setZipcode ] = useState('');

  const assembledCc = {cc: credit, exp: exp, cvv: cvv, zipcode_bill: zipcode};

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Credit Card Number"
            onChange={(e) => {
              setCredit(e.target.value)
            }}
            value={credit}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Expiration Date"
            onChange={(e) => {
              setExp(e.target.value)
            }}
            value={exp}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="cvv"
            onChange={(e) => {
              setCvv(e.target.value)
            }}
            value={cvv}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Zip Code"
            onChange={(e) => {
              setZipcode(e.target.value)
            }}
            value={zipcode}>
          </input>
        </div>
      </form>
      <button onClick={() => {
        handleInput(assembledCc);
        console.log('assembledCc: ', assembledCc);
        handleState(3);
        }}
      >
        Next
      </button>
    </div>
  )
};

export default Billing;