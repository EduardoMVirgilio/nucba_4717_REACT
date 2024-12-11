import { Menu, X } from "lucide-react";
import style from "../styles/Navbar.module.css";
import { useAuth } from "../context/Auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <header id={style.mainHeader}>
      <h1>Nucba News</h1>
      <form id={style.navbar} className={`${open ? style.active : ''}`}>
        {!auth && <button className={pathname == "/login" ? style.active : ''} onClick={() => navigate("/login")} type="button">
          Ingresar
        </button>}

        {auth && <>
          <button className={pathname == "/news" ? style.active : ''} onClick={() => navigate("/news")} type="button">
            News
          </button>
          <button className={pathname == "/create" ? style.active : ''} onClick={() => navigate("/create")} type="button">
            Nueva
          </button>
          <button onClick={() => {
            setAuth(false);
            navigate("/login");
          }} type="button">
            Salir
          </button>
        </>}

      </form>
      <form id={style.headerActions}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
        >
          {!open && <Menu />}
          {open && <X />}

        </button>
      </form>
    </header>
  );
};

export default Navbar;
