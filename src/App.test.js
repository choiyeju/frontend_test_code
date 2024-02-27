import { render, screen } from '@testing-library/react';
import App from './App';

test('getByRole test', () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "파란색으로 바뀜" });
});
