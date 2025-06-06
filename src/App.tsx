import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import QuizPage from "./pages/QuizPage";
import AnalysisPage from "./pages/AnalysisPage";
import QuizResultPage from "./pages/QuizResultPage";
import AuthPage from "./pages/AuthPage";
import { TempoDevtools } from "tempo-devtools";

// Import Tempo routes if in Tempo environment
let tempoRoutes: any = null;
try {
  if (import.meta.env.VITE_TEMPO === "true") {
    // @ts-ignore - This import is dynamically created by the Tempo plugin
    tempoRoutes = require("tempo-routes").default;
  }
} catch (error) {
  console.error("Failed to import Tempo routes:", error);
}

function App() {
  // Initialize Tempo Devtools
  React.useEffect(() => {
    if (import.meta.env.VITE_TEMPO === "true") {
      TempoDevtools.init();
    }
  }, []);
  return (
    <ThemeProvider>
      <AuthProvider>
        <QuizProvider>
          <ErrorBoundary>
            <Router>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
                <Header />
                <main className="flex-grow">
                  {/* Tempo routes for storyboards */}
                  {import.meta.env.VITE_TEMPO === "true" &&
                    tempoRoutes &&
                    useRoutes(tempoRoutes)}

                  <Routes>
                    {/* Add this before the catchall route if you have one */}
                    {import.meta.env.VITE_TEMPO === "true" && (
                      <Route path="/tempobook/*" element={null} />
                    )}

                    <Route path="/auth" element={<AuthPage />} />
                    <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <HomePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/subjects/:subjectId"
                      element={
                        <ProtectedRoute>
                          <SubjectPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/quiz/:quizId"
                      element={
                        <ProtectedRoute>
                          <QuizPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/analysis"
                      element={
                        <ProtectedRoute>
                          <AnalysisPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/analysis/:resultId"
                      element={
                        <ProtectedRoute>
                          <QuizResultPage />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </main>
                <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 transition-colors">
                  <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} NPTEL Quiz Practice App. Not
                    affiliated with NPTEL.
                  </div>
                </footer>
              </div>
            </Router>
          </ErrorBoundary>
        </QuizProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
