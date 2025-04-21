/*
  # Create user progress tracking tables

  1. New Tables
    - `user_quiz_results`
      - Stores quiz results and progress
    - `user_topic_progress`
      - Tracks progress by topic
    
  2. Security
    - Enable RLS on all tables
    - Add policies for user data access
*/

-- Create user quiz results table
CREATE TABLE IF NOT EXISTS user_quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id text NOT NULL,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  time_taken integer NOT NULL,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create user topic progress table
CREATE TABLE IF NOT EXISTS user_topic_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_id text NOT NULL,
  topic text NOT NULL,
  correct_answers integer DEFAULT 0,
  total_attempts integer DEFAULT 0,
  last_attempt_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_topic_progress ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own quiz results"
  ON user_quiz_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz results"
  ON user_quiz_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own topic progress"
  ON user_topic_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own topic progress"
  ON user_topic_progress
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);