import { } from "react";
import style from "../styles/Login.module.css";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  return (
    <section id={style.login}>
      <header>
        <h2>Ingresar</h2>
      </header>
      <form>
        <button type="button" onClick={() => {
          setAuth(true);
          navigate('/news')
        }}>
          <span>Acceder</span>
        </button>
      </form>
    </section>
  );
};

export default Login;
