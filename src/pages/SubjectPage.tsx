import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizConfig } from '../types';
import { subjects } from '../data/subjects';
import { getQuizzesBySubject } from '../data/quizConfigs';
import QuizCard from '../components/quiz/QuizCard';
import { ArrowLeft } from 'lucide-react';

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const quizzes = getQuizzesBySubject(subjectId || '');
  
  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h2>
        <p className="mb-6">We couldn't find the subject you're looking for.</p>
        <button
          className="text-blue-600 flex items-center justify-center mx-auto"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Return to home
        </button>
      </div>
    );
  }
  
  const shortQuizzes = quizzes.filter(quiz => quiz.type === 'SHORT');
  const longQuizzes = quizzes.filter(quiz => quiz.type === 'LONG');
  
  const handleQuizSelect = (quiz: QuizConfig) => {
    navigate(`/quiz/${quiz.id}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <button
          className="flex items-center text-blue-600 mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Subjects
        </button>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={subject.imageUrl}
                alt={subject.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">{subject.name}</h1>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          </div>
          
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Practice (10 questions, 30 min)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shortQuizzes.map(quiz => (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  onClick={handleQuizSelect}
                />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Full Practice Exams (50 questions, 3 hrs)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {longQuizzes.map(quiz => (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  onClick={handleQuizSelect}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;