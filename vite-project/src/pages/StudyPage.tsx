import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flashcards, type Flashcard as FlashcardType } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import CategorySelectionPage from './CategorySelectionPage';

const StudyPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [wrong, setWrong] = useState<FlashcardType[]>([]);
  const [attempted, setAttempted] = useState<FlashcardType[]>([]);
  const [done, setDone] = useState(false);

  if (!category) {
    // Show category selection if no category is selected
    return <CategorySelectionPage />;
  }

  const cards = flashcards.filter((c) => c.category === category);
  const card = cards[current];

  const handleRight = () => {
    // Mark this card as attempted
    setAttempted(prev => [...prev, card]);
    
    if (current < cards.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setDone(true);
    }
  };

  const handleWrong = () => {
    // Mark this card as attempted and wrong
    setAttempted(prev => [...prev, card]);
    setWrong((w) => [...w, card]);
    
    if (current < cards.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setDone(true);
    }
  };

  const handleNext = () => {
    // Don't mark as attempted when skipping
    if (current < cards.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const totalAttempted = attempted.length;
    const totalCorrect = totalAttempted - wrong.length;
    
    return (
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <h2>Study Session Complete!</h2>
        <p>You finished all cards in this category.</p>
        
        {totalAttempted === 0 ? (
          // No cards attempted - just skipped through
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            You skipped through all cards without attempting any.
          </p>
        ) : totalAttempted === cards.length && wrong.length === 0 ? (
          // All cards attempted and all correct
          <p style={{ color: '#43a047', fontWeight: 'bold' }}>
            🎉 Great job! You got all {totalAttempted} cards right!
          </p>
        ) : (
          // Some cards attempted, show results
          <div>
            <p style={{ color: '#1976d2', fontWeight: 'bold' }}>
              📊 Results: {totalCorrect} out of {totalAttempted} cards attempted are correct
            </p>
            {wrong.length > 0 && (
              <p style={{ color: '#e53935' }}>
                You marked {wrong.length} card(s) as wrong. (Redo mode coming soon!)
              </p>
            )}
          </div>
        )}
        
        <button 
          style={{ 
            marginTop: 24,
            padding: '12px 24px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }} 
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48 }}>
      <h2>Study Mode: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <Flashcard
        spanish={card.spanish}
        english={card.english}
        onRight={handleRight}
        onWrong={handleWrong}
        cardKey={`${category}-${current}`} // This will reset the component when card changes
      />
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <div style={{ marginBottom: 16, fontSize: '16px', color: '#666' }}>
          Card {current + 1} of {cards.length}
        </div>
        <button 
          style={{ 
            padding: '8px 16px',
            background: '#666',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }} 
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyPage; 