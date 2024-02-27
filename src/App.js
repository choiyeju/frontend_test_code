import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const colorChangeBtn = () => {
    return;
  };

  return (
    <div className="App">
      {/* getByRole */}
      <button role="button" onClick={colorChangeBtn}>
        파란색으로 바뀜
      </button>
    </div>
  );
}

export default App;
