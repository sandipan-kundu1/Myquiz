import React from 'react';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import './styles/index.css';

export default function App() {
  const [gameState, setGameState] = useState('start'); // start, quiz, end
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [quizSettings, setQuizSettings] = useState({
    numQuestions: 5,
    category: '',
    difficulty: '',
    timePerQuestion: 30
  });

  const startQuiz = (settings) => {
    setQuizSettings(settings);
    setGameState('quiz');
  };

  const endQuiz = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setGameState('end');
  };

  const restartQuiz = () => {
    setGameState('start');
    setScore(0);
    setTotalQuestions(0);
  };

  return (
    <div className="container">
      {gameState === 'start' && <StartScreen onStart={startQuiz} />}
      {gameState === 'quiz' && <Quiz settings={quizSettings} onEnd={endQuiz} />}
      {gameState === 'end' && (
        <EndScreen 
          score={score} 
          totalQuestions={totalQuestions} 
          onRestart={restartQuiz} 
        />
      )}
    </div>
  );
}