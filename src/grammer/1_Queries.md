
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

- label의 텍스트 값, label과 연결된 input 태그를 찾아줌

  ```html
  <label htmlFor="username-input">Username</label>
  <input id="username-input"/>
  ```
  
  ```javascript
  const inputNode = screen.getByLabelText('Username', {selector: 'input'});
  ```
