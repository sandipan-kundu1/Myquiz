import React from 'react';
import { useState } from 'react';

export default function StartScreen({ onStart }) {
  const [settings, setSettings] = useState({
    numQuestions: 5,
    category: '',
    difficulty: '',
    timePerQuestion: 10
  });

  const handleStart = () => {
    onStart(settings);
  };

  return (
    <div className="start-screen">
      <h1 className="heading">Quiz App</h1>
      <div className="settings">
        <label htmlFor="num-questions">Number of Questions:</label>
        <select 
          id="num-questions"
          value={settings.numQuestions}
          onChange={(e) => setSettings({...settings, numQuestions: e.target.value})}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <label htmlFor="category">Select Category:</label>
        <select 
          id="category"
          value={settings.category}
          onChange={(e) => setSettings({...settings, category: e.target.value})}
        >
          <option value="">any category</option>
          <option value="9">general knowledge</option>
          <option value="11">films</option>
          <option value="17">science and nature</option>
          <option value="18">computers</option>
          <option value="19">mathematics</option>
          <option value="20">mythology</option>
          <option value="21">sports</option>
          <option value="22">geography</option>
          <option value="23">history</option>
          <option value="24">politics</option>
        </select>

        <label htmlFor="difficulty">Select Difficulty:</label>
        <select 
          id="difficulty"
          value={settings.difficulty}
          onChange={(e) => setSettings({...settings, difficulty: e.target.value})}
        >
          <option value="">any difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>

        <label htmlFor="time">Select Time Per Question:</label>
        <select 
          id="time"
          value={settings.timePerQuestion}
          onChange={(e) => setSettings({...settings, timePerQuestion: e.target.value})}
        >
          <option value="10">10 seconds</option>
          <option value="15">15 seconds</option>
          <option value="20">20 seconds</option>
          <option value="25">25 seconds</option>
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
        </select>
      </div>
      <button className="btn start" onClick={handleStart}>Start Quiz</button>
    </div>
  );
}