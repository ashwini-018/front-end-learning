import React from 'react';

// Component to display the question, progress, and answer options
export default function Question({
  question,
  questionNumber,
  totalQuestions,
  onAnswerClick,
  answerStatus,
  getButtonClass,
}) {
  // Add a guard clause to prevent rendering if the question is not available.
  // This is a defensive measure to prevent the app from crashing if the question
  // prop is undefined during a re-render.
  if (!question) {
    return null;
  }

  return (
    <>
      <div className='card-header p-3'>
        <div className='h5 mb-2'>
          Question {questionNumber}/{totalQuestions}
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            aria-valuenow={questionNumber}
            aria-valuemin="0"
            aria-valuemax={totalQuestions}>
          </div>
        </div>
      </div>
      <div className='card-body p-4'>
        <div className='h4 mb-4'>{question.questionText}</div>
        <div className='d-grid gap-3'>
          {question.answerOptions.map((answerOption, index) => (
            <button
              key={index}
              onClick={() => onAnswerClick(answerOption.isCorrect)}
              disabled={!!answerStatus}
              className={`btn btn-lg ${getButtonClass(answerOption)}`}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

