import "./Login.css";

function Login() {

    const handleChangeId = () => {
        return;
    };

    const handleChangePw = () => {
        return;
    };

    return (
        <div className="Login">
            <form className="login_box">
                <fieldset>
                    <legend>로그인</legend>
                    <p>
                        <h6>아이디</h6>
                        <input type="text" id="login_id" onChange={handleChangeId} />
                    </p>
                    <p>
                        <h6>비밀번호</h6>
                        <input type="password" id="login_pw" onChange={handleChangePw} />
                    </p>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;
