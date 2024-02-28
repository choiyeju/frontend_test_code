import "./Login.css";
import {useState} from "react";

function Login({ onSubmit }) {
    const [values, setValues] = useState({
        id: "",
        pw: ""
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <div className="Login">
            <form className="login_box" onSubmit={handleSubmit}>
                <label htmlFor="id">아이디</label>
                <input id="id" type="text" data-testid="login_id" placeholder="아이디" value={values.id} onChange={handleChange}/>

                <label htmlFor="pw">비밀번호</label>
                <input id="pw" type="password" data-testid="login_pw" placeholder="비밀번호" value={values.pw} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
