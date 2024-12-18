import React from 'react';
import './Menu.css';

const Menu = ({ onSelectQuiz, onLogout }) => {
  return (
    <div className="menu-container">
      <h2>Escolha seu Quiz</h2>
      <button onClick={() => onSelectQuiz('marvel')}>Quiz Marvel</button>
      <button onClick={() => onSelectQuiz('general')}>Quiz Conhecimentos Gerais</button>
      <button onClick={() => onSelectQuiz('series')}>Quiz Séries</button>
      
      {/* Botão de Sair */}
      <button onClick={onLogout} className="logout-button">
        Sair
      </button>
    </div>
  );
};

export default Menu;
