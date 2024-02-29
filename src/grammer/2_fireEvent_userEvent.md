
### fireEvent vs userEvent

- 전체적인 상호작용을 테스트 합니다.

- fireEvent 
  - 이벤트 리스너를 사용하는 hook 같은 것을 단위 테스트 할 때
  - 어떤 이벤트가 이미 발생된 이후의 UI나 동작을 테스트 할 때

  ```javascript
  test('fireEvent', () => {
    render(<input type="text" data-testid="name" disabled={true} />);
  
    const input = screen.getByTestId('name');
    expect(input).toBeDisabled();
    fireEvent.change(input, { target: { value: '입력후' } });
    expect(screen.getByTestId('name')).toHaveValue('입력후');
  });
  ```

- userEvent
  - 권장 사항
  - 실제 브라우저와의 상호 작용을 유사하게 테스트 할 때

    ```javascript
    test('userEvent', async () => {
      const user = userEvent.setup();
      render(<input type="text" data-testid="name" disabled={true} />);
  
      const input = screen.getByTestId('name');
      expect(input).toBeDisabled();
      await user.type(input, '입력후');
      expect(input).toHaveValue('');
    });
    ```
