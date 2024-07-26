import React from 'react';
import Question from './Question';
import Option from './Option';

function Quiz({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  handleAnswerOptionClick, 
  handlePreviousClick, 
  handleNextClick, 
  handleSkipClick 
}) {
  return (
    <div className='quiz-section'>
      <span>Question {currentQuestionIndex + 1} / {totalQuestions}</span>
      <Question text={currentQuestion.questionText} />
      {currentQuestion.options.map((option, index) => (
        <Option
          key={index}
          text={option}
          isCorrect={option === currentQuestion.answer}
          handleAnswerOptionClick={(isCorrect) => handleAnswerOptionClick(isCorrect, option)}
        />
      ))}
      <div className='navigation'>
        <button onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handleSkipClick}>Skip</button>
      </div>
    </div>
  );
}

export default Quiz;
