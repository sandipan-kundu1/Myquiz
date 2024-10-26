import React, { useState, useEffect } from 'react';
import Answer from './Answer';

export default function Question({ question, onAnswer, number, total }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Shuffle answers when the question changes
  useEffect(() => {
    const answers = [
      ...question.incorrect_answers,
      question.correct_answer
    ].sort(() => Math.random() - 0.5);

    setShuffledAnswers(answers);
    setSelectedAnswer(null);
    setAnswered(false);
  }, [question]);

  const handleAnswerSelect = (answer) => {
    if (!answered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer && !answered) {
      setAnswered(true);
      setTimeout(() => {
        onAnswer(selectedAnswer === question.correct_answer);
      }, 1500);
    }
  };

  return (
    <div className="question-wrapper">
      <div className="number">
        Question <span className="current">{number}</span>
        <span className="total">/{total}</span>
      </div>
      <div className="question">{question.question}</div>
      <div className="answer-wrapper">
        {shuffledAnswers.map((answer, index) => (
          <Answer
            key={index}
            text={answer}
            selected={selectedAnswer === answer}
            correct={answered && answer === question.correct_answer}
            wrong={answered && selectedAnswer === answer && answer !== question.correct_answer}
            onClick={() => handleAnswerSelect(answer)}
            disabled={answered}
          />
        ))}
      </div>
      <button 
        className="btn submit"
        disabled={!selectedAnswer || answered}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
