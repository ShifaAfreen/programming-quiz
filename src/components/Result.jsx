import React, { useState } from 'react';

const Result = ({ score, totalQuestions, userAnswers, handleReset }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleShowAnalysis = () => {
    setShowAnalysis(!showAnalysis);
  };

  return (
    <div className="result">
      <h1>Result</h1>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <div className="btn-container">
      <button onClick={handleShowAnalysis}>
        {showAnalysis ? "Hide Your Answers" : "Check Your Answers"}
      </button>
      <button onClick={handleReset}>Go Back to Main Page</button>
      </div>
      
      {showAnalysis && (
        <div className="analysis">
          {userAnswers.map((answer, index) => (
            <div key={index}>
              <p>
                <strong>Q: {answer.question}</strong>
              </p>
              <p>
                Your Answer: {answer.selectedOption} - {answer.isCorrect ? "Correct" : "Incorrect"}
              </p>
              {!answer.isCorrect && <p>Correct Answer: {answer.correctOption}</p>}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
