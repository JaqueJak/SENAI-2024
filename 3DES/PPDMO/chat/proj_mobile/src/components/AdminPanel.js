import React, { useState, useEffect } from 'react';
import './AdminPanel.css'; // Adapte o caminho do CSS conforme necessário

const AdminPanel = ({ onLogout }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [quizType, setQuizType] = useState('marvel'); // Tipo de quiz atual
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Carrega as perguntas do localStorage ao inicializar o componente
    const loadQuestions = () => {
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || {
        marvel: [],
        general: [],
        series: []
      };
      setQuestions(storedQuestions[quizType] || []);
    };

    loadQuestions();
  }, [quizType]);

  const handleAddQuestion = () => {
    if (question && options.every(opt => opt) && answer) {
      const newQuestion = { question, options, answer };
      const updatedQuestions = [...questions, newQuestion];
      setQuestions(updatedQuestions);
      
      // Atualiza o localStorage
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || {
        marvel: [],
        general: [],
        series: []
      };
      storedQuestions[quizType] = updatedQuestions;
      localStorage.setItem('questions', JSON.stringify(storedQuestions));

      setQuestion('');
      setOptions(['', '', '', '']);
      setAnswer('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    
    // Atualiza o localStorage
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || {
      marvel: [],
      general: [],
      series: []
    };
    storedQuestions[quizType] = updatedQuestions;
    localStorage.setItem('questions', JSON.stringify(storedQuestions));
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
      <button onClick={onLogout}>Sair</button>
      <h3>Perguntas</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <div><strong>Pergunta:</strong> {q.question}</div>
            <div><strong>Opções:</strong> {q.options.join(', ')}</div>
            <div><strong>Resposta:</strong> {q.answer}</div>
            <button onClick={() => handleDeleteQuestion(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
