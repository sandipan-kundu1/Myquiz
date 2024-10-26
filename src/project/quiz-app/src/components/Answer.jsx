import React from 'react';
export default function Answer({ text, selected, correct, wrong, onClick, disabled }) {
    const className = `answer ${selected ? 'selected' : ''} 
      ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''} 
      ${disabled ? 'checked' : ''}`;
  
    return (
      <div className={className} onClick={onClick}>
        <span className="text">{text}</span>
        <span className="checkbox">
          <i className="fas fa-check"></i>
        </span>
      </div>
    );
  }