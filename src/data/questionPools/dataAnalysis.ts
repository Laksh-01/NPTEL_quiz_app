import { Question } from '../../types';

// Placeholder questions for Data Analysis with Python
export const dataAnalysisQuestions: Question[] = [
  {
    id: 'da-q1',
    text: 'Which Python library is primarily used for data manipulation and analysis?',
    options: [
      'NumPy',
      'Matplotlib',
      'Pandas',
      'SciPy'
    ],
    correctAnswer: 2,
    explanation: 'Pandas is a Python library specifically designed for data manipulation and analysis, providing data structures like DataFrames and Series that are optimized for these tasks.',
    topics: ['Python Libraries', 'Data Manipulation']
  },
  {
    id: 'da-q2',
    text: 'What does the pandas function `df.head()` do?',
    options: [
      'Returns the last 5 rows of the DataFrame',
      'Returns the first 5 rows of the DataFrame',
      'Returns the column headers of the DataFrame',
      'Returns the row with the highest values'
    ],
    correctAnswer: 1,
    explanation: 'The `df.head()` function returns the first 5 rows of a DataFrame by default, which is useful for quickly inspecting the data structure and contents.',
    topics: ['Pandas', 'Data Inspection']
  },
  {
    id: 'da-q3',
    text: 'Which of the following methods is used to handle missing values in a DataFrame?',
    options: [
      'df.drop_na()',
      'df.fillna()',
      'df.remove_null()',
      'df.replace_missing()'
    ],
    correctAnswer: 1,
    explanation: 'The `fillna()` method is used to fill missing values in a DataFrame with a specified value or using various strategies like forward fill or backward fill.',
    topics: ['Data Cleaning', 'Missing Data']
  },
  {
    id: 'da-q4',
    text: 'Which visualization library is built on matplotlib and provides a high-level interface for creating statistical graphics?',
    options: [
      'Plotly',
      'Bokeh',
      'Seaborn',
      'ggplot'
    ],
    correctAnswer: 2,
    explanation: 'Seaborn is a statistical data visualization library based on matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.',
    topics: ['Data Visualization', 'Statistical Graphics']
  },
  {
    id: 'da-q5',
    text: 'What is the purpose of the `groupby()` function in pandas?',
    options: [
      'To sort data alphabetically by column name',
      'To split the data into groups based on some criteria',
      'To group multiple DataFrames into a single DataFrame',
      'To create a new column of grouped values'
    ],
    correctAnswer: 1,
    explanation: 'The `groupby()` function splits the data into groups based on some criteria, then applies a function to each group independently, allowing for powerful data aggregation and transformation.',
    topics: ['Data Aggregation', 'Group Operations']
  },
  {
    id: 'da-q6',
    text: 'Which method would you use to merge two DataFrames based on a common column?',
    options: [
      'df1.combine(df2)',
      'df1.join(df2)',
      'df1.append(df2)',
      'pd.merge(df1, df2)'
    ],
    correctAnswer: 3,
    explanation: 'The `pd.merge()` function is used to merge DataFrame objects with a database-style join operation, combining them based on one or more common columns.',
    topics: ['Data Combining', 'Merge Operations']
  },
  {
    id: 'da-q7',
    text: 'What does the `apply()` function do in pandas?',
    options: [
      'Adds two DataFrames together',
      'Applies a function along an axis of the DataFrame',
      'Creates a copy of the DataFrame',
      'Automatically formats the DataFrame for presentation'
    ],
    correctAnswer: 1,
    explanation: 'The `apply()` function applies a function along an axis (either rows or columns) of the DataFrame, allowing custom operations on the data.',
    topics: ['Data Transformation', 'Functions Application']
  },
  {
    id: 'da-q8',
    text: 'Which library would you use for implementing machine learning algorithms in Python?',
    options: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Matplotlib'
    ],
    correctAnswer: 2,
    explanation: 'Scikit-learn is a machine learning library for Python that features various classification, regression, and clustering algorithms, as well as tools for model evaluation and preprocessing.',
    topics: ['Machine Learning', 'Python Libraries']
  },
  {
    id: 'da-q9',
    text: 'What is the primary purpose of NumPy in data analysis?',
    options: [
      'Database management',
      'Numerical and array operations',
      'Web scraping',
      'Text processing'
    ],
    correctAnswer: 1,
    explanation: 'NumPy (Numerical Python) is the fundamental package for scientific computing in Python, providing support for arrays, matrices, and many mathematical functions to operate on these data structures efficiently.',
    topics: ['NumPy', 'Numerical Computing']
  },
  {
    id: 'da-q10',
    text: 'Which pandas method creates a cross-tabulation table?',
    options: [
      'cross_table()',
      'crosstab()',
      'pivot_table()',
      'contingency_table()'
    ],
    correctAnswer: 1,
    explanation: 'The `pd.crosstab()` function computes a simple cross-tabulation of two (or more) factors, creating a contingency table that shows the frequency of different value combinations.',
    topics: ['Data Analysis', 'Contingency Tables']
  },
  {
    id: 'da-q11',
    text: 'What is a "vectorized" operation in the context of NumPy and Pandas?',
    options: [
      'Converting data to vector graphics format',
      'Operations that work element-wise on arrays without explicit loops',
      'Operations that convert data into 3D vectors',
      'Using vector calculus for data analysis'
    ],
    correctAnswer: 1,
    explanation: 'Vectorized operations in NumPy and Pandas perform operations on entire arrays without the need for explicit Python loops, which is much faster and more efficient.',
    topics: ['Performance Optimization', 'Vectorization']
  },
  {
    id: 'da-q12',
    text: 'What does the pandas method `value_counts()` do?',
    options: [
      'Counts the total number of values in a DataFrame',
      'Counts the number of non-null values in each column',
      'Returns a Series containing counts of unique values',
      'Calculates the sum of all numeric values'
    ],
    correctAnswer: 2,
    explanation: 'The `value_counts()` method returns a Series containing counts of unique values in descending order, which is useful for understanding the distribution of categorical variables.',
    topics: ['Exploratory Data Analysis', 'Categorical Data']
  },
  // Add more questions as needed...
];

// Function to get a random subset of questions
export const getRandomDataAnalysisQuestions = (count: number): Question[] => {
  const shuffled = [...dataAnalysisQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};