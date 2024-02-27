
### getByRole

- 테스트에서 특정 역할을 가진 요소를 가져오는 메서드 입니다.
<br/>

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

- #### 자주 사용되는 role

        button, checkbox, combobox, listbox, link, heading, textbox, menu, progressbar, radio, slider, spinbutton, table
