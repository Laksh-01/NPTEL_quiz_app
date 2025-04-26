import React, { useState } from "react";
import { Question } from "../../types";
import QuestionCard from "../quiz/QuestionCard";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WrongAnswersCardProps {
  questions: Question[];
  answers: Record<string, number | null>;
}

const WrongAnswersCard: React.FC<WrongAnswersCardProps> = ({
  questions,
  answers,
}) => {
  const [expanded, setExpanded] = useState(true);

  const wrongAnswers = questions.filter(
    (question) =>
      answers[question.id] !== null &&
      answers[question.id] !== question.correctAnswer,
  );

  if (wrongAnswers.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
        <h3 className="text-lg font-medium text-green-600 dark:text-green-500 mb-2">
          Perfect Score!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          You got all the questions right. Keep up the great work!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div
        className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          Incorrect Answers ({wrongAnswers.length})
        </h2>
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Review the {wrongAnswers.length} questions you answered incorrectly
            to improve your understanding.
          </p>

          <div className="space-y-6">
            {wrongAnswers.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                selectedOption={answers[question.id]}
                showAnswer={true}
                onSelectOption={() => {}} // No-op since it's in review mode
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WrongAnswersCard;
