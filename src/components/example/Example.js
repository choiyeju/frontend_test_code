import {useState} from "react";

function Example({ text, onClick }) {
    const [name, setName] = useState("");

    return (
        <div className="Example">
            <button onClick={onClick}>
                Submit
            </button>

            <div>
                <span data-testid="change-input-greeting">
                    Welcome, {name === ""? "Anonymous User": name}!
                </span>
                <br/>
                <input
                    type="text"
                    aria-label="user-name"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Example;
