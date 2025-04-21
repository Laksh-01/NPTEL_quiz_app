import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, QuizConfig, QuizResult, Subject } from '../types';
import { getQuestionsForQuiz } from '../utils/quizUtils';
import useLocalStorage from '../hooks/useLocalStorage';

interface QuizContextType {
  activeQuiz: QuizConfig | null;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, { selectedOption: number | null; markedForReview: boolean }>;
  timeTaken: number;
  quizResults: QuizResult[];
  startQuiz: (quiz: QuizConfig) => void;
  answerQuestion: (questionId: string, selectedOption: number) => void;
  toggleReviewMark: (questionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  submitQuiz: () => void;
  finishQuiz: (timeTaken: number) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeQuiz, setActiveQuiz] = useState<QuizConfig | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selectedOption: number | null; markedForReview: boolean }>>({});
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizResults, setQuizResults] = useLocalStorage<QuizResult[]>('quizResults', []);

  const startQuiz = (quiz: QuizConfig) => {
    const quizQuestions = getQuestionsForQuiz(quiz);
    setActiveQuiz(quiz);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeTaken(0);
  };

  const answerQuestion = (questionId: string, selectedOption: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption,
        markedForReview: prev[questionId]?.markedForReview || false
      }
    }));
  };

  const toggleReviewMark = (questionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption: prev[questionId]?.selectedOption || null,
        markedForReview: !prev[questionId]?.markedForReview
      }
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const submitQuiz = () => {
    // Implementation depends on if we want to auto-submit or just show a confirmation
  };

  const finishQuiz = (timeTaken: number) => {
    if (!activeQuiz) return;

    let correctCount = 0;
    const quizAnswers = questions.map(question => {
      const answer = answers[question.id];
      const selectedOption = answer?.selectedOption ?? null;
      const isCorrect = selectedOption === question.correctAnswer;
      if (isCorrect) correctCount++;
      
      return {
        questionId: question.id,
        selectedOption,
        isCorrect,
        markedForReview: answer?.markedForReview || false
      };
    });

    const result: QuizResult = {
      id: `result-${Date.now()}`,
      quizId: activeQuiz.id,
      subjectId: activeQuiz.subjectId as Subject,
      answers: quizAnswers,
      score: correctCount,
      totalQuestions: questions.length,
      timeTaken,
      completedAt: new Date().toISOString()
    };

    setQuizResults(prev => [result, ...prev]);
    resetQuiz();

    return result;
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeTaken(0);
  };

  return (
    <QuizContext.Provider
      value={{
        activeQuiz,
        questions,
        currentQuestionIndex,
        answers,
        timeTaken,
        quizResults,
        startQuiz,
        answerQuestion,
        toggleReviewMark,
        nextQuestion,
        previousQuestion,
        submitQuiz,
        finishQuiz,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};