import React, { useState, useEffect } from 'react';

const Quiz = ({ quizType, onBackToMenu }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulação de carregamento de perguntas baseado no tipo de quiz
    // Substitua isso pelo código para carregar suas perguntas reais
    const loadQuestions = () => {
      // Exemplo de perguntas - substitua com dados reais
      const exampleQuestions = {
        marvel: [
          {
            question: "Qual é o verdadeiro nome do Homem de Ferro?",
            options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Natasha Romanoff"],
            answer: "Tony Stark"
          },
          {
            question: "Quem é o pai de Thor?",
            options: ["Loki", "Odin", "Hela", "Frigga"],
            answer: "Odin"
          }
        ],
        general: [
          {
            question: "Qual é a capital da França?",
            options: ["Paris", "Londres", "Berlim", "Madri"],
            answer: "Paris"
          },
          {
            question: "Qual é o maior oceano do mundo?",
            options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
            answer: "Pacífico"
          }
        ],
        series: [
          {
            question: "Qual série é sobre um professor de química que se torna fabricante de metanfetaminas?",
            options: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Crown"],
            answer: "Breaking Bad"
          },
          {
            question: "Qual série é ambientada em uma prisão?",
            options: ["Prison Break", "The Office", "Friends", "Sherlock"],
            answer: "Prison Break"
          }
        ]
      };

      setQuestions(exampleQuestions[quizType] || []);
    };

    loadQuestions();
  }, [quizType]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (questions.length === 0) return; // Verificar se há perguntas
    const correctOption = questions[currentQuestionIndex]?.answer;
    if (selectedOption === correctOption) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
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
              <button onClick={handleSubmit}>Próxima Pergunta</button>
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
