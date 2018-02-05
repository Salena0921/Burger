DROP DATABASE if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN NOT NULL
);

