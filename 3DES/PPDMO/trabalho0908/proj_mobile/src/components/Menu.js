import React from 'react';

const Menu = ({ onSelectQuiz }) => {
  return (
    <div className="menu-container">
      <h2>Menu Principal</h2>
      <button onClick={() => onSelectQuiz('marvel')}>Quiz Marvel</button>
      <button onClick={() => onSelectQuiz('general')}>Quiz Conhecimentos Gerais</button>
      <button onClick={() => onSelectQuiz('series')}>Quiz Séries</button>
    </div>
  );
};

export default Menu;
