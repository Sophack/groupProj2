DROP DATABASE IF EXISTS recipesDB;

DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS directions_table;


CREATE DATABASE recipesDB;
USE recipesDB;

CREATE TABLE directions_table (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE ingredients (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  prep_time VARCHAR(30) NOT NULL,
  directions VARCHAR(30),

);

-- should be more specified tables 
-- recipes tables, categories, ingredients, directions, measurements, 
-- with properties like 
