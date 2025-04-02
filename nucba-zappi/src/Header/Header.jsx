import headerStyle from "./Header.module.css";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart.jsx";
const Header = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <header id={headerStyle.mainHeader}>
      <picture id={headerStyle.headerBrand}>
        <img src="/nucba-zappi-icon.png" alt="Logo de Nucba Zappi" />
      </picture>
      <nav id={headerStyle.headerNavbar}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${headerStyle.link} ${isActive ? headerStyle.active : ""}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          Home
        </NavLink>
        <Cart />
        {!user && (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `${headerStyle.link} ${isActive ? headerStyle.active : ""}`
            }
          >
            Inicia sesión
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </NavLink>
        )}
        {user && (
          <>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                `${headerStyle.logout} ${isActive ? headerStyle.active : ""}`
              }
            >
              <span>{user.usuario.nombre.toUpperCase().charAt(0)}</span>
            </NavLink>
            <NavLink
              to={"/logout"}
              className={({ isActive }) =>
                `${headerStyle.logout} ${isActive ? headerStyle.active : ""}`
              }
            >
              <span>Cerrar sesión</span>
            </NavLink>
          </>
        )}
      </nav>

      <form id={headerStyle.headerActions}>
        <button type="button" id={headerStyle.btnMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </form>
    </header>
  );
};

export default Header;
