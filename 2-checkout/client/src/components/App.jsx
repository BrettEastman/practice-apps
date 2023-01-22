import React, { useState, useEffect } from 'react';
import Customer from './Customer.jsx';
import Address from './Address.jsx';
import Billing from './Billing.jsx';
import Summary from './Summary.jsx';
import axios from 'axios';

const App = () => {

  const [formState, setFormState] = useState(2);
  const [customer, setCustomer] = useState({});
  const [address, setAddress] = useState({});
  const [billing, setBilling] = useState({});

  const submitData = () => {
    // let input = {...customer, ...address, ...billing}
    let input = {cust_name:"absolutely Real", email:"absolutelyreal@gmail.com", pw:"absolutelyrealpw", address:"1234 absolutely Real Blvd, SF, CA", zipcode:94134, phone:8675309, cc:1231221345235, exp:"0405", cvv:898, zipcode_bill:94134, session_id:"lkj2523l5kj2" };

    console.log(input);

    axios({
      method: 'post',
      url: '/checkout',
      data: input
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('error')
    });
  };


  return (
    <div>
      {/* <div>
        {formState === 0 && (<Customer handleState={setFormState} handleInput={setCustomer}/>)}
      </div>
      <div>
        {formState === 1 && (<Address handleState={setFormState} handleInput={setAddress}/>)}
      </div> */}
      <div>
        {formState === 2 && (<Billing handleState={setFormState} handleInput={setBilling}/>)}
      </div>
      <div>
        {formState === 3 && (<Summary handleState={setFormState} submitData={submitData}/>)}
      </div>
    </div>
  )
};

export default App;

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}