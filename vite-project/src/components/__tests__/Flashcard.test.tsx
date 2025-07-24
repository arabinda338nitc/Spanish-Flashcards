import { render, screen, fireEvent } from '@testing-library/react';
import Flashcard from '../Flashcard';

describe('Flashcard', () => {
  const baseProps = {
    spanish: 'el gato',
    english: 'the cat',
    onRight: jest.fn(),
    onWrong: jest.fn(),
    cardKey: 'animals-0',
  };

  it('renders the Spanish word by default', () => {
    render(<Flashcard {...baseProps} />);
    expect(screen.getByText('el gato')).toBeInTheDocument();
  });

  it('flips to show the English translation on click', () => {
    render(<Flashcard {...baseProps} />);
    fireEvent.click(screen.getByTestId('flashcard-content'));
    expect(screen.getByText('the cat')).toBeInTheDocument();
  });

  it('calls onRight when Right button is clicked', () => {
    render(<Flashcard {...baseProps} />);
    fireEvent.click(screen.getByTestId('flashcard-content'));
    fireEvent.click(screen.getByText('✅ Right'));
    expect(baseProps.onRight).toHaveBeenCalled();
  });

  it('calls onWrong when Wrong button is clicked', () => {
    render(<Flashcard {...baseProps} />);
    fireEvent.click(screen.getByTestId('flashcard-content'));
    fireEvent.click(screen.getByText('❌ Wrong'));
    expect(baseProps.onWrong).toHaveBeenCalled();
  });


}); 