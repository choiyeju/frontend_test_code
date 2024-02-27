import { render, screen } from '@testing-library/react';
import Main from './Main';

test('ByRole test', () => {
    render(<Main />);
    const colorButton = screen.getByRole("button", { name: "Username" });
});

test('ByLabelText test', () => {
    render(<Main />);
    const inputNode = screen.getByLabelText('Username', {selector: 'input'});
});

test('ByPlaceholderText test', () => {
    render(<Main />);
    const inputNode = screen.getByPlaceholderText('Username');
});

test('ByText test', () => {
    render(<Main />);
    const aboutAnchorNode = screen.getByText(/about/i);
});

// test('ByDisplayValue test', () => {
//   render(<Main />);
//   const input = screen.getByDisplayValue('default-value');
// });
//
test('getByTitle test', () => {
    render(<Main />);
    const div = screen.getByTitle('TIP');
});

test('getByTestId test', () => {
    render(<Main />);
    const div = screen.getByTestId('testid');
});
