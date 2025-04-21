import React from "react";
import { TopicAnalysis } from "../../types";

interface TopicAnalysisCardProps {
  topicAnalysis: TopicAnalysis;
}

const TopicAnalysisCard: React.FC<TopicAnalysisCardProps> = ({
  topicAnalysis,
}) => {
  const { topic, correctCount, totalCount, percentage } = topicAnalysis;

  const getStrengthLevel = () => {
    if (percentage >= 80) return { label: "Strong", color: "bg-green-600" };
    if (percentage >= 60) return { label: "Good", color: "bg-blue-600" };
    if (percentage >= 40) return { label: "Average", color: "bg-yellow-500" };
    return { label: "Needs Work", color: "bg-red-600" };
  };

  const strengthLevel = getStrengthLevel();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4">
      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
        {topic}
      </h3>

      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-500 dark:text-gray-400">
          {correctCount}/{totalCount} correct
        </span>
        <span className="font-medium dark:text-gray-200">
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${strengthLevel.color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 text-sm">
        <span
          className={`
          px-2 py-0.5 rounded-full text-white text-xs font-medium
          ${strengthLevel.color}
        `}
        >
          {strengthLevel.label}
        </span>
      </div>
    </div>
  );
};

export default TopicAnalysisCard;
