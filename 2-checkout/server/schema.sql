DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS customer (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cust_name VARCHAR(25),
  email VARCHAR(50),
  pw VARCHAR(25),
  address VARCHAR(100),
  zipcode VARCHAR(10),
  phone VARCHAR(10),
  cc VARCHAR(20),
  exp VARCHAR(4),
  cvv INT,
  zipcode_bill VARCHAR(10),
  session_id VARCHAR(50) UNIQUE
);

