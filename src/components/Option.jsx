import React from 'react';
function Option({ text, isCorrect, handleAnswerOptionClick }) {
  return (
    <button onClick={() => handleAnswerOptionClick(isCorrect)}>
      {text}
    </button>
  );
}

export default Option;
