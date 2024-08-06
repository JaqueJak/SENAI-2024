import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Menu from './components/Menu';
import SignUp from './components/SignUp';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [users, setUsers] = useState([{ username: 'admin', password: 'admin', role: 'admin' }]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToMenu = () => {
    setSelectedQuiz(null);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, { ...newUser, role: 'user' }]);
    setShowSignUp(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {isAuthenticated ? (
        selectedQuiz ? (
          <Quiz quizType={selectedQuiz} onBackToMenu={handleBackToMenu} />
        ) : currentUser.role === 'admin' ? (
          <AdminPanel onSelectQuiz={handleSelectQuiz} />
        ) : (
          <Menu onSelectQuiz={handleSelectQuiz} />
        )
      ) : (
        showSignUp ? (
          <SignUp onSignUp={handleSignUp} onBackToLogin={() => setShowSignUp(false)} />
        ) : (
          <Login onLogin={handleLogin} onSignUp={() => setShowSignUp(true)} />
        )
      )}
    </div>
  );
};

export default App;
