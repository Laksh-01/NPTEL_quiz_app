import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizById } from '../data/quizConfigs';
import { useQuiz } from '../context/QuizContext';
import QuestionCard from '../components/quiz/QuestionCard';
import QuizNavigation from '../components/quiz/QuizNavigation';
import Timer from '../components/common/Timer';
import Button from '../common/Button';
import { AlertTriangle } from 'lucide-react';
import useTimer from '../hooks/useTimer';

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quiz = getQuizById(quizId || '');
  
  const {
    startQuiz,
    activeQuiz,
    questions,
    currentQuestionIndex,
    answers,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    resetQuiz
  } = useQuiz();
  
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  
  const handleTimeUp = () => {
    handleSubmitQuiz();
  };
  
  const { 
    timeRemaining, 
    percentRemaining, 
    startTimer, 
    isActive 
  } = useTimer({
    initialTime: quiz ? quiz.timeLimit * 60 : 0,
    onTimeUp: handleTimeUp
  });
  
  useEffect(() => {
    if (!quiz) {
      navigate('/');
      return;
    }
    
    startQuiz(quiz);
    startTimer();
    
    // Clean up when component unmounts
    return () => {
      if (!showConfirmSubmit) {
        resetQuiz();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, navigate]);
  
  if (!quiz || !activeQuiz || questions.length === 0) {
    return <div className="container mx-auto p-8">Loading quiz...</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestion.id] !== undefined ? answers[currentQuestion.id] : null;
  
  const handleSelectOption = (optionIndex: number) => {
    answerQuestion(currentQuestion.id, optionIndex);
  };
  
  const handleNavigate = (index: number) => {
    // Direct navigation to question
    if (index >= 0 && index < questions.length) {
      // Force current question update
      const questionIndex = index;
      navigate(`/quiz/${quiz.id}?q=${questionIndex + 1}`, { replace: true });
    }
  };
  
  const handleSubmitQuiz = () => {
    const timeTaken = quiz.timeLimit * 60 - timeRemaining;
    const result = finishQuiz(timeTaken);
    if (result) {
      navigate(`/analysis/${result.id}`);
    } else {
      navigate('/');
    }
  };
  
  const answeredCount = Object.values(answers).filter(ans => ans !== null).length;
  
  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-xl font-bold text-gray-900">{quiz.title}</h1>
                <p className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <Timer timeRemaining={timeRemaining} percentRemaining={percentRemaining} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <QuestionCard
                question={currentQuestion}
                selectedOption={selectedOption}
                onSelectOption={handleSelectOption}
              />
              
              <div className="mt-4 flex justify-between">
                <Button
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button
                    variant="primary"
                    onClick={() => setShowConfirmSubmit(true)}
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={nextQuestion}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="mb-4">
                  <h2 className="font-medium text-gray-900 mb-1">Progress</h2>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{answeredCount} of {questions.length} answered</span>
                    <span className="font-medium">{Math.round((answeredCount / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all"
                      style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                <QuizNavigation
                  questions={questions}
                  currentQuestionIndex={currentQuestionIndex}
                  answers={answers}
                  onNavigate={handleNavigate}
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">Quiz Instructions</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Click on an option to select your answer</li>
                  <li>• Use the navigation buttons or question numbers to move between questions</li>
                  <li>• Submit your quiz before the timer runs out</li>
                  <li>• Unanswered questions will be counted as incorrect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center text-orange-500 mb-4">
              <AlertTriangle className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-bold">Submit Quiz?</h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              You have answered {answeredCount} out of {questions.length} questions.
              {answeredCount < questions.length && (
                <span className="text-orange-600 font-medium block mt-1">
                  {questions.length - answeredCount} question(s) will be counted as incorrect.
                </span>
              )}
            </p>
            
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmSubmit(false)}
              >
                Continue Quiz
              </Button>
              <Button
                variant="danger"
                onClick={handleSubmitQuiz}
              >
                Submit Quiz
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;