import { useState, useEffect } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  spanish: string;
  english: string;
  onRight: () => void;
  onWrong: () => void;
  cardKey?: string;
}

/**
 * Flashcard component
 *
 * This component renders a flashcard with a Spanish word on the front and an English word on the back.
 * The card can be flipped by clicking on it.
 * When the card is flipped, the user can mark their answer as right or wrong.
 */
const Flashcard: React.FC<FlashcardProps> = ({ spanish, english, onRight, onWrong, cardKey }) => {
    // State to track if the card is flipped
    const [flipped, setFlipped] = useState(false);

    // useEffect hook to reset the flipped state when the card changes
    useEffect(() => {
        setFlipped(false);
    }, [cardKey]);

    // CSS classes for the card
    const cardClasses = `flashcard ${flipped ? 'flipped' : ''}`;

    return (
        <div className="flashcard-container">
            <div
                className={cardClasses}
                onClick={() => setFlipped(!flipped)}
                data-testid="flashcard"
            >
                {/* Front of the card */}
                <div className="card-face card-front" data-testid="flashcard-content-front">
                    {spanish}
                </div>
                {/* Back of the card */}
                <div className="card-face card-back" data-testid="flashcard-content-back">
                    {english}
                </div>
            </div>

            {/* Buttons to mark the answer as right or wrong */}
            {flipped && (
                <div className="flashcard-buttons">
                    <button className="right-button" onClick={onRight}>✅ Right</button>
                    <button className="wrong-button" onClick={onWrong}>❌ Wrong</button>
                </div>
            )}

            {/* Helper text to guide the user */}
            {!flipped && (
                <div className="helper-text">
                    Click the card to see the translation
                </div>
            )}
        </div>
    );
};

export default Flashcard; 