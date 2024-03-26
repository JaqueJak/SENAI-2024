SELECT *
FROM Funcionario
ORDER BY Nome;

SELECT Nome, Telefone
FROM Funcionario;

SELECT *
FROM Veiculo
WHERE marca = 'Fiat'
ORDER BY ano DESC;

SELECT v.placa, v.modelo, v.marca, v.ano, COUNT(m.id_manutencao) AS num_manutencoes
FROM Veiculo v
LEFT JOIN Manutencao m ON v.id_manutencao = m.id_manutencao
GROUP BY v.placa, v.modelo, v.marca, v.ano;
