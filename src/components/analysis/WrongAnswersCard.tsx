import React from "react";
import { Question } from "../../types";
import QuestionCard from "../quiz/QuestionCard";

interface WrongAnswersCardProps {
  questions: Question[];
  answers: Record<string, number | null>;
}

const WrongAnswersCard: React.FC<WrongAnswersCardProps> = ({
  questions,
  answers,
}) => {
  const wrongAnswers = questions.filter(
    (question) =>
      answers[question.id] !== null &&
      answers[question.id] !== question.correctAnswer,
  );

  if (wrongAnswers.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
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
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Incorrect Answers
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Review the {wrongAnswers.length} questions you answered incorrectly to
        improve your understanding.
      </p>

      <div className="space-y-4 mt-6">
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
  );
};

export default WrongAnswersCard;
