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
                Username
            </button>

            {/* ByLabelText */}
            <label htmlFor="username-input">Username</label>
            <input id="username-input"/>

            {/* ByPlaceholderText */}
            <input placeholder="Username"/>

            {/* ByText */}
            <a href="/about">About ℹ️</a>
        </div>
    );
}

export default App;
