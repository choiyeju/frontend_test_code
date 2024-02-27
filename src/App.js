import './App.css';

function App() {
    const colorChangeBtn = () => {
    return;
    };

    return (
        <div className="App">
            {/* ByRole */}
            <button role="button" onClick={colorChangeBtn}>
                Username
            </button>

            {/* ByLabelText */}
            <label htmlFor="username-input">Username</label>
            <input id="username-input"/>

            {/* ByPlaceholderText */}
            <input placeholder="Username"/>

            {/* ByText */}
            <a href="/about">About ℹ️</a>

            {/* ByDisplayValue */}
            <input value="default-value"/>

            {/* getByTitle */}
            <div title="TIP">title은 툴팁으로 표시가 되고, 요소에 대한 정보를 나타내줍니다.</div>

            {/* getByTestId */}
            <div data-testid="testid">Element</div>
        </div>
    );
}

export default App;
