import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAndGetUser } from "../../services/Auth";
import logo from "../../assets/logo.svg";
import "./Login.style.scss";
import ilustracao from "../../assets/saly-14.svg";
import facebookIcon from "../../assets/Facebook.svg";
import appleIcon from "../../assets/apple.svg";
import googleIcon from "../../assets/google.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !senha.trim()) {
      setError("Preencha todos os campos");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const { user } = await loginAndGetUser({ email, password: senha });

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      navigate("/dashboard");
    } catch (err) {
      const apiMsg = err?.response?.data || err?.message || "Falha no login";
      setError(typeof apiMsg === "string" ? apiMsg : "Falha no login");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="loginPage">
      <div className="loginPage__left">
        <div className="loginPage__header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="loginPage__content">
          <h1>Faça seu login em</h1>
          <h2>
            <span className="name-primary">Meu</span>
            <span className="name-secondary">Gestor</span>
          </h2>
          <p>Se você ainda não tem uma conta.</p>
          <p>
            Você pode se{" "}
            <span className="register-link">
              Registrar aqui !
            </span>
          </p>
        </div>
        <div className="loginPage__image">
          <img src={ilustracao} alt="Ilustração login" />
        </div>
      </div>

      <div className="loginPage__formContainer">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="login"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error">{error}</p>}
          <a href="/forgot-password" className="forgot-password">
            Esqueceu sua senha?
          </a>
          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Login"}
          </button>
        </form>
        <div className="loginPage__socialLogin">
          <p>ou continue com</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Login com Facebook" />
            <img src={appleIcon} alt="Login com Apple" />
            <img src={googleIcon} alt="Login com Google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
