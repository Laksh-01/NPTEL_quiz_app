import React from 'react';
import { Question } from '../../types';
import { Flag } from 'lucide-react';
import Button from '../common/Button';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  markedForReview?: boolean;
  showAnswer?: boolean;
  onSelectOption: (optionIndex: number) => void;
  onToggleReview?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  markedForReview = false,
  showAnswer = false,
  onSelectOption,
  onToggleReview
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question.text}</h3>
        {onToggleReview && (
          <Button
            variant={markedForReview ? "primary" : "ghost"}
            size="sm"
            onClick={onToggleReview}
            className="ml-4"
          >
            <Flag className="h-4 w-4 mr-1" />
            {markedForReview ? 'Marked' : 'Mark for Review'}
          </Button>
        )}
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = question.correctAnswer === index;
          
          let optionClasses = "relative border rounded-md px-4 py-3 flex cursor-pointer transition-all";
          
          if (showAnswer) {
            if (isCorrect) {
              optionClasses += " border-green-500 bg-green-50 dark:bg-green-900/20";
            } else if (isSelected && !isCorrect) {
              optionClasses += " border-red-500 bg-red-50 dark:bg-red-900/20";
            } else {
              optionClasses += " border-gray-200 dark:border-gray-700";
            }
          } else {
            if (isSelected) {
              optionClasses += " border-blue-500 bg-blue-50 dark:bg-blue-900/20";
            } else {
              optionClasses += " border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50";
            }
          }
          
          return (
            <label 
              key={index}
              className={optionClasses}
              onClick={() => !showAnswer && onSelectOption(index)}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => !showAnswer && onSelectOption(index)}
                    disabled={showAnswer}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-200">{option}</span>
                </div>
              </div>
              
              {showAnswer && isCorrect && (
                <div className="absolute right-3 top-3 text-green-600 dark:text-green-400 text-sm font-medium">
                  Correct
                </div>
              )}
              
              {showAnswer && isSelected && !isCorrect && (
                <div className="absolute right-3 top-3 text-red-600 dark:text-red-400 text-sm font-medium">
                  Incorrect
                </div>
              )}
            </label>
          );
        })}
      </div>
      
      {showAnswer && (
        <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md text-sm">
          <p className="font-medium text-gray-700 dark:text-gray-200">Explanation:</p>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{question.explanation}</p>
          
          <div className="mt-2">
            <p className="font-medium text-gray-700 dark:text-gray-200">Related Topics:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {question.topics.map((topic, index) => (
                <span 
                  key={index}
                  className="px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;