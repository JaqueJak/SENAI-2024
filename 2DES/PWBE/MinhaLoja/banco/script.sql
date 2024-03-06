-- DDL - Estrutura
drop database if exists papelaria;
create database papelaria;
use papelaria;
create table Papelaria(
    id integer primary key auto_increment,
    produto varchar(50) not null unique,
    estoque varchar(50) not null,
    valor varchar(50) not null
);
describe Papelaria;

-- DML - Popular com dados de teste
insert into Papelaria(produto, estoque, valor)
values
("Tesoura sem ponta","15","9,90"),
("Cola bastão","10","12,98"),
("Folha A4","23","29,90"),
("Caneta BIC Vermelha","34","2,90"),
("Caneta BIC Azul","44","2,90");


select * from Papelaria;