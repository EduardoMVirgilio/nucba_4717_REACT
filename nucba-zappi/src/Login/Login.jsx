import LoginStyle from "./Login.module.css"
import { Link } from "react-router"
const Login = () => {
    return (<article id={LoginStyle.login}>
        <h2 id={LoginStyle.title}>Iniciar Sesión</h2>
        <form id={LoginStyle.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" className={`${LoginStyle.field} ${LoginStyle.error}`} placeholder="Email" />
            <input type="password" className={LoginStyle.field} placeholder="Password" />
            <Link to={"/registro"} className={LoginStyle.link}>No tenes cuenta? Crea una</Link>
            <button className={LoginStyle.submit}>Ingresar</button>
        </form>
    </article>)
}
export default Login

// https://nucbaz-api.vercel.app/auth/login

// https://nucbaz-api.vercel.app/orders