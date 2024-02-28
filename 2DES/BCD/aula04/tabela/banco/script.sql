drop database if exists transportadora;
create database transportadora;
use transportadora;

create table cliente(
    idCliente int not primary key auto_increment,
    nome varchar(50) not null,
    endereco float(10,2) not null,
    telefone varchar(20) not null,
    email varchar(50) not null
);

create table funcionario(
    idFuncionario int not primary key auto_increment,
    nome varchar(50) not null,
    cargo varchar(30) not null,
    salario float(20,2) not null
);

create table rota(
    idRota int not primary key auto_increment,
    origem varchar(100) not null,
    destino varchar(30) not null,
    distancia float(10,2)
);

create table veiculo(
    idVeiculo int not primary key auto_increment,
    placa varchar(10) not null,
    modelo varchar(30) not null,
    capacidade float(10,2) not null
);

create table entrega(
    idEntrega int not primary key auto_increment,
    placa varchar(10) not null,
    motorista int not null,
    idRota int not null,
    inicio datetime,
    fim datetime,
    status varchar(20)

);

create table pedido(
    idPedido int not null primary key auto_increment,
    idCiente int not null,
    idEntrega int not null,
    dataPedido timestamp not null,
    valor float(10,2) not null
);

alter table pedido add foreign key(idCliente) references cliente(idCliente)
alter table pedido add foreign key(idEntrega) references Entrega(idEntrega)

alter table entrega add foreign key(idCliente) references cliente(idCliente)

show tables;