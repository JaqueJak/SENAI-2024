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

      // Verifica se as perguntas para o tipo de quiz estão vazias e adiciona perguntas iniciais se necessário
      if (!storedQuestions[quizType] || storedQuestions[quizType].length === 0) {
        const initialQuestions = {
          marvel: [
            { question: 'Quem é o super-herói com o escudo vibranium?', options: ['Capitão América', 'Homem de Ferro', 'Thor', 'Hulk'], answer: 'Capitão América' },
            { question: 'Qual é o verdadeiro nome do Homem-Aranha?', options: ['Peter Parker', 'Tony Stark', 'Steve Rogers', 'Bruce Banner'], answer: 'Peter Parker' },
            { question: 'Quem é a Rainha de Wakanda?', options: ['Shuri', 'Ororo Munroe', 'Nakia', 'Ramonda'], answer: 'Ramonda' },
            { question: 'Qual é o planeta natal de Thor?', options: ['Asgard', 'Jotunheim', 'Midgard', 'Vanaheim'], answer: 'Asgard' },
            { question: 'Qual é o nome do vilão em "Thor: Ragnarok"?', options: ['Loki', 'Hela', 'Ultron', 'Thanos'], answer: 'Hela' },
            { question: 'Quem foi o primeiro super-herói da Marvel?', options: ['Homem de Ferro', 'Capitão América', 'Hulk', 'Tocha Humana'], answer: 'Tocha Humana' }
          ],
          general: [
            { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Berlim', 'Madrid'], answer: 'Paris' },
            { question: 'Qual é o maior oceano do mundo?', options: ['Atlântico', 'Pacífico', 'Índico', 'Ártico'], answer: 'Pacífico' },
            { question: 'Quem escreveu "Dom Quixote"?', options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'], answer: 'Miguel de Cervantes' },
            { question: 'Qual é o elemento químico representado pela letra "O"?', options: ['Ouro', 'Oxigênio', 'Osmônio', 'Ósmio'], answer: 'Oxigênio' },
            { question: 'Qual é o maior planeta do sistema solar?', options: ['Terra', 'Marte', 'Júpiter', 'Saturno'], answer: 'Júpiter' },
            { question: 'Em que ano começou a Segunda Guerra Mundial?', options: ['1939', '1914', '1945', '1929'], answer: '1939' },
            { question: 'Qual é a moeda oficial do Japão?', options: ['Yuan', 'Won', 'Yen', 'Ringgit'], answer: 'Yen' },
            { question: 'Qual é o autor do livro "1984"?', options: ['Aldous Huxley', 'George Orwell', 'H.G. Wells', 'Ray Bradbury'], answer: 'George Orwell' },
            { question: 'Qual é o maior deserto do mundo?', options: ['Deserto do Saara', 'Deserto de Gobi', 'Deserto de Atacama', 'Deserto da Antártica'], answer: 'Deserto da Antártica' },
            { question: 'Quem pintou "A Última Ceia"?', options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Rembrandt'], answer: 'Leonardo da Vinci' },
            { question: 'Qual é o país mais populoso do mundo?', options: ['Índia', 'Estados Unidos', 'China', 'Brasil'], answer: 'China' }
          ],
          series: [
            { question: 'Qual série é ambientada em uma ilha deserta com sobreviventes de um acidente de avião?', options: ['Lost', 'Friends', 'Breaking Bad', 'The Office'], answer: 'Lost' },
            { question: 'Quem é o protagonista de "Breaking Bad"?', options: ['Walter White', 'Jesse Pinkman', 'Saul Goodman', 'Hank Schrader'], answer: 'Walter White' },
            { question: 'Qual série de TV segue a vida de um grupo de amigos em Nova York?', options: ['Friends', 'How I Met Your Mother', 'The Big Bang Theory', 'Seinfeld'], answer: 'Friends' },
            { question: 'Qual série é baseada em uma série de livros de fantasia escrita por George R. R. Martin?', options: ['Game of Thrones', 'The Witcher', 'The Expanse', 'His Dark Materials'], answer: 'Game of Thrones' },
            { question: 'Qual série é sobre um advogado que trabalha em um escritório de defesa de casos de crimes?', options: ['Better Call Saul', 'Suits', 'Law & Order', 'The Good Wife'], answer: 'Better Call Saul' },
            { question: 'Em qual série de TV os personagens vivem em um condomínio chamado "The Big Bang Theory"?', options: ['The Big Bang Theory', 'Community', 'Parks and Recreation', 'Brooklyn Nine-Nine'], answer: 'The Big Bang Theory' }
          ]
        };

        if (!storedQuestions[quizType] || storedQuestions[quizType].length === 0) {
          storedQuestions[quizType] = initialQuestions[quizType];
          localStorage.setItem('questions', JSON.stringify(storedQuestions));
        }
      }

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
