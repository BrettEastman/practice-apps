import React, { useState, useEffect } from 'react';
import Customer from './Customer.jsx';
import UserInfo from './UserInfo.jsx';
import CcInfo from './CcInfo.jsx';

const App = () => {

  const [formState, setFormState] = useState(0);
  const [customerInfo, setCustomerInfo] = useState([]);
  // state that determines what screen you are on
  // usestate renders to O

  const postData = () => {
    axios({
      method: 'post',
      url: '/checkout',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
  }



  return (
    <div>
      <div>
        {formState === 0 && (<Customer handleState={setFormState}/>)}
      </div>
      <div>
        {formState === 1 && (<UserInfo handleState={setFormState}/>)}
      </div>
      <div>
        {formState === 2 && (<CcInfo handleState={setFormState}/>)}
      </div>
    </div>
  )
};

export default App;

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}