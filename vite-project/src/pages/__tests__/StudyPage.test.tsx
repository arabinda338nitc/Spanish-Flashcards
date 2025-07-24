import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StudyPage from '../StudyPage';
import { flashcards } from '../../data/flashcards';

describe('StudyPage', () => {
  const renderWithRouter = (category = 'animals') =>
    render(
      <MemoryRouter initialEntries={[`/study/${category}`]}>
        <Routes>
          <Route path="/study/:category" element={<StudyPage />} />
        </Routes>
      </MemoryRouter>
    );

  it('shows the correct number of cards', () => {
    renderWithRouter();
    expect(screen.getByText(/Card 1 of/)).toBeInTheDocument();
  });

  it('shows "Great job" if all cards are marked right', () => {
    renderWithRouter();
    flashcards.filter(f => f.category === 'animals').forEach(() => {
      fireEvent.click(screen.getByTestId('flashcard-content'));
      fireEvent.click(screen.getByText('✅ Right'));
    });
    expect(screen.getByText(/Great job/i)).toBeInTheDocument();
  });

  it('shows results if some cards are marked wrong', () => {
    renderWithRouter();
    fireEvent.click(screen.getByTestId('flashcard-content'));
    fireEvent.click(screen.getByText('❌ Wrong'));
    fireEvent.click(screen.getByTestId('flashcard-content'));
    fireEvent.click(screen.getByText('✅ Right'));
    fireEvent.click(screen.getByTestId('flashcard-content'));
    fireEvent.click(screen.getByText('✅ Right'));
    expect(screen.getByText(/Results:/i)).toBeInTheDocument();
  });

  it('shows skipped message if only Next is clicked', () => {
    renderWithRouter();
    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByText('Next'));
    }
    expect(screen.getByText(/skipped through all cards/i)).toBeInTheDocument();
  });
}); 