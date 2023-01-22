import React, { useState, useEffect } from 'react';

const Address = ({ handleState, handleInput }) => {

  const [ address1, setAddress1 ] = useState('');
  const [ address2, setAddress2 ] = useState('');
  const [ city, setCity ] = useState('');
  const [ homeState, setHomeState ] = useState('');
  const [ zip, setZip ] = useState('');
  const [ phone, setPhone ] = useState('');

  const fullAddress = address1 + ' ' + address2 + ', ' + city + ', ' + homeState;
  const assembledAddress = {address: fullAddress, zipcode: zip, phone: phone};

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => {
              setAddress1(e.target.value)
            }}
            value={address1}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Line 2"
            onChange={(e) => {
              setAddress2(e.target.value)
            }}
            value={address2}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => {
              setCity(e.target.value)
            }}
            value={city}>
          </input>
          <input
            type="text"
            placeholder="State"
            onChange={(e) => {
              setHomeState(e.target.value)
            }}
            value={homeState}>
          </input>
          <input
            type="text"
            placeholder="Zip Code"
            onChange={(e) => {
              setZip(e.target.value)
            }}
            value={zip}>
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            value={phone}>
          </input>
        </div>
      </form>
      <button onClick={() => {
        handleInput(assembledAddress);
        console.log('assembledAddress: ', assembledAddress);
        handleState(2);
        }}
      >
        Next
      </button>
    </div>
  )
};

export default Address;