import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /calidad y precisión/i })).toBeInTheDocument();
});
