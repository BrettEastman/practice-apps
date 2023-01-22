import React from 'react';

const Summary = ({ handleState, submitData }) => {
  return (
    <div>Order Summary
      <button onClick={() => {submitData()}}>Purchase</button>
    </div>
  )
};

export default Summary;