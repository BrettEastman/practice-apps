DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS customer (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cust_name VARCHAR(25),
  email VARCHAR(50),
  pw VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS user_info (
  address VARCHAR(100),
  zipcode INT NOT NULL PRIMARY KEY,
  phone INT,
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES customer(id)
);

CREATE TABLE IF NOT EXISTS cc_info (
  cc INT,
  exp VARCHAR(5),
  cvv INT,
  zipcode INT,
  user_id INT,
  FOREIGN KEY(zipcode) REFERENCES user_info(zipcode),
  FOREIGN KEY(user_id) REFERENCES customer(id)
);

