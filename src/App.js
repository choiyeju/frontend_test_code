import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const colorChangeBtn = () => {
    return;
    };

    return (
        <div className="App">
            {/* ByRole */}
            <button role="button" onClick={colorChangeBtn}>
              파란색으로 바뀜
            </button>

            {/* ByLabelText */}
            <label htmlFor="username-input">Username</label>
            <input id="username-input"/>
        </div>
    );
}

export default App;
