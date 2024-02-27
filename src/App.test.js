import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should show login form', () => {
  render(<App />)
  const input = screen.getByLabelText('Username')
  expect(input).toBeInTheDocument();
})

test('hello world', () => {
  render(<App />)
  const text = screen.getByText('Learn React')
  expect(text).toBeInTheDocument();
})