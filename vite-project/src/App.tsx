import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import StudyPage from './pages/StudyPage';
import StatsPage from './pages/StatsPage';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/study" element={<StudyPage />} />
                    <Route path="/study/:category" element={<StudyPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/quiz/:category" element={<QuizPage />} />
                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
