import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubjectInfo } from '../types';
import { subjects } from '../data/subjects';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubjectSelect = (subject: SubjectInfo) => {
    navigate(`/subjects/${subject.id}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">NPTEL Swayam Course Quiz</h1>
            <p className="text-lg text-gray-600 mb-6">
              Practice for your exams with our curated quizzes for NPTEL Swayam courses
            </p>
            <p className="text-sm bg-blue-50 text-blue-700 p-3 rounded-lg inline-block">
              Select a subject below to start practicing with quick quizzes or full practice exams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => handleSubjectSelect(subject)}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={subject.imageUrl}
                    alt={subject.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h2>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                  
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => handleSubjectSelect(subject)}
                  >
                    Start Practicing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;