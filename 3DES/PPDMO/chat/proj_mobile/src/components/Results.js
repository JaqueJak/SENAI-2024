import React from 'react';

const Result = ({ score, totalQuestions, onReset }) => {
  return (
    <div className="result-container">
      <h2>Você acertou {score} de {totalQuestions} perguntas!</h2>
      <button onClick={onReset}>Jogar Novamente</button>
    </div>
  );
};

export default Result;
