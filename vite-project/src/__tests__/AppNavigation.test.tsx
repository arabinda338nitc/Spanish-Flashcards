import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('App Navigation', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('navigates to Study Mode', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Study Mode'));
    expect(mockNavigate).toHaveBeenCalledWith('/study');
  });

  it('navigates to Quiz Mode', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Quiz Mode'));
    expect(mockNavigate).toHaveBeenCalledWith('/quiz');
  });

  it('navigates to Stats Page', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Stats Page'));
    expect(mockNavigate).toHaveBeenCalledWith('/stats');
  });
}); 