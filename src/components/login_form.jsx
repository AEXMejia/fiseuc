import { Layout } from "antd";
import { useState } from "react";
const { Footer } = Layout;

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    id: email,
                     password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "/dashboard";
            } else if (response.status === 401) {
                alert("usuario o contraseña incorrectos");
            }
            else {
                console.error("Error al iniciar sesión:", data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    if(localStorage.getItem('alumno')){
        window.location.href = "/dashboard"
    }

    return (
        <div
            style={{
                color: "black",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background:
                    "url('https://www.ucol.mx/content/portal/banner_748859200161.jpg'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay",
                zIndex: 1,
            }}
        >
            <form className="form-control" onSubmit={handleSubmit}>
                <p className="title"> (FISEUC) </p>

                <div className="input-field">
                    <input
                        required
                        className="input text-black"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="label" htmlFor="email">Cuenta o Correo</label>
                </div>

                <div className="input-field">
                    <input
                        required
                        className="input text-black"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label" htmlFor="password">Contraseña</label>
                </div>

                <a href="#">Olvidaste tu contraseña? 🤣</a>
                <button type="submit" className="submit-btn">
                    Acceder
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
