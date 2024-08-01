import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    question: 'Qual é o nome verdadeiro do Homem de Ferro?',
    options: ['Steve Rogers', 'Bruce Wayne', 'Tony Stark', 'Clark Kent'],
    answer: 'Tony Stark'
  },
  {
    question: 'Qual é o martelo do Thor?',
    options: ['Stormbreaker', 'Mjolnir', 'Gungnir', 'Jarnbjorn'],
    answer: 'Mjolnir'
  },
  // Adicione mais perguntas aqui
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} onReset={handleReset} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
