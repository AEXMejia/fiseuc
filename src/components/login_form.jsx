

const LoginForm = () => {
    return (
        <div style={{
            color: "black",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form className="form-control" action="">
                <p className="title">Login</p>

                <div className="input-field">
                    <input required className="input text-black" type="text" id="email" />
                    <label className="label" htmlFor="email">Enter Email</label>
                </div>

                <div className="input-field">
                    <input required className="input text-black" type="password" id="password" />
                    <label className="label" htmlFor="password">Enter Password</label>
                </div>

                <a href="#">Forgot your password?</a>
                <button type="submit" className="submit-btn">Acceder</button>
            </form>
        </div>
    )
}


export default LoginForm