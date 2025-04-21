import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import QuizResultCard from '../components/analysis/QuizResultCard';
import { ArrowLeft } from 'lucide-react';

const AnalysisPage: React.FC = () => {
  const { quizResults } = useQuiz();
  
  if (quizResults.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz Analysis</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">No Quiz Results Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't completed any quizzes yet. Take a quiz to see your performance analysis here.
              </p>
              
              <Link
                to="/"
                className="inline-flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go to Quizzes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-blue-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Your Quiz Performance</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <h3 className="text-sm font-medium text-gray-500">Total Quizzes</h3>
              <p className="text-3xl font-bold text-gray-900">{quizResults.length}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
              <h3 className="text-sm font-medium text-gray-500">Avg. Score</h3>
              <p className="text-3xl font-bold text-gray-900">
                {Math.round(
                  quizResults.reduce((acc, result) => 
                    acc + (result.score / result.totalQuestions) * 100, 0
                  ) / quizResults.length
                )}%
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
              <h3 className="text-sm font-medium text-gray-500">Last Quiz</h3>
              <p className="text-3xl font-bold text-gray-900">
                {new Date(quizResults[0].completedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Quiz Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizResults.map(result => (
              <QuizResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;