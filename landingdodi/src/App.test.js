import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page hero section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /welcome to dodi/i });
  expect(heading).toBeInTheDocument();
});
