
import { useNavigate } from 'react-router-dom';
import './CategorySelectionPage.css';

const categories = [
    { key: 'animals', label: 'Animals' },
    { key: 'food', label: 'Food' },
    { key: 'verbs', label: 'Verbs' },
];

const CategorySelectionPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="category-selection-container">
            <h2>Select a Category</h2>
            <div className="category-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
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