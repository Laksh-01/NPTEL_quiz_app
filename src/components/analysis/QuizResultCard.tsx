import React from "react";
import { Clock } from "lucide-react";
import { QuizResult } from "../../types";
import { formatTime } from "../../utils/quizUtils";
import { Link } from "react-router-dom";
import { getQuizById } from "../../data/quizConfigs";

interface QuizResultCardProps {
  result: QuizResult;
}

const QuizResultCard: React.FC<QuizResultCardProps> = ({ result }) => {
  const quiz = getQuizById(result.quizId);
  const scorePercentage = (result.score / result.totalQuestions) * 100;

  const getScoreColor = () => {
    if (scorePercentage >= 80) return "text-green-600 dark:text-green-500";
    if (scorePercentage >= 60) return "text-blue-600 dark:text-blue-500";
    if (scorePercentage >= 40) return "text-yellow-600 dark:text-yellow-500";
    return "text-red-600 dark:text-red-500";
  };

  const formattedDate = new Date(result.completedAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="border-b border-gray-100 dark:border-gray-700 p-4">
        <h3 className="font-medium text-gray-900 dark:text-white">
          {quiz?.title || "Unknown Quiz"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {formattedDate}
        </p>
      </div>

      <div className="px-4 py-3 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
          <p className={`text-lg font-bold ${getScoreColor()}`}>
            {result.score}/{result.totalQuestions}
            <span className="text-sm font-normal ml-1">
              ({Math.round(scorePercentage)}%)
            </span>
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">Time Taken</p>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatTime(result.timeTaken)}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-t border-gray-100 dark:border-gray-700">
        <Link
          to={`/analysis/${result.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Detailed Analysis →
        </Link>
      </div>
    </div>
  );
};

export default QuizResultCard;
