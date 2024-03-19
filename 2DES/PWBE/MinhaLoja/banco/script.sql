-- DDL - Estrutura
<<<<<<< HEAD
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
=======
drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, nascimento)
values
("111.111.111-11","Jak","Eu","1980-01-01"),
("222.222.222-22","Line","Cabeçuda","1990-02-25"),
("333.333.333-33","Alci","MissD","1900-03-18"),
("444.444.444-44","Becca","Walker","1990-04-13"),
("555.555.555-55","Margaret","Cisa","1979-05-15");

select * from Clientes;
>>>>>>> de469db57cdc5540a9b9731e61aebc4e073bf7f5
