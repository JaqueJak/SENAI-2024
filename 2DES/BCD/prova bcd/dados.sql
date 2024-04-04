CREATE TABLE Veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Tipo VARCHAR(50),
    Diaria DECIMAL(10, 2)
);

CREATE TABLE Cliente (
    CPF VARCHAR(14) PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone VARCHAR(50)
);


CREATE TABLE Reserva (
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


INSERT INTO Veiculo (Placa, Modelo, Marca, Tipo, Diaria)
VALUES 
('DEA-7981', 'Uno', 'Fiat', 'standart', 100.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200.00);


INSERT INTO Cliente (CPF, Nome, Telefone)
VALUES 
('111.111.111-11', 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
('222.222.222-22', 'Jaqueline Teixeira', '19-23003-4864'),
('333.333.333-33', 'Keli Matos', '19-06486-6449,19-53266-7923'),
('444.444.444-44', 'Ursula Souza', '19-64378-2404'),
('555.555.555-55', 'Evandro Silva', '19-53315-2734');


INSERT INTO Reserva (CPF_cliente, Placa_veiculo, Data_reserva, Data_retirada, Data_devolucao, Dias, Status, Subtotal)
VALUES 
('111.111.111-11', 'DEA-7981', '2024-01-25', '2024-01-25', '2024-02-04', 10, 'concluido', 1000.00),
('222.222.222-22', 'CBC-4945', '2024-03-13', '2024-03-13', '2024-03-21', 8, 'concluido', 960.00),
('333.333.333-33', 'BEE-7735', '2024-03-29', '2024-03-29', '2024-04-05', 7, 'concluido', 700.00),
('444.444.444-44', 'CBA-4403', '2024-03-14', '2024-03-14', '2024-03-24', 10, 'concluido', 1000.00),
('444.444.444-44', 'BBC-8504', '2024-02-29', '2024-02-29', '2024-03-07', 7, 'concluido', 700.00),
('111.111.111-11', 'BEB-5885', '2024-02-16', '2024-02-16', '2024-03-25', 38, 'concluido', 3800.00),
('111.111.111-11', 'EDB-2475', '2024-02-05', '2024-02-05', '2024-03-10', 34, 'concluido', 6800.00),
('444.444.444-44', 'CBC-4901', '2024-02-25', '2024-02-25', '2024-03-02', 6, 'concluido', 720.00),
('111.111.111-11', 'EDB-2475', '2024-02-15', '2024-02-15', '2024-03-19', 33, 'concluido', 6600.00),
('444.444.444-44', 'DEA-7981', '2024-02-04', '2024-02-04', '2024-03-10', 35, 'concluido', 3500.00),
('555.555.555-55', 'CBA-4403', '2024-02-23', '2024-02-24', '2024-03-30', 35, 'concluido', 3500.00),
('333.333.333-33', 'BBC-8504', '2024-02-27', '2024-02-27', '2024-03-03', 5, 'concluido', 500.00),
('222.222.222-22', 'BEE-7735', '2024-02-29', '2024-02-29', '2024-03-03', 3, 'concluido', 300.00),
('111.111.111-11', 'BEB-5885', '2024-02-02', '2024-02-02', '2024-03-07', 34, 'concluido', 3400.00),
('555.555.555-55', 'CBA-4403', '2024-02-05', '2024-02-05', '2024-03-15', 39, 'concluido', 3900.00),
('333.333.333-33', 'BEE-7735', '2024-02-08', '2024-02-08', '2024-03-15', 36, 'concluido', 3600.00),
('444.444.444-44', 'BBC-8504', '2024-02-11', '2024-02-11', '2024-03-15', 33, 'concluido', 3300),