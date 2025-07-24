import { useState, useEffect } from 'react';

interface FlashcardProps {
  spanish: string;
  english: string;
  onRight: () => void;
  onWrong: () => void;
  cardKey?: string; // Add a key to reset the component when card changes
}

const Flashcard: React.FC<FlashcardProps> = ({ spanish, english, onRight, onWrong, cardKey }) => {
  const [flipped, setFlipped] = useState(false);

  // Reset flipped state when card changes
  useEffect(() => {
    setFlipped(false);
  }, [cardKey]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        onClick={() => setFlipped(true)}
        style={{
          width: 300,
          height: 180,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          cursor: 'pointer',
          marginBottom: 24,
          transition: 'all 0.3s ease',
          transform: flipped ? 'scale(1.02)' : 'scale(1)',
          border: flipped ? '2px solid #1976d2' : '2px solid transparent',
        }}
      >
        <div style={{ 
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>
          {flipped ? english : spanish}
        </div>
      </div>
      {flipped && (
        <div style={{ display: 'flex', gap: 16 }}>
          <button 
            style={{ 
              background: '#43a047', 
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }} 
            onClick={onRight}
          >
            ✅ Right
          </button>
          <button 
            style={{ 
              background: '#e53935', 
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }} 
            onClick={onWrong}
          >
            ❌ Wrong
          </button>
        </div>
      )}
      {!flipped && (
        <div style={{ 
          marginTop: 16, 
          color: '#666', 
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Click the card to see the translation
        </div>
      )}
    </div>
  );
};

export default Flashcard; 