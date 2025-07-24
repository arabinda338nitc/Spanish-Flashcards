import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, marginTop: 48 }}>
      <div style={{ fontSize: '1.5em', marginBottom: 8 }}>Welcome to the game zone</div>
      <h1>Spanish Flashcards</h1>
      <button style={{ backgroundColor: 'rgb(9,102,194)', color: '#fff' }} onClick={() => navigate('/study')}>Study Mode</button>
      <button style={{ backgroundColor: 'rgb(9,102,194)', color: '#fff' }} onClick={() => navigate('/quiz')}>Quiz Mode</button>
      <button style={{ backgroundColor: 'rgb(9,102,194)', color: '#fff' }} onClick={() => navigate('/stats')}>Stats Page</button>
    </div>
  );
};

export default HomePage; 