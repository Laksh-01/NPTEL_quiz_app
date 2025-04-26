import React from "react";
import { Question } from "../../types";
import Button from "../common/Button";
import { Flag } from "lucide-react";

interface QuizNavigationProps {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<
    string,
    { selectedOption: number | null; markedForReview: boolean }
  >;
  onNavigate: (index: number) => void;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  questions,
  currentQuestionIndex,
  answers,
  onNavigate,
}) => {
  return (
    <div className="py-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
        Question Navigator
      </h3>

      <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
        {questions.map((question, index) => {
          const answer = answers[question.id] || {
            selectedOption: null,
            markedForReview: false,
          };
          const isAnswered = answer.selectedOption !== null;
          const isMarkedForReview = answer.markedForReview;
          const isCurrent = index === currentQuestionIndex;

          let buttonVariant: "primary" | "outline" | "secondary" | "danger" =
            "outline";

          if (isCurrent) {
            buttonVariant = "primary";
          } else if (isMarkedForReview) {
            buttonVariant = "danger";
          } else if (isAnswered) {
            buttonVariant = "secondary";
          }

          return (
            <Button
              key={index}
              variant={buttonVariant}
              size="sm"
              className="h-8 w-8 p-0 flex items-center justify-center relative"
              onClick={() => onNavigate(index)}
            >
              {index + 1}
              {isMarkedForReview && (
                <Flag className="absolute -top-1 -right-1 h-3 w-3 text-red-500" />
              )}
            </Button>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <span>Unanswered</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <span>For Review</span>
        </div>
      </div>
    </div>
  );
};

export default QuizNavigation;
