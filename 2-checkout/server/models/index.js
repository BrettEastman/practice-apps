const db = require("../db");

exports.save = function(obj, callback) {
  let { cust_name, email, pw, address, zipcode, phone, cc, exp, cvv, zipcode_bill, session_id } = obj;
  let query = `INSERT INTO customer (cust_name, email, pw, address, zipcode, phone, cc, exp, cvv, zipcode_bill, session_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  db.query(query, [cust_name, email, pw, address, zipcode, phone, cc, exp, cvv, zipcode_bill, session_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};