
import { useParams } from 'react-router-dom';
import CategorySelectionPage from './CategorySelectionPage';

const QuizPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  if (!category) {
    return <CategorySelectionPage />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 48 }}>
      <h2>Quiz Mode (Placeholder)</h2>
      <p>This is the Quiz Mode page for category: {category}. Content coming soon.</p>
    </div>
  );
};

export default QuizPage; 