import FooterStyle from "./Footer.module.css";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer id={FooterStyle.footer}>
      <nav id={FooterStyle.links}>
        <Link>Terminos de Uso</Link>
        <Link>Trabaja con Nosotros</Link>
        <Link>Soporte</Link>
      </nav>
      <p>
        Hecho con 💓 <strong>NUCBAZAPPI</strong>
      </p>
    </footer>
  );
};

export default Footer;
