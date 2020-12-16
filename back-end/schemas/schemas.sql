-- write the database name that you use here
USE db_name;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);
-- create table users to make the user create account in our website to see the articles.....
create table users (
    id INT AUTO_INCREMENT NOT NULL,
    Name varchar (255) , 
    Age INT (100),
    Email varchar (100),
    password varchar (100),

    PRIMARY KEY (id)
);


create table favorit (
    id INT AUTO_INCREMENT NOT null,
    favorit varchar(255),
    for
)