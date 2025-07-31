import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flashcards, type Flashcard as FlashcardType } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import CategorySelectionPage from './CategorySelectionPage';
import './StudyPage.css';

/**
 * StudyPage component
 *
 * This component renders the study mode of the application.
 * It displays flashcards for a selected category and tracks the user's progress.
 */
const StudyPage: React.FC = () => {
    // Get category from URL params
    const { category } = useParams<{ category?: string }>();
    // useNavigate hook to handle navigation
    const navigate = useNavigate();

    // Memoized list of cards for the selected category
    const cards = useMemo(() => {
        return category ? flashcards.filter(card => card.category === category) : [];
    }, [category]);

    // State variables
    const [current, setCurrent] = useState(0); // Index of the current card
    const [wrong, setWrong] = useState<FlashcardType[]>([]); // List of incorrectly answered cards
    const [attempted, setAttempted] = useState<FlashcardType[]>([]); // List of attempted cards
    const [done, setDone] = useState(false); // Flag to indicate if the study session is complete

    /**
     * Handles the logic when the user answers a card correctly.
     */
    const handleRight = () => {
        if (!attempted.includes(cards[current])) {
            setAttempted([...attempted, cards[current]]);
        }
    };

    /**
     * Handles the logic when the user answers a card incorrectly.
     */
    const handleWrong = () => {
        if (!attempted.includes(cards[current])) {
            setAttempted([...attempted, cards[current]]);
        }
        setWrong([...wrong, cards[current]]);
    };

    /**
     * Handles the logic when the user moves to the next card.
     */
    const handleNext = () => {
        if (current < cards.length - 1) {
            setCurrent(current + 1);
        } else {
            setDone(true);
        }
    };

    /**
     * Renders the completion message at the end of the study session.
     */
    const renderCompletionMessage = () => {
        const totalCorrect = attempted.length - wrong.length;
        const totalAttempted = attempted.length;

        if (totalAttempted === 0) {
            return <p>You didn't attempt any cards.</p>;
        }

        if (wrong.length === 0) {
            return <p>Great Job, you got all the cards right.</p>;
        }

        return (
            <p>
                {totalCorrect} out of {totalAttempted} cards attempted is correct.
            </p>
        );
    };

    // If no category is selected, render the category selection page
    if (!category) {
        return <CategorySelectionPage />;
    }

    const card = cards[current];

    // If the study session is complete, render the completion message
    if (done) {
        return (
            <div className="completion-message">
                <h2>You finished all cards in this category.</h2>
                {renderCompletionMessage()}
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    // Render the study page with the current flashcard
    return (
        <div className="study-page-container">
            <h2>Study Mode: {category?.charAt(0).toUpperCase() + category?.slice(1)}</h2>
            <Flashcard
                spanish={card.spanish}
                english={card.english}
                onRight={handleRight}
                onWrong={handleWrong}
                cardKey={`${category}-${current}`}
            />
            <div className="card-info">
                <div className="card-counter">
                    Card {current + 1} of {cards.length}
                </div>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default StudyPage; 