import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page hero section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /la educación está cambiando\. dodi evoluciona contigo\./i,
  });
  expect(heading).toBeInTheDocument();
});
