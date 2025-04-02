import LoginStyle from "./Login.module.css";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { access } from "../store";
const Login = () => {
  const { register, formState, handleSubmit, setError } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessUser = async (data) => {
    try {
      const req = await fetch("https://nucbaz-api.vercel.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!req.ok) throw new Error("Error al iniciar sesión");
      const res = await req.json();
      dispatch(access(res));
      return navigate("/");
    } catch (error) {
      setError("root", { type: "any", message: error.message });
    }
  };
  return (
    <article id={LoginStyle.login}>
      <h2 id={LoginStyle.title}>Iniciar Sesión</h2>
      <form id={LoginStyle.form} onSubmit={handleSubmit(accessUser)}>
        <input
          type="text"
          className={`${LoginStyle.field} ${
            formState.errors && formState.errors.email ? LoginStyle.error : ""
          }`}
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Completa tu correo" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "El formato no es valido",
            },
          })}
        />
        {formState.errors && formState.errors.email && (
          <small>{formState.errors.email.message}</small>
        )}
        <input
          type="password"
          className={`${LoginStyle.field} ${
            formState.errors && formState.errors.password
              ? LoginStyle.error
              : ""
          }`}
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Completa la contraseña" },
            minLength: { value: 6, message: "Minimo 6 caracteres" },
            // pattern: {
            //   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            //   message:
            //     "La contraseña debe contener al menos un numero y un caracter especial",
            // },
          })}
        />
        {formState.errors && formState.errors.password && (
          <small>{formState.errors.password.message}</small>
        )}
        <Link to={"/registro"} className={LoginStyle.link}>
          No tenes cuenta? Crea una
        </Link>
        {formState.errors && formState.errors.root && (
          <small>{formState.errors.root.message}</small>
        )}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={LoginStyle.submit}
        >
          {formState.isSubmitting ? "Cargando..." : "Ingresar"}
        </button>
      </form>
    </article>
  );
};
export default Login;

// https://nucbaz-api.vercel.app/auth/login

// https://nucbaz-api.vercel.app/orders
