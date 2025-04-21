import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Question } from '../types';
import { getQuizById } from '../data/quizConfigs';
import { analyzeTopics } from '../utils/quizUtils';
import { getQuestionsBySubject } from '../utils/quizUtils';
import { ArrowLeft } from 'lucide-react';
import TopicAnalysisCard from '../components/analysis/TopicAnalysisCard';
import WrongAnswersCard from '../components/analysis/WrongAnswersCard';

const QuizResultPage: React.FC = () => {
  const { resultId } = useParams<{ resultId: string }>();
  const navigate = useNavigate();
  const { quizResults } = useQuiz();
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const result = quizResults.find(r => r.id === resultId);
  
  useEffect(() => {
    if (!result) {
      navigate('/analysis');
      return;
    }
    
    // Fetch the questions for this quiz result
    const quiz = getQuizById(result.quizId);
    if (quiz) {
      const quizQuestions = getQuestionsBySubject(result.subjectId, quiz.questionCount);
      setQuestions(quizQuestions);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, navigate]);
  
  if (!result) {
    return <div>Loading...</div>;
  }
  
  const quiz = getQuizById(result.quizId);
  
  // Create a record of answers for easier access
  const answersRecord: Record<string, number | null> = {};
  result.answers.forEach(answer => {
    answersRecord[answer.questionId] = answer.selectedOption;
  });
  
  const scorePercent = (result.score / result.totalQuestions) * 100;
  const topicsAnalysis = analyzeTopics(questions, answersRecord);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/analysis" className="flex items-center text-blue-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Analysis
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{quiz?.title || 'Quiz Result'}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Score</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {result.score}/{result.totalQuestions}
                  <span className="text-lg ml-2">
                    ({Math.round(scorePercent)}%)
                  </span>
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Date</h3>
                <p className="text-xl font-bold text-gray-900">
                  {new Date(result.completedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Time Taken</h3>
                <p className="text-xl font-bold text-gray-900">
                  {Math.floor(result.timeTaken / 60)} min {result.timeTaken % 60} sec
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Performance by Topic</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topicsAnalysis.map((topic, index) => (
                  <TopicAnalysisCard key={index} topicAnalysis={topic} />
                ))}
              </div>
            </div>
          </div>
          
          <WrongAnswersCard 
            questions={questions} 
            answers={answersRecord} 
          />
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;