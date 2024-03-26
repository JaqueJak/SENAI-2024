CREATE DATABASE IF NOT EXISTS gerenciamento_manutencao;
USE gerenciamento_manutencao;

CREATE TABLE IF NOT EXISTS Manutencao (
    ID_Manutencao INT AUTO_INCREMENT PRIMARY KEY,
    Inicio_Manutencao DATE,
    Fim_Manutencao DATE,
    Descricao VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Ano INT,
    ID_Manutencao INT,
    FOREIGN KEY (ID_Manutencao) REFERENCES Manutencao(ID_Manutencao)
);

CREATE TABLE IF NOT EXISTS Funcionario (
    Matricula INT PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone VARCHAR(100)
);
