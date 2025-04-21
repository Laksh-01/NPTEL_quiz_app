import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { QuizConfig } from '../../types';
import Button from '../common/Button';

interface QuizCardProps {
  quiz: QuizConfig;
  onClick: (quiz: QuizConfig) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{quiz.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{quiz.questionCount} questions</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.timeLimit} minutes</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            {quiz.type === 'SHORT' ? (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Quick Quiz</span>
            ) : (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Full Practice</span>
            )}
          </div>
          
          <Button
            variant="primary"
            size="sm"
            onClick={() => onClick(quiz)}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;