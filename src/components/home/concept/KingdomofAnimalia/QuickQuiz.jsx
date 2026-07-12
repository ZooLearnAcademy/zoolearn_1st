import React, { useState, useEffect, useCallback } from 'react';
import './QuickQuiz.css';

const QuickQuiz = ({ questions, themeColor = "#c084fc" }) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Initialize quiz with 5 random questions for bite-sized learning
  const initQuiz = useCallback(() => {
    if (!questions || questions.length === 0) return;
    // Shuffle array and pick the first 5
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  }, [questions]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  const handleAnswerClick = (isCorrect, index) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);
    if (isCorrect) setScore((prev) => prev + 1);
    
    // Wait for the user to see the result, then fade out
    setTimeout(() => {
      setIsFading(true);
      
      // After fade out, change question and fade back in
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
        } else {
          setShowResults(true);
        }
        setIsFading(false);
      }, 300); // 300ms matches the CSS transition time
      
    }, 1500); // Wait 1.5 seconds before moving to next question
  };

  if (!quizQuestions.length) return null;

  if (showResults) {
    // Dynamic feedback message based on score
    const percentage = score / quizQuestions.length;
    let feedbackMessage = "Keep Practicing!";
    if (percentage === 1) feedbackMessage = "Perfect Score! 🏆";
    else if (percentage >= 0.8) feedbackMessage = "Excellent Work! 🌟";
    else if (percentage >= 0.6) feedbackMessage = "Good Job! 👍";

    return (
      <div className="quiz-container results-card animate-fade-in" style={{ '--quiz-theme': themeColor }}>
        <div className="results-icon">
          {percentage >= 0.8 ? '🎓' : '📚'}
        </div>
        <h3 className="results-title">{feedbackMessage}</h3>
        <p className="score">You scored <span>{score}</span> out of {quizQuestions.length}</p>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(score / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
        
        <button className="retry-btn" onClick={initQuiz}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/></svg>
          Retake Quiz
        </button>
      </div>
    );
  }

  // Calculate overall quiz progress for the top bar
  const progressPercentage = (currentQuestion / quizQuestions.length) * 100;

  return (
    <div className="quiz-container" style={{ '--quiz-theme': themeColor }}>
      {/* Top Progress Bar */}
      <div className="quiz-progress-top">
        <div className="quiz-progress-top-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="quiz-header">
        <div className="quiz-header-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <h3>Knowledge Check</h3>
        </div>
        <span className="question-counter">
          {currentQuestion + 1} <span className="counter-divider">/</span> {quizQuestions.length}
        </span>
      </div>
      
      <div className={`quiz-body ${isFading ? 'fade-out' : 'fade-in'}`}>
        <p className="question-text">{quizQuestions[currentQuestion].questionText}</p>
        
        <div className="answer-section">
          {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => {
            let btnClass = "answer-btn";
            let icon = null;

            if (selectedAnswer !== null) {
              if (index === selectedAnswer) {
                btnClass += answerOption.isCorrect ? " correct" : " incorrect";
                icon = answerOption.isCorrect 
                  ? <svg className="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  : <svg className="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>;
              } else if (answerOption.isCorrect) {
                btnClass += " correct-reveal";
                icon = <svg className="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;
              } else {
                btnClass += " dimmed"; // Dim the wrong answers that weren't selected
              }
            }

            return (
              <button 
                key={index} 
                className={btnClass}
                onClick={() => handleAnswerClick(answerOption.isCorrect, index)}
                disabled={selectedAnswer !== null}
              >
                <span className="answer-text">{answerOption.answerText}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickQuiz;