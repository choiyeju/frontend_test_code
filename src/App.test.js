import { render, screen } from '@testing-library/react';
import App from './App';

test('ByRole test', () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "파란색으로 바뀜" });
});

test('ByLabelText test', () => {
  render(<App />);
  const inputNode = screen.getByLabelText('Username', {selector: 'input'});
});
