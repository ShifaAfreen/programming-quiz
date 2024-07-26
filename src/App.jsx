import React, { useState, useEffect } from 'react';
import LanguageSelection from './components/LanguageSelection';
import Quiz from './components/Quiz';
import Result from './components/Result';
import questions from './data/question';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    document.body.className = showResult ? 'result-page-background' : 'main-page-background';
  }, [showResult]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const handleAnswerOptionClick = (isCorrect, selectedOption) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const answerRecord = {
      question: questions[selectedLanguage][currentQuestion].questionText,
      selectedOption: selectedOption,
      correctOption: questions[selectedLanguage][currentQuestion].answer,
      isCorrect: isCorrect
    };

    setUserAnswers([...userAnswers, answerRecord]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[selectedLanguage].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[selectedLanguage].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleSkipClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[selectedLanguage].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedLanguage('');
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      {!selectedLanguage ? (
        <LanguageSelection handleLanguageSelect={handleLanguageSelect} />
      ) : showResult ? (
        <Result
          score={score}
          totalQuestions={questions[selectedLanguage].length}
          userAnswers={userAnswers}
          handleReset={handleReset}
        />
      ) : (
        <Quiz
          currentQuestion={questions[selectedLanguage][currentQuestion]}
          currentQuestionIndex={currentQuestion}
          totalQuestions={questions[selectedLanguage].length}
          handleAnswerOptionClick={handleAnswerOptionClick}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
          handleSkipClick={handleSkipClick}
        />
      )}
    </div>
  );
}

export default App;
