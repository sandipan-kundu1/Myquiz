// src/components/Quiz.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios at the top
import Question from './Question';
import Timer from './Timer';

export default function Quiz({ settings, onEnd }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // Add error state
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        // Using axios.get instead of fetch
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${settings.numQuestions}&category=${settings.category}&difficulty=${settings.difficulty}&type=multiple`
        );

        // With axios, you don't need to call .json()
        // Data is directly available in response.data
        if (response.data.response_code === 0) {
          setQuestions(response.data.results);
        } else {
          setError('Failed to load questions. Please try again.');
        }
      } catch (error) {
        setError(
          error.response?.data?.message || 
          'Failed to fetch questions. Please check your internet connection.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [settings]);

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey(prev => prev + 1);
    } else {
      onEnd(score, questions.length);
    }
  };

  const handleTimeout = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey(prev => prev + 1);
    } else {
      onEnd(score, questions.length);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="quiz-loading">
        <div className="loading-spinner"></div>
        <p>Loading questions...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="quiz-error">
        <p>{error}</p>
        <button className="btn" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  // Show quiz if everything is loaded
  return (
    <div className="quiz">
      <Timer 
        key={timerKey}
        duration={parseInt(settings.timePerQuestion)} 
        onTimeout={handleTimeout}
      />
      <Question 
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        number={currentQuestion + 1}
        total={questions.length}
      />
    </div>
  );
}