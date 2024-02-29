import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Example from "./Example";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

const defaultProps = {
    onClick: jest.fn(),
    text: "Submit" ,
};

test('Example test', () => {
    expect(2 + 2).toBe(4);
});

test('버튼이 올바른 텍스트를 갖고 렌더링', () => {
    render(<Example {...defaultProps} />);

});

test('클릭 시 올바른 기능 호출', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Example {...defaultProps} onClick={onClick} />)
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
});

test('올바른 인사말을 표시', () => {
    render(<Example/>);
    const greeting  = screen.getByTestId("change-input-greeting");
    const input = screen.getByLabelText("user-name");

    expect(greeting.textContent).toBe("Welcome, Anonymous User!");
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Rafael" }});
    expect(greeting.textContent).toBe("Welcome, Rafael!");
    expect(input.value).toBe("Rafael");
});

test('fireEvent', () => {
    render(<input type="text" data-testid="name" disabled={true} />);

    const input = screen.getByTestId('name');
    expect(input).toBeDisabled();
    fireEvent.change(input, { target: { value: '입력후' } });
    expect(screen.getByTestId('name')).toHaveValue('입력후');
});

test('userEvent', async () => {
    const user = userEvent.setup();
    render(<input type="text" data-testid="name" disabled={true} />);

    const input = screen.getByTestId('name');
    expect(input).toBeDisabled();
    await user.type(input, '입력후');
    expect(input).toHaveValue('');
});
