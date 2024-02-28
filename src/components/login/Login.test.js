import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('Login test', () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);

    const login_id = screen.getByTestId('login_id');
    const login_pw = screen.getByTestId('login_pw');
});

it('로그인 폼이 있는가?', () => {
    render(<Login/>);
    
    const login_id = screen.getByLabelText('아이디');
    const login_pw = screen.getByLabelText('비밀번호');
    const submit_button = screen.getByText(/Submit/i);

    expect(login_id).toBeInTheDocument();
    expect(login_pw).toBeInTheDocument();
    expect(submit_button).toBeInTheDocument();
});

it('로그인이 가능한가?', () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);

    const login_id = screen.getByLabelText('아이디');
    const login_pw = screen.getByLabelText('비밀번호');
    const submit_button = screen.getByText(/Submit/i);

    userEvent.type(login_id, "remy");
    userEvent.type(login_pw, "vsecure");
    userEvent.click(submit_button);

    // expect(onSubmit).toHaveBeenCalledWith({
    //     id: "remy",
    //     pw: "vsecure",
    // });
});
