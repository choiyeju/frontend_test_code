
### 쿼리함수

|    쿼리     | 0 Matches   | 1 Matches        | \> 1 Matches |
|:---------:|:------------|:-----------------|:-------------|
|   getBy   | Throw error | Return element   | Throw error  |
|  queryBy  | Throw error | Return element   | Throw error  |
|  findBy   | Promise     | Promise          | Promise      |

- 이 외에 ..AllBy..는 1개 이상의 요소 찾을 때 사용 가능

### ByRole

- API

  ```javascript
  getByRole(
    // If you're using `screen`, then skip the container argument:
    container: HTMLElement,
    role: string,
    options?: {
      hidden?: boolean = false,
      name?: TextMatch,
      description?: TextMatch,
      selected?: boolean,
      busy?: boolean,
      checked?: boolean,
      pressed?: boolean,
      suggest?: boolean,
      current?: boolean | string,
      expanded?: boolean,
      queryFallbacks?: boolean,
      level?: number,
      value?: {
        min?: number,
        max?: number,
        now?: number,
        text?: TextMatch,
      }
    }): HTMLElement
  ```

- 테스트에서 특정 역할을 가진 요소를 가져오는 메서드 입니다.

    ```html
    <button role="button" onClick={onClick}>
        {label}
    </button>
    ```
    
    ```javascript
    // 상단 코드의 label과 name을 비교
    // name 뿐만 아니라 id도 가능
    const colorButton = screen.getByRole("button", { name: "파란색으로 바뀜" });
    ```

- 자주 사용되는 role

        button, checkbox, combobox, listbox, link, heading, textbox, menu, progressbar, radio, slider, spinbutton, table

### ByLabelText

- API

  ```javascript
  getByLabelText(
    // If you're using `screen`, then skip the container argument:
    container: HTMLElement,
    text: TextMatch,
    options?: {
      selector?: string = '*',
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

- label의 텍스트 값, label과 연결된 input 태그를 찾아줍니다.

  ```html
  <label htmlFor="username-input">Username</label>
  <input id="username-input"/>
  ```
  
  ```javascript
  const inputNode = screen.getByLabelText('Username', {selector: 'input'});
  ```

### ByPlaceholderText

- API

  ```javascript
  getByPlaceholderText(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      text: TextMatch,
      options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

- placeholder 값으로 input 또는 textarea를 찾습니다.

  ```html
  <input placeholder="Username"/>
  ```

  ```javascript
  const inputNode = screen.getByPlaceholderText('Username');
  ```

### ByText

- API

  ```javascript
  getByText(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      text: TextMatch,
      options?: {
      selector?: string = '*',
      exact?: boolean = true,
      ignore?: string|boolean = 'script, style',
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

  ```html
  <a href="/about">About ℹ️</a>
  ```

- 요소가 가진 text 값으로 요소를 찾습니다.

  ```javascript
  const aboutAnchorNode = screen.getByText(/about/i);
  ```

### ByDisplayValue

- API

  ```javascript
  getByDisplayValue(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      value: TextMatch,
      options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

  ```html
  <input value="default-value">
  ```

- input의 form 요소(input, textarea, select)의 현재 값을 기준으로 요소를 찾습니다.

  ```javascript
  const aboutAnchorNode = screen.getByText(/about/i);
  ```

### ByAltText

- API

  ```javascript
  getByAltText(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      text: TextMatch,
      options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

  ```html
  <img src="image.png" alt="이미지 입니다.">
  ```

- alt 속성의 값으로 요소를 찾습니다.

  ```javascript
  const image = screen.getByAltText('이미지 입니다.');
  ```

### ByTitle

- API

  ```javascript
  getByTitle(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      title: TextMatch,
      options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

  ```html
  <div title="TIP">title은 툴팁으로 표시가 되고, 요소에 대한 정보를 나타내줍니다.</div>
  ```

- title 속성의 값으로 요소를 찾습니다.

  ```javascript
  const div = screen.getByTitle('TIP');
  ```

### ByTestId

- API

  ```javascript
  getByTestId(
      // If you're using `screen`, then skip the container argument:
      container: HTMLElement,
      text: TextMatch,
      options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  ```

  ```html
  <div data-testid="testid">Element</div>
  ```

- 요소에 testid 속성값을 부여해서 요소를 찾는 방법입니다.

  ```javascript
  const div = screen.getByTestId('testid');
  ```
  