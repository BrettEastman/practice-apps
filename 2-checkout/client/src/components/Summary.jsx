import React from 'react';

const Summary = ({ handleState, submitData }) => {
  return (
    <div>Order Summary
      <button onClick={() => {
        submitData()
        handleState(0)
        }}>Purchase</button>
    </div>
  )
};

export default Summary;