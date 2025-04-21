export type Subject = 'SOCIAL_NETWORKS' | 'DATA_ANALYSIS' | 'BUSINESS_STATS';

export interface SubjectInfo {
  id: Subject;
  name: string;
  description: string;
  imageUrl: string;
  weeklyTopics?: string[];
}

export type QuizType = 'SHORT' | 'LONG';

export interface QuizConfig {
  id: string;
  title: string;
  subjectId: Subject;
  type: QuizType;
  questionCount: number;
  timeLimit: number; // in minutes
  week?: number;
  description?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topics: string[];
  week?: number;
}

export interface AnswerState {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean;
  markedForReview?: boolean;
}

export interface QuizResult {
  id: string;
  quizId: string;
  subjectId: Subject;
  answers: AnswerState[];
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  completedAt: string;
}

export interface TopicAnalysis {
  topic: string;
  correctCount: number;
  totalCount: number;
  percentage: number;
}