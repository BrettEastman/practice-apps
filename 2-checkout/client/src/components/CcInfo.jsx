import React, { useState, useEffect } from 'react';

const CcInfo = ({ handleState }) => {
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
      <button onClick={() => handleState(0)}>Purchase</button>
    </div>
  )
};

export default CcInfo;