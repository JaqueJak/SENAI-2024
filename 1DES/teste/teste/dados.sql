CREATE DATABASE e_commerce;

USE e_commerce;

-- Tabela de Produtos
CREATE TABLE Produtos (
    ProdutoID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Preco DECIMAL(10, 2) NOT NULL,
    Categoria VARCHAR(50),
    Estoque INT
);

-- Tabela de Clientes
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Telefone VARCHAR(20),
    Endereco TEXT
);

-- Tabela de Pedidos
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY AUTO_INCREMENT,
    ClienteID INT,
    DataPedido DATE NOT NULL,
    Total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

-- Tabela de Itens do Pedido
CREATE TABLE ItensPedido (
    ItemID INT PRIMARY KEY AUTO_INCREMENT,
    PedidoID INT,
    ProdutoID INT,
    Quantidade INT NOT NULL,
    PrecoUnitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID),
    FOREIGN KEY (ProdutoID) REFERENCES Produtos(ProdutoID)
);

-- Inserir Produtos
INSERT INTO Produtos (Nome, Descricao, Preco, Categoria, Estoque) VALUES
('Camiseta Básica', 'Camiseta de algodão, tamanho único', 29.99, 'Roupas', 100),
('Tênis Esportivo', 'Tênis para corrida, confortável', 99.99, 'Calçados', 50),
('Relógio Digital', 'Relógio com cronômetro e alarme', 79.99, 'Acessórios', 30);

-- Inserir Clientes
INSERT INTO Clientes (Nome, Email, Telefone, Endereco) VALUES
('João Silva', 'joao.silva@email.com', '1234-5678', 'Rua das Flores, 123'),
('Maria Oliveira', 'maria.oliveira@email.com', '2345-6789', 'Av. Central, 456'),
('Pedro Santos', 'pedro.santos@email.com', '3456-7890', 'Praça da Liberdade, 789');

-- Inserir Pedidos
INSERT INTO Pedidos (ClienteID, DataPedido, Total) VALUES
(1, '2024-09-01', 129.98),
(2, '2024-09-02', 29.99),
(3, '2024-09-03', 179.98);

-- Inserir Itens do Pedido
INSERT INTO ItensPedido (PedidoID, ProdutoID, Quantidade, PrecoUnitario) VALUES
(1, 1, 2, 29.99),  -- 2 Camisetas Básicas
(1, 2, 1, 99.99),  -- 1 Tênis Esportivo
(2, 1, 1, 29.99),  -- 1 Camiseta Básica
(3, 2, 1, 99.99),  -- 1 Tênis Esportivo
(3, 3, 1, 79.99);  -- 1 Relógio Digital


-- Consultar todos os produtos
SELECT * FROM Produtos;

-- Consultar todos os clientes
SELECT * FROM Clientes;

-- Consultar todos os pedidos e seus detalhes
SELECT p.PedidoID, c.Nome AS Cliente, p.DataPedido, p.Total
FROM Pedidos p
JOIN Clientes c ON p.ClienteID = c.ClienteID;

-- Consultar itens de um pedido específico
SELECT i.ItemID, pr.Nome AS Produto, i.Quantidade, i.PrecoUnitario
FROM ItensPedido i
JOIN Produtos pr ON i.ProdutoID = pr.ProdutoID
WHERE i.PedidoID = 1;
