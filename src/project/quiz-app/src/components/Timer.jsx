import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Timer({ duration, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeLeft(duration); // Reset time when duration changes
  }, [duration]);

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start new timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup on unmount or when duration changes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [duration, onTimeout]);

  const progress = (timeLeft / duration) * 100;

  return (
    <div className="timer">
      <div className="progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
        <span className="progress-text">{timeLeft}</span>
      </div>
    </div>
  );
}