import { Question } from '../../types';

// Placeholder questions for Business Statistics
export const businessStatsQuestions: Question[] = [
  {
    id: 'bs-q1',
    text: 'What measure of central tendency is most affected by extreme values?',
    options: [
      'Mean',
      'Median',
      'Mode',
      'Geometric mean'
    ],
    correctAnswer: 0,
    explanation: 'The arithmetic mean is heavily influenced by outliers or extreme values, unlike the median which is more robust to such values.',
    topics: ['Central Tendency', 'Descriptive Statistics']
  },
  {
    id: 'bs-q2',
    text: 'What does a p-value of 0.03 indicate in hypothesis testing?',
    options: [
      'The null hypothesis is definitely true',
      'The alternative hypothesis is definitely true',
      'There is a 3% chance that the observed result occurred by random chance if the null hypothesis is true',
      'There is a 97% chance that the null hypothesis is true'
    ],
    correctAnswer: 2,
    explanation: 'A p-value of 0.03 indicates that there is a 3% probability of observing a result at least as extreme as the one obtained, assuming the null hypothesis is true.',
    topics: ['Hypothesis Testing', 'Statistical Significance']
  },
  {
    id: 'bs-q3',
    text: 'Which of the following best describes a Type II error?',
    options: [
      'Rejecting a true null hypothesis',
      'Failing to reject a false null hypothesis',
      'Rejecting a false null hypothesis',
      'Failing to reject a true null hypothesis'
    ],
    correctAnswer: 1,
    explanation: 'A Type II error occurs when we fail to reject a null hypothesis that is actually false, essentially missing a real effect or difference.',
    topics: ['Statistical Errors', 'Hypothesis Testing']
  },
  {
    id: 'bs-q4',
    text: 'What does R-squared measure in regression analysis?',
    options: [
      'The correlation between variables',
      'The proportion of variance in the dependent variable explained by the independent variables',
      'The average error in predictions',
      'The statistical significance of the regression model'
    ],
    correctAnswer: 1,
    explanation: 'R-squared is a statistical measure that represents the proportion of the variance in the dependent variable that is explained by the independent variables in the regression model.',
    topics: ['Regression Analysis', 'Model Fit']
  },
  {
    id: 'bs-q5',
    text: 'Which distribution would you use to model the number of defects in a manufacturing process?',
    options: [
      'Normal distribution',
      'Binomial distribution',
      'Poisson distribution',
      'Exponential distribution'
    ],
    correctAnswer: 2,
    explanation: 'The Poisson distribution is particularly useful for modeling the number of events (like defects) occurring in a fixed interval of time or space, especially when these events happen with a known average rate.',
    topics: ['Probability Distributions', 'Quality Control']
  },
  {
    id: 'bs-q6',
    text: 'What is the appropriate test for comparing means between two independent groups?',
    options: [
      'Paired t-test',
      'Chi-square test',
      'ANOVA',
      'Independent samples t-test'
    ],
    correctAnswer: 3,
    explanation: 'The independent samples t-test is used to compare means between two unrelated groups to determine if there is a statistically significant difference.',
    topics: ['Comparative Statistics', 'Hypothesis Testing']
  },
  {
    id: 'bs-q7',
    text: 'What does a 95% confidence interval represent?',
    options: [
      'We are 95% confident that the sample mean is the true population mean',
      'The range that contains 95% of all possible sample means',
      'The range that has a 95% probability of containing the true population parameter',
      '95% of the sample data falls within this range'
    ],
    correctAnswer: 2,
    explanation: 'A 95% confidence interval provides a range of values that has a 95% probability of containing the true population parameter, based on the observed data.',
    topics: ['Interval Estimation', 'Statistical Inference']
  },
  {
    id: 'bs-q8',
    text: 'What is the Central Limit Theorem?',
    options: [
      'The theory that all data tends to be centered around the mean',
      'The principle that the average of sufficiently large samples will be normally distributed',
      'The concept that all statistical tests should be centered on the null hypothesis',
      'The rule that centrally located data points are more important'
    ],
    correctAnswer: 1,
    explanation: 'The Central Limit Theorem states that the sampling distribution of the sample mean approaches a normal distribution as the sample size gets larger, regardless of the shape of the population distribution.',
    topics: ['Sampling Distributions', 'Statistical Theory']
  },
  {
    id: 'bs-q9',
    text: 'In a normal distribution, what percentage of values falls within one standard deviation of the mean?',
    options: [
      'Approximately 50%',
      'Approximately 68%',
      'Approximately 95%',
      'Approximately 99.7%'
    ],
    correctAnswer: 1,
    explanation: 'In a normal distribution, approximately 68% of the values fall within one standard deviation of the mean, following the 68-95-99.7 rule.',
    topics: ['Normal Distribution', 'Probability']
  },
  {
    id: 'bs-q10',
    text: 'What statistical technique would you use to identify patterns and relationships among many variables simultaneously?',
    options: [
      'Simple linear regression',
      'Chi-square test',
      'Multivariate analysis',
      'Z-test'
    ],
    correctAnswer: 2,
    explanation: 'Multivariate analysis includes various statistical techniques for analyzing several variables simultaneously, helping to identify patterns, correlations, and relationships within complex datasets.',
    topics: ['Multivariate Statistics', 'Data Analysis']
  },
  {
    id: 'bs-q11',
    text: 'What does ANOVA (Analysis of Variance) test?',
    options: [
      'The difference between two proportions',
      'The relationship between two continuous variables',
      'The difference in means among three or more groups',
      'The goodness of fit of observed data to a model'
    ],
    correctAnswer: 2,
    explanation: 'ANOVA is used to test for differences in means among three or more independent groups, determining if there is statistical evidence that the associated population means are significantly different.',
    topics: ['ANOVA', 'Group Comparisons']
  },
  {
    id: 'bs-q12',
    text: 'What is stratified sampling?',
    options: [
      'Dividing the population into distinct subgroups and sampling from each',
      'Selecting a completely random sample from the entire population',
      'Taking the first x number of individuals from a population',
      'Sampling based on the convenience of access'
    ],
    correctAnswer: 0,
    explanation: 'Stratified sampling involves dividing the population into distinct, non-overlapping subgroups (strata) and then selecting samples from each stratum in proportion to their size in the overall population.',
    topics: ['Sampling Methods', 'Research Design']
  },
  // Add more questions as needed...
];

// Function to get a random subset of questions
export const getRandomBusinessStatsQuestions = (count: number): Question[] => {
  const shuffled = [...businessStatsQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};