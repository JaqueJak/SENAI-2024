import React, { useState, useEffect } from 'react';

const Quiz = ({ quizType, onBackToMenu }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Carrega as perguntas do localStorage baseadas no tipo de quiz
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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const correctOption = questions[currentQuestionIndex]?.answer;
    if (option === correctOption) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption('');
      } else {
        setShowResult(true);
      }
    }, 500); // Adiciona um pequeno atraso para melhorar a experiência do usuário
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-container">
          <h2>Resultado</h2>
          <p>Você acertou {score} de {questions.length} perguntas.</p>
          <button onClick={onBackToMenu}>Voltar ao Menu</button>
        </div>
      ) : (
        <div className="question-container">
          {questions.length > 0 ? (
            <>
              <h2>{questions[currentQuestionIndex]?.question}</h2>
              <div className="options">
                {questions[currentQuestionIndex]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={selectedOption === option ? 'selected' : ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p>Carregando perguntas...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
