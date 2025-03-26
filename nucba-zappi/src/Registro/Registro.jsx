import RegisterStyle from "./Registro.module.css";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { access } from "../store";
import { useDispatch } from "react-redux";
const Register = () => {
    const { register, formState, handleSubmit, setError } = useForm({
        defaultValues: { nombre: "", email: "", password: "" },
    });
    const dispatch = useDispatch()
    const saveUser = async (data) => {
        try {
            const req = await fetch("https://nucbaz-api.vercel.app/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!req.ok) throw new Error("Error en el guardado del usuario")

            const res = await req.json()

            const reqLogin = await fetch("https://nucbaz-api.vercel.app/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: data.email, password: data.password })
            })
            if (!reqLogin.ok) throw new Error("Error al iniciar sesión con el usuario")

            const resLogin = await reqLogin.json()
            dispatch(access(resLogin))
        } catch (error) {
            setError('root', { type: "any", message: error.message })
        }
    };
    return (
        <article id={RegisterStyle.registro}>
            <h2 id={RegisterStyle.title}>Crear Cuenta</h2>
            <form id={RegisterStyle.form} onSubmit={handleSubmit(saveUser)}>
                <input
                    type="text"
                    className={`${RegisterStyle.field} ${formState.errors && formState.errors.name ? RegisterStyle.error : ""}`}
                    placeholder="Nombre"
                    {...register("nombre", {
                        required: { value: true, message: "Completa el campo nombre" },
                        minLength: { value: 3, message: "Minimo 3 caracteres" },
                    })}
                />
                {formState.errors && formState.errors.nombre && <small>{formState.errors.nombre.message}</small>}
                <input
                    type="text"
                    className={`${RegisterStyle.field} ${formState.errors && formState.errors.email ? RegisterStyle.error : ""}`}
                    placeholder="Email"
                    {...register('email', { required: { value: true, message: "Completa tu correo" }, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: "El formato no es valido" } })}
                />
                {formState.errors && formState.errors.email && <small>{formState.errors.email.message}</small>}
                <input
                    type="password"
                    className={`${RegisterStyle.field} ${formState.errors && formState.errors.password ? RegisterStyle.error : ""}`}
                    placeholder="Password"
                    {...register('password', { required: { value: true, message: "Completa la contraseña" }, minLength: { value: 6, message: "Minimo 6 caracteres" } })}
                />
                {formState.errors && formState.errors.password && <small>{formState.errors.password.message}</small>}
                <Link to={"/login"} className={RegisterStyle.link}>
                    Ya tenes cuenta? Ingresa acá
                </Link>
                {formState.errors && formState.errors.root && <small>{formState.errors.root.message}</small>}
                <button className={RegisterStyle.submit}>Ingresar</button>
            </form>
        </article>
    );
};
export default Register;

// https://nucbaz-api.vercel.app/auth/register
