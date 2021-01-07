import { render, screen } from '@testing-library/react';
import Button from './Button';

// test('renders learn react link', () => {
//   render(<Button />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders button', () => {
  render(<Button />);
  const buttonElement = screen.getByText(/button/i);
  expect(buttonElement).toBeInTheDocument();
});