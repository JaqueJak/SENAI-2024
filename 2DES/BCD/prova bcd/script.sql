CREATE DATABASE IF NOT EXISTS aluguel_de_veiculo;
USE aluguel_de_veiculo;


CREATE TABLE IF NOT EXISTS Veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Tipo VARCHAR(50),
    Diaria DECIMAL(10, 2)
);


CREATE TABLE IF NOT EXISTS Cliente (
    CPF VARCHAR(14) PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Reserva (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CPF_cliente VARCHAR(14),
    Placa_veiculo VARCHAR(10),
    Data_reserva DATE,
    Data_retirada DATE,
    Data_devolucao DATE,
    Dias INT,
    Status VARCHAR(50),
    Subtotal DECIMAL(10, 2),
    FOREIGN KEY (CPF_cliente) REFERENCES Cliente(CPF),
    FOREIGN KEY (Placa_veiculo) REFERENCES Veiculo(Placa)
);

show tables;