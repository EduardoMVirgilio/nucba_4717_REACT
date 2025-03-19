import RegisterStyle from "./Registro.module.css"
import { Link } from "react-router"
const Register = () => {
    return (<article id={RegisterStyle.registro}>
        <h2 id={RegisterStyle.title}>Crear Cuenta</h2>
        <form id={RegisterStyle.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" className={`${RegisterStyle.field}`} placeholder="Nombre" />
            <input type="text" className={`${RegisterStyle.field} ${RegisterStyle.error}`} placeholder="Email" />
            <input type="password" className={RegisterStyle.field} placeholder="Password" />
            <Link to={"/login"} className={RegisterStyle.link}>Ya tenes cuenta? Ingresa acá</Link>
            <button className={RegisterStyle.submit}>Ingresar</button>
        </form>
    </article>)
}
export default Register