import React, { useState } from 'react';

const AdminPanel = ({ onSelectQuiz }) => {
  const [quizType, setQuizType] = useState('marvel');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState({
    marvel: [],
    general: [],
    series: []
  });

  const handleAddQuestion = () => {
    const newQuestion = { question, options, answer };
    setQuestions({
      ...questions,
      [quizType]: [...questions[quizType], newQuestion]
    });
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
  };

  const handleDeleteQuestion = (index) => {
    setQuestions({
      ...questions,
      [quizType]: questions[quizType].filter((_, i) => i !== index)
    });
  };

  const handleBackToMenu = () => {
    onSelectQuiz(null); // Chama a função passada como prop para voltar ao menu
  };

  return (
    <div className="admin-panel">
      <h2>Painel do Administrador</h2>
      <div>
        <label>Tipo de Quiz:</label>
        <select value={quizType} onChange={(e) => setQuizType(e.target.value)}>
          <option value="marvel">Marvel</option>
          <option value="general">Conhecimentos Gerais</option>
          <option value="series">Séries</option>
        </select>
      </div>
      <div>
        <label>Pergunta:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Opções:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            required
          />
        ))}
      </div>
      <div>
        <label>Resposta Correta:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button onClick={handleAddQuestion}>Adicionar Pergunta</button>

      <h3>Perguntas</h3>
      <ul>
        {questions[quizType].map((q, index) => (
          <li key={index}>
            <div><strong>Pergunta:</strong> {q.question}</div>
            <div><strong>Opções:</strong> {q.options.join(', ')}</div>
            <div><strong>Resposta:</strong> {q.answer}</div>
            <button onClick={() => handleDeleteQuestion(index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <button onClick={handleBackToMenu}>Voltar ao Menu</button>
    </div>
  );
};

export default AdminPanel;
