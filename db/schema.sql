DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR (255) NOT NULL,
  eaten BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers
  (burger_name)
  VALUES
  ("Cheeseburger"),
  ("Hamburger");
  ("Turkey Burger"),
  ("Veggie Burger"),
  ("Salmon Burger")


SELECT * FROM burgers;