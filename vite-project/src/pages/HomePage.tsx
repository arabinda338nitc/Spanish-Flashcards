import { useNavigate } from 'react-router-dom';
import './HomePage.css';

/**
 * HomePage component
 *
 * This component renders the home page of the application, which includes a title and navigation buttons to the different modes of the application.
 */
const HomePage: React.FC = () => {
    // useNavigate hook to handle navigation
    const navigate = useNavigate();

    return (
        <div className="home-page-container">
            <div className="game-zone">Welcome to the game zone</div>
            <h1>Spanish Flashcards</h1>
            {/* Navigation buttons */}
            <button onClick={() => navigate('/study')}>Study Mode</button>
            <button onClick={() => navigate('/quiz')}>Quiz Mode</button>
            <button onClick={() => navigate('/stats')}>Stats Page</button>
        </div>
    );
};

export default HomePage; 