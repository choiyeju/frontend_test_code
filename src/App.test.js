import { render, screen } from '@testing-library/react';
import App from './App';

test('ByRole test', () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Username" });
});

test('ByLabelText test', () => {
  render(<App />);
  const inputNode = screen.getByLabelText('Username', {selector: 'input'});
});

test('ByPlaceholderText test', () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText('Username');
});

test('ByText test', () => {
  render(<App />);
  const aboutAnchorNode = screen.getByText(/about/i);
});

test('ByDisplayValue test', () => {
  render(<App />);
  const input = screen.getByDisplayValue('default-value');
});

test('getByTitle test', () => {
  render(<App />);
  const div = screen.getByTitle('TIP');
});

test('getByTestId test', () => {
  render(<App />);
  const div = screen.getByTestId('testid');
});
