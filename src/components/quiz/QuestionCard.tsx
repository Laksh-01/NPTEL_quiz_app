import React from "react";
import { Question } from "../../types";
import { Flag, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "../common/Button";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  markedForReview?: boolean;
  showAnswer?: boolean;
  onSelectOption: (optionIndex: number) => void;
  onToggleReview?: () => void;
  onSubmit?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  isLastQuestion?: boolean;
  questionNumber?: number;
  totalQuestions?: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  markedForReview = false,
  showAnswer = false,
  onSelectOption,
  onToggleReview,
  onSubmit,
  onNext,
  onPrevious,
  isLastQuestion = false,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Question header with number indicator */}
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600 flex justify-between items-center">
        {questionNumber && totalQuestions ? (
          <div className="flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-2.5 py-1 rounded-full">
              Question {questionNumber} of {totalQuestions}
            </span>
          </div>
        ) : (
          <div></div>
        )}
        {onToggleReview && (
          <Button
            variant={markedForReview ? "primary" : "ghost"}
            size="sm"
            onClick={onToggleReview}
          >
            <Flag className="h-4 w-4 mr-1" />
            {markedForReview ? "Marked" : "Mark for Review"}
          </Button>
        )}
      </div>

      {/* Question text */}
      <div className="px-6 pt-5 pb-3">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {question.text}
        </h3>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = question.correctAnswer === index;

            let optionClasses =
              "relative border rounded-md px-4 py-3 flex cursor-pointer transition-all";

            if (showAnswer) {
              if (isCorrect) {
                optionClasses +=
                  " border-green-500 bg-green-50 dark:bg-green-900/20";
              } else if (isSelected && !isCorrect) {
                optionClasses += " border-red-500 bg-red-50 dark:bg-red-900/20";
              } else {
                optionClasses += " border-gray-200 dark:border-gray-700";
              }
            } else {
              if (isSelected) {
                optionClasses +=
                  " border-blue-500 bg-blue-50 dark:bg-blue-900/20";
              } else {
                optionClasses +=
                  " border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50";
              }
            }

            return (
              <label
                key={index}
                className={optionClasses}
                onClick={() => !showAnswer && onSelectOption(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && !showAnswer && onSelectOption(index)
                }
              >
                <div className="flex items-start w-full">
                  <div className="flex items-center h-5">
                    <div
                      className={`h-5 w-5 rounded-full border ${isSelected ? "bg-blue-600 border-blue-600 flex items-center justify-center" : "border-gray-300 dark:border-gray-600"}`}
                    >
                      {isSelected && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => !showAnswer && onSelectOption(index)}
                      disabled={showAnswer}
                      className="sr-only"
                      id={`option-${question.id}-${index}`}
                    />
                  </div>
                  <div className="ml-3 text-base flex-grow">
                    <span
                      className={`font-medium ${isSelected ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-200"}`}
                    >
                      {option}
                    </span>
                  </div>
                </div>

                {showAnswer && isCorrect && (
                  <div className="absolute right-3 top-3 text-green-600 dark:text-green-400 text-sm font-medium flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
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
      </div>

      {/* Navigation and submit buttons */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600 flex justify-between">
        <div>
          {onPrevious && (
            <Button
              variant="outline"
              size="sm"
              onClick={onPrevious}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
          )}
        </div>

        <div className="flex gap-2">
          {onSubmit && (
            <Button
              variant="danger"
              size="sm"
              onClick={onSubmit}
              className="shadow-sm"
            >
              <CheckCircle className="h-4 w-4 mr-1" />
              Submit Quiz
            </Button>
          )}

          {onNext && !isLastQuestion && (
            <Button variant="primary" size="sm" onClick={onNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          )}

          {onNext && isLastQuestion && (
            <Button variant="primary" size="sm" onClick={onNext}>
              Finish
              <CheckCircle className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </div>

      {/* Explanation section */}
      {showAnswer && (
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md text-sm">
            <p className="font-medium text-gray-700 dark:text-gray-200">
              Explanation:
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {question.explanation}
            </p>

            <div className="mt-3">
              <p className="font-medium text-gray-700 dark:text-gray-200">
                Related Topics:
              </p>
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
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
