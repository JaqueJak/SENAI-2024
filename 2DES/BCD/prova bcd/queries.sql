SELECT * FROM Cliente ORDER BY Nome;

SELECT Nome, Telefone FROM Cliente;

SELECT * FROM Veiculo ORDER BY Marca, Modelo;

SELECT * FROM Veiculo WHERE Marca = 'Fiat' ORDER BY Diaria DESC;

SELECT v.*, COUNT(r.Placa_Veiculo) AS Quantidade_Alugueis
FROM Veiculo v
LEFT JOIN Reserva r ON v.Placa = r.Placa_Veiculo
GROUP BY v.Placa;