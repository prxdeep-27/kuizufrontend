import React, { useState } from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';

import './quiz.css'

const Quiz = ({ category, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false) 
  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>{category.toUpperCase()} QUIZ</h2>
        <p>No questions available for this category.</p>
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>
          Back to Home
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSubmit = () => {
    setAnswerSubmitted(true);
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {

    setSelectedOption('');
    setAnswerSubmitted(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleSaveScore = async () => {
    const username = prompt("Enter your name:");
    if (!username) return;
  
    try {
      await axios.post('http://localhost:3004/api/scores', {
        username,
        category,
        score,
});
      alert("Score saved to leaderboard!");
    } catch (err) {
      console.error('Error saving score:', err);
      alert("Failed to save score.");
    }
  };
  

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setShowScore(false);
    setAnswerSubmitted(false);
    window.location.reload(); // or call parent function to reset category
  };

  return (
    <div className="quiz-container p-4">
      <h2>{category.toUpperCase()} QUIZ</h2>

      {showScore ? (
  <div className="score-section mt-4">
    <h3>Your Score: {score} / {questions.length}</h3>

    <button className="btn btn-success mt-3 me-2" onClick={handleSaveScore}>
      Save Score to Leaderboard
    </button>
    <br/>
    <button>    <Leaderboard />
    </button>


    <button className="btn btn-primary mt-3" onClick={handleRestart}>
      Back to Home
    </button>
  </div>
      ) : (
        <div className="question-section mt-3">
          <h4>Question {currentQuestionIndex + 1}:</h4>
          <p className="mt-2">{currentQuestion.question}</p>

          <form className="mt-3">
            {currentQuestion.options.map((option, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="quizOption"
                  id={`option-${idx}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  disabled={answerSubmitted}
                />
                 <label className={`form-check-label ${answerSubmitted && option === currentQuestion.answer ? 'text-success' : ''} ${answerSubmitted && selectedOption === option && selectedOption !== currentQuestion.answer ? 'text-danger' : ''}`} htmlFor={`option-${idx}`}>
                 {option}
                </label>
              </div>
            ))}
          </form>
          {answerSubmitted && (
            <div className="mt-3">
              {selectedOption === currentQuestion.answer ? (
                <div className="text-success">Correct!</div>
              ) : (
                <div className="text-danger">
                  Incorrect. The correct answer is: <strong>{currentQuestion.answer}</strong>
                </div>
              )}
            </div>
          )}
          <div className="quiz-footer mt-5">
  <p>
    Question {currentQuestionIndex + 1} of {questions.length}
  </p>
</div>


          {!answerSubmitted ? (
            <>
            <button
              className="btn btn-primary mt-4"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit Answer
            </button>
            <br />

<button
  className="btn btn-secondary mt-3"
  onClick={handleRestart}
>
  Back to Home
</button>

     </>       
) : (
  <button
    className="btn btn-success mt-4"
    onClick={handleNext}
  >
    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
  </button>
  
)}
</div>
)}
</div>
);
};


export default Quiz;

// import React, { useState } from 'react';

// const Quiz = ({ category, questions }) => {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [score, setScore] = useState(0);
//     const [showScore, setShowScore] = useState(false);

//     if (!questions || questions.length === 0) {
//         return <div>No questions available for this category.</div>;
//     }

//     const currentQuestion = questions[currentQuestionIndex];

//     const handleNext = () => {
//         if (selectedOption === currentQuestion.answer) {
//             setScore(score + 1);
//         }
//         setSelectedOption('');
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             setShowScore(true);
//         }
//     };

//     return (
//         <div>
//             <h2>{category.toUpperCase()} QUIZ</h2>
//             {showScore ? (
//                 <div>Your Score: {score} / {questions.length}</div>
//             ) : (
//                 <div>
//                     <h4>{currentQuestion.question}</h4>
//                     {/* Options rendering */}
//                     <button onClick={handleNext}>Next</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Quiz;