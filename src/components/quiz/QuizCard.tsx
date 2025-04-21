import React from "react";
import { Clock, BookOpen, Award, CheckCircle } from "lucide-react";
import { QuizConfig } from "../../types";
import Button from "../common/Button";

interface QuizCardProps {
  quiz: QuizConfig;
  onClick: (quiz: QuizConfig) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onClick }) => {
  // Determine background gradient based on quiz type
  const cardGradient =
    quiz.type === "SHORT"
      ? "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-800"
      : "bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-gray-800";

  // Determine badge color based on quiz type
  const badgeClass =
    quiz.type === "SHORT"
      ? "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
      : "bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-800";

  return (
    <div
      className={`${cardGradient} rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {quiz.title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
          <div className="flex items-center mr-5">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span>{quiz.questionCount} questions</span>
          </div>

          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span>{quiz.timeLimit} minutes</span>
          </div>
        </div>

        {quiz.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
            {quiz.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
          <div className="text-sm font-medium">
            {quiz.type === "SHORT" ? (
              <span
                className={`px-3 py-1.5 ${badgeClass} rounded-full flex items-center w-fit`}
              >
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Quick Quiz
              </span>
            ) : (
              <span
                className={`px-3 py-1.5 ${badgeClass} rounded-full flex items-center w-fit`}
              >
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Full Practice
              </span>
            )}
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onClick(quiz)}
            className="shadow-sm hover:shadow-md transition-shadow"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
