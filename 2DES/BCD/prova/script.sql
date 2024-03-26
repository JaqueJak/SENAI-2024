CREATE DATABASE IF NOT EXISTS manutencao_veiculos;

USE manutencao_veiculos;

CREATE TABLE IF NOT EXISTS Manutencao (
    ID_Manutencao INT AUTO_INCREMENT PRIMARY KEY,
    Inicio_Manutencao DATE,
    Fim_Manutencao DATE,
    Descricao VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Funcionario (
    Matricula INT PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(100),
    Marca VARCHAR(100),
    Ano INT,
    ID_Manutencao INT,
    FOREIGN KEY (ID_Manutencao) REFERENCES Manutencao(ID_Manutencao)
);

INSERT INTO Manutencao (Inicio_Manutencao, Fim_Manutencao, Descricao)
VALUES
    ('2023-02-25', '2023-03-04', 'Lanterna queimada'),
    ('2023-03-13', '2023-03-21', 'Farol queimado'),
    ('2023-03-29', '2023-04-05', 'Troca de pneus dianteiros'),
    ('2023-04-14', '2023-04-24', 'Troca de pneus dianteiros'),
    ('2023-04-30', '2023-05-07', 'Farol queimado'),
    ('2023-05-16', '2023-05-25', 'Troca de pneus traseiros'),
    ('2023-06-05', '2023-06-10', 'Retrovisor quebrado'),
    ('2023-06-25', '2023-07-02', 'Troca de óleo e revisão geral'),
    ('2023-07-15', '2023-07-19', 'Troca de Flúido de Freio'),
    ('2023-08-04', '2023-08-10', 'Problemas no cabo do acelerador'),
    ('2023-08-24', '2023-08-31', 'Pane elétrica'),
    ('2023-08-27', '2023-09-04', 'Rebimboca da parafuseta'),
    ('2023-08-30', '2023-09-04', 'Troca de cavalos por poneis'),
    ('2023-09-02', '2023-09-07', 'Lanterna queimada');


INSERT INTO Funcionario (Matricula, Nome, Telefone)
VALUES
    (48482, 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
    (48542, 'Jaqueline Teixeira', '19-23003-4864'),
    (48522, 'Keli Matos', '19-06486-6449,19-53266-7923'),
    (48502, 'Ursula Souza', '19-64378-2404'),
    (48562, 'Evandro Silva', '19-53315-2734');

INSERT INTO Veiculo (Placa, Modelo, Marca, Ano, ID_Manutencao)
VALUES
    ('DEA-7981', 'Uno', 'Fiat', 2005, 1),
    ('CBC-4945', 'Fiorino', 'Fiat', 2007, 2),
    ('BEE-7735', 'Saveiro', 'VW', 2015, 3),
    ('CBA-4403', 'Sandeiro', 'Renault', 2012, 4),
    ('BBC-8504', 'Palio', 'Fiat', 2004, 5),
    ('BEB-5885', 'Gol', 'VW', 2013, 6),
    ('EDB-2475', 'Ranger', 'Ford', 2005, 7),
    ('CBC-4945', 'Fiorino', 'Fiat', 2007, 8),
    ('EDB-2475', 'Ranger', 'Ford', 2005, 9),
    ('DEA-7981', 'Uno', 'Fiat', 2005, 10),
    ('CBA-4403', 'Sandeiro', 'Renault', 2012, 11),
    ('BBC-8504', 'Palio', 'Fiat', 2004, 12),
    ('BEE-7735', 'Saveiro', 'VW', 2015, 13),
    ('BEB-5885', 'Gol', 'VW', 2013, 14);
