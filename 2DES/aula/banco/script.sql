drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer not null primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe Clientes;

-- DML - Popular o com dados de testes
insert into clientes(cpf, nome, sobrenome, nascimento) values
("111.111.111-11", "Jak", "Eu", "2002-08-22"),
("222.222.222-22", "Margaret", "Cisa", "1988-07-12"),
("333.333.333-33", "Line", "Cabeçuda", "1997-09-04"),
("444.444.444-44", "Alci", "MissD", "1700-04-11"),
("555.555.555-55", "Becca", "Walker", "1996-06-16");

select * from Clientes;