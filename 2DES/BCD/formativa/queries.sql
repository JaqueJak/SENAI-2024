SELECT * FROM Funcionario ORDER BY nome;

SELECT nome, telefone FROM Funcionario;

SELECT * FROM Veiculo WHERE marca = 'Fiat' ORDER BY ano DESC;

SELECT v.placa, v.modelo, v.marca, v.ano, COUNT(m.id_manutencao) AS qtd_manutencoes
FROM Veiculo v
LEFT JOIN Manutencao m ON v.placa = m.placa_veiculo
GROUP BY v.placa, v.modelo, v.marca, v.ano;

CREATE VIEW vw_todas_as_manutencoes AS
SELECT m.id_manutencao, m.inicio_manutencao, m.fim_manutencao, m.descricao,
       f.nome AS nome_funcionario, v.modelo AS modelo_veiculo
FROM Manutencao m
INNER JOIN Funcionario f ON m.matricula_funcionario = f.matricula
INNER JOIN Veiculo v ON m.placa_veiculo = v.placa;