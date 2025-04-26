import { Question, QuizConfig, Subject } from "../types";
import { getRandomSocialNetworksQuestions } from "../data/questionPools/socialNetworks";
import { getRandomDataAnalysisQuestions } from "../data/questionPools/dataAnalysis";
import { getRandomBusinessStatsQuestions } from "../data/questionPools/businessStats";

export const getQuestionsBySubject = (
  subjectId: Subject,
  count: number,
): Question[] => {
  switch (subjectId) {
    case "SOCIAL_NETWORKS":
      return getRandomSocialNetworksQuestions(count);
    case "DATA_ANALYSIS":
      return getRandomDataAnalysisQuestions(count);
    case "BUSINESS_STATS":
      return getRandomBusinessStatsQuestions(count);
    default:
      return [];
  }
};

// Cache to store questions for each quiz ID
const quizQuestionsCache: Record<string, Question[]> = {};

export const getQuestionsForQuiz = (quiz: QuizConfig): Question[] => {
  // If we already have questions for this quiz ID, return them
  if (quizQuestionsCache[quiz.id]) {
    return quizQuestionsCache[quiz.id];
  }

  // Otherwise, generate new questions and cache them
  const questions = getQuestionsBySubject(
    quiz.subjectId as Subject,
    quiz.questionCount,
  );
  quizQuestionsCache[quiz.id] = questions;
  return questions;
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0 || hours > 0) {
    parts.push(`${minutes.toString().padStart(2, "0")}m`);
  }

  parts.push(`${remainingSeconds.toString().padStart(2, "0")}s`);

  return parts.join(" ");
};

export const calculateScore = (
  questions: Question[],
  answers: Record<string, number | null>,
): number => {
  let correctCount = 0;

  questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswer) {
      correctCount++;
    }
  });

  return correctCount;
};

export const analyzeTopics = (
  questions: Question[],
  answers: Record<string, number | null>,
) => {
  const topicsAnalysis: Record<string, { correct: number; total: number }> = {};

  questions.forEach((question) => {
    question.topics.forEach((topic) => {
      if (!topicsAnalysis[topic]) {
        topicsAnalysis[topic] = { correct: 0, total: 0 };
      }

      topicsAnalysis[topic].total++;

      if (answers[question.id] === question.correctAnswer) {
        topicsAnalysis[topic].correct++;
      }
    });
  });

  return Object.entries(topicsAnalysis)
    .map(([topic, data]) => ({
      topic,
      correctCount: data.correct,
      totalCount: data.total,
      percentage: (data.correct / data.total) * 100,
    }))
    .sort((a, b) => a.percentage - b.percentage);
};
