import { QuizConfig } from '../types';

// Short quizzes (10 questions, 30 min)
export const shortQuizzes: QuizConfig[] = [
  // Social Networks Weekly Quizzes
  {
    id: 'sn-week1',
    title: 'Social Networks: Week 1 - Fundamentals',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 1
  },
  {
    id: 'sn-week2',
    title: 'Social Networks: Week 2 - Graph Theory',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 2
  },
  {
    id: 'sn-week3',
    title: 'Social Networks: Week 3 - Network Analysis',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 3
  },
  {
    id: 'sn-week4',
    title: 'Social Networks: Week 4 - Information Diffusion',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 4
  },
  
  // Data Analysis Weekly Quizzes
  {
    id: 'da-week1',
    title: 'Python: Week 1 - Basics & NumPy',
    subjectId: 'DATA_ANALYSIS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 1
  },
  {
    id: 'da-week2',
    title: 'Python: Week 2 - Pandas Fundamentals',
    subjectId: 'DATA_ANALYSIS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 2
  },
  {
    id: 'da-week3',
    title: 'Python: Week 3 - Data Visualization',
    subjectId: 'DATA_ANALYSIS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 3
  },
  {
    id: 'da-week4',
    title: 'Python: Week 4 - Statistical Analysis',
    subjectId: 'DATA_ANALYSIS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 4
  },
  
  // Business Statistics Weekly Quizzes
  {
    id: 'bs-week1',
    title: 'Statistics: Week 1 - Probability',
    subjectId: 'BUSINESS_STATS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 1
  },
  {
    id: 'bs-week2',
    title: 'Statistics: Week 2 - Distributions',
    subjectId: 'BUSINESS_STATS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 2
  },
  {
    id: 'bs-week3',
    title: 'Statistics: Week 3 - Hypothesis Testing',
    subjectId: 'BUSINESS_STATS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 3
  },
  {
    id: 'bs-week4',
    title: 'Statistics: Week 4 - Regression',
    subjectId: 'BUSINESS_STATS',
    type: 'SHORT',
    questionCount: 10,
    timeLimit: 30,
    week: 4
  }
];

// Long quizzes (50 questions, 3 hours)
export const longQuizzes: QuizConfig[] = [
  // Social Networks Full Practice Tests
  {
    id: 'sn-full-1',
    title: 'Social Networks: Complete Course Test 1',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Comprehensive test covering Weeks 1-4'
  },
  {
    id: 'sn-full-2',
    title: 'Social Networks: Complete Course Test 2',
    subjectId: 'SOCIAL_NETWORKS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Alternative version with different question set'
  },
  
  // Data Analysis Full Practice Tests
  {
    id: 'da-full-1',
    title: 'Python Data Analysis: Complete Test 1',
    subjectId: 'DATA_ANALYSIS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Comprehensive coverage of Python data analysis topics'
  },
  {
    id: 'da-full-2',
    title: 'Python Data Analysis: Complete Test 2',
    subjectId: 'DATA_ANALYSIS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Alternative version with focus on practical applications'
  },
  
  // Business Statistics Full Practice Tests
  {
    id: 'bs-full-1',
    title: 'Business Statistics: Complete Test 1',
    subjectId: 'BUSINESS_STATS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Comprehensive statistics examination'
  },
  {
    id: 'bs-full-2',
    title: 'Business Statistics: Complete Test 2',
    subjectId: 'BUSINESS_STATS',
    type: 'LONG',
    questionCount: 50,
    timeLimit: 180,
    description: 'Alternative version with different problem sets'
  }
];

export const getAllQuizzes = (): QuizConfig[] => {
  return [...shortQuizzes, ...longQuizzes];
};

export const getQuizzesBySubject = (subjectId: string): QuizConfig[] => {
  return getAllQuizzes().filter(quiz => quiz.subjectId === subjectId);
};

export const getQuizzesByWeek = (subjectId: string, week: number): QuizConfig[] => {
  return shortQuizzes.filter(quiz => quiz.subjectId === subjectId && quiz.week === week);
};

export const getQuizById = (quizId: string): QuizConfig | undefined => {
  return getAllQuizzes().find(quiz => quiz.id === quizId);
};