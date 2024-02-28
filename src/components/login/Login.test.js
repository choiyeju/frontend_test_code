import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import userEvent from "@testing-library/user-event";

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

    fireEvent.change(login_id, { target: { value: "remy" }});
    fireEvent.change(login_pw, { target: { value: "vsecure" }});
    fireEvent.click(submit_button);

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({
        id: "remy",
        pw: "vsecure"
    });
});

test("userEvent 사용이 가능한가", async () => {
    const event = userEvent.setup();
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);

    const email = screen.getByLabelText("아이디");
    const password = screen.getByLabelText("비밀번호");
    const button = screen.getByRole("button");

    await event.type(email, "user@test.com");
    await event.type(password, "Test1234");
    await event.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
        id: "user@test.com",
        pw: "Test1234"
    });
});
