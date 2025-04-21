import React from 'react';
import { TopicAnalysis } from '../../types';

interface TopicAnalysisCardProps {
  topicAnalysis: TopicAnalysis;
}

const TopicAnalysisCard: React.FC<TopicAnalysisCardProps> = ({ topicAnalysis }) => {
  const { topic, correctCount, totalCount, percentage } = topicAnalysis;
  
  const getStrengthLevel = () => {
    if (percentage >= 80) return { label: 'Strong', color: 'bg-green-600' };
    if (percentage >= 60) return { label: 'Good', color: 'bg-blue-600' };
    if (percentage >= 40) return { label: 'Average', color: 'bg-yellow-500' };
    return { label: 'Needs Work', color: 'bg-red-600' };
  };
  
  const strengthLevel = getStrengthLevel();
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h3 className="font-medium text-gray-900 mb-2">{topic}</h3>
      
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-500">
          {correctCount}/{totalCount} correct
        </span>
        <span className="font-medium">{Math.round(percentage)}%</span>
      </div>
      
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${strengthLevel.color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm">
        <span className={`
          px-2 py-0.5 rounded-full text-white text-xs font-medium
          ${strengthLevel.color}
        `}>
          {strengthLevel.label}
        </span>
      </div>
    </div>
  );
};

export default TopicAnalysisCard;