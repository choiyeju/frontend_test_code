## 프론트엔드 테스트

1. Static Test
    - 코드를 실행시키지 않고 테스트 하는 것.
    - ESLint를 통해 console에 warn옵션을 주어 경고 표시하여 커밋할 때 같이 커밋하지 않도록 합니다.
   <br/>
   
   ```javascript
    const a = 1;
    const b = 2;
    
    function sum(a, b) {
     return a + b;
    }
    
    const test = sum(a, b);
    
    console.log(test);
   ```

2. Unit Test
   - 단위 테스트, 최소 단위의 유틸 함수, 커스텀 훅, 하나의 컴포넌트 등을 테스트 합니다.
   <br/>

   ```javascript
    test('sum fn', () => {
     const result = mySum(10, 20);
     expect(result).toBe(30);
    });
   ```

   ```javascript
    test('button disabled', () => {
     render(<MyButton />)
     fireEvent.click(screen.getByText('click'));
     expect(screen.getByRole('button')).toBeDisabled();
    });
   ```

3. Integration Test
   - 통합 테스트는 두 개 이상의 모듈을 연결하여 테스트 합니다.
   <br/>

   ```javascript
    const server = setupServer(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json({greeting: '안녕하세요'}))
      }),
    )
    
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
    
    test('loads and displays greeting', async () => {
      render(<MyComponent url="/greeting" />)
    
      fireEvent.click(screen.getByText('Greeting'))
    
      await waitFor(() => screen.getByRole('heading'))
    
      expect(screen.getByRole('heading')).toHaveTextContent('안녕')
    })
   ```

4. E2E Test
    - 실제 사용자 관점에서 시뮬레이션 하는 테스트 입니다.
