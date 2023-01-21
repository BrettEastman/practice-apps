import React, { useState, useEffect } from 'react';

const UserInfo = ({ handleState }) => {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Address"></input>
        </div>
        <div>
          <input type="text" placeholder="Line 2"></input>
        </div>
        <div>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
          <input type="text" placeholder="Zip Code"></input>
        </div>
      </form>
      <button onClick={() => handleState(2)}>Next</button>
    </div>
  )
};

export default UserInfo;