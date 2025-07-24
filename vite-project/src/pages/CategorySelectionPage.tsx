
import { useNavigate } from 'react-router-dom';

const categories = [
  { key: 'animals', label: 'Animals' },
  { key: 'food', label: 'Food' },
  { key: 'verbs', label: 'Verbs' },
];

const CategorySelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48 }}>
      <h2>Select a Category</h2>
      <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            style={{ padding: '16px 32px', fontSize: '1.2em', borderRadius: 8, background: '#1976d2', color: '#fff' }}
            onClick={() => navigate(`/study/${cat.key}`)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectionPage; 