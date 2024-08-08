import React, { useState } from 'react';
import './SignUp.css'; // Adapte o caminho do CSS conforme necessário

const SignUp = ({ onSignUp, onBackToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação simples para evitar usuário em branco
    if (username && password) {
      onSignUp({ username, password });
      setError('');
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Criar Novo Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
        <button type="button" onClick={onBackToLogin}>Voltar para Login</button>
      </form>
    </div>
  );
};

export default SignUp;
