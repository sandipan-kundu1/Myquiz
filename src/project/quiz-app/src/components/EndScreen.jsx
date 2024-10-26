import React from 'react';
export default function EndScreen({ score, totalQuestions, onRestart }) {
    return (
      <div className="end-screen">
        <h1 className="heading">Quiz App</h1>
        <div className="score">
          <span className="score-text">Your score:</span>
          <div>
            <span className="final-score">{score}</span>
            <span className="total-score">/{totalQuestions}</span>
          </div>
        </div>
        <button className="btn restart" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }