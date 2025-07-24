import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import StudyPage from './pages/StudyPage';
import StatsPage from './pages/StatsPage';
import CategorySelectionPage from './pages/CategorySelectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/study/:category" element={<StudyPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
