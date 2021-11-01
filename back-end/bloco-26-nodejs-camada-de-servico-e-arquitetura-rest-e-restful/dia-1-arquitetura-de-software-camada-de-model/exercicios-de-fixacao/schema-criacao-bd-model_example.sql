CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
	id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
VALUES
	('Samuel', 'Constantino de Oliveira', 'Junior', '1996-09-02', 'brasileiro'), 
	('Samara', 'Everton', 'Santos', '1993-10-15', 'brasileira'),
    ('Marina', 'Luz', 'Rocha', '2004-06-15', 'brasileiro');