import React from 'react';

// Component to display the final score and restart button
export default function Score({ score, totalQuestions, onRestart, getScoreMessage }) {
  const { message, alertClass } = getScoreMessage();

  return (
    <div className='card-body p-4'>
      <div className={`alert ${alertClass}`} role="alert">
        <h4 className="alert-heading">{message}</h4>
        <p>You scored {score} out of {totalQuestions}</p>
      </div>
      <button className='btn btn-primary' onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

