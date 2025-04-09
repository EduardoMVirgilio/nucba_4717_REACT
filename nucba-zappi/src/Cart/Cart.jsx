import { useState, useEffect } from "react";
import CartStyle from "./Cart.module.css";
import { ShoppingCart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store";
import CartItem from './CartItem';
import { Link, useLocation } from "react-router";
const Cart = () => {
  const { pathname } = useLocation()
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const [isMobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
      document.body.classList.remove("active");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setOpened(false);
    document.body.classList.remove("active");
  }, [pathname])
  useEffect(() => {
    if (isMobile) {
      setOpened(false);
      document.body.classList.remove("active");
    }
  }, [isMobile]);
  const toggle = () => {
    setOpened(!opened);
    document.body.classList.toggle("active");
  };
  return (
    <>
      <button type="button" onClick={toggle} id={CartStyle.btnCart}>
        <ShoppingCart />
        <span>
          {cart.reduce((previo, actual) => (previo += actual.quantity), 0)}
        </span>
      </button>
      <section
        className={`${CartStyle.cart} ${!opened ? "" : CartStyle.opened}`}
      >
        <form className={CartStyle.closed}>
          <button type="button" onClick={toggle}>
            <X />
          </button>
        </form>
        <h2 className={CartStyle.title}>
          Tus Productos{" "}
          {cart.length > 0 && (
            <button type="button" onClick={() => dispatch(clearCart())}>
              <Trash />
            </button>
          )}
        </h2>
        {cart.length == 0 && (
          <p className={CartStyle.empty}>No seas amarrete, compra algo</p>
        )}
        {cart.length > 0 && (
          <ul className={CartStyle.list}>
            {cart.map((item) => <CartItem item={item} />)}
          </ul>
        )}

        <footer className={CartStyle.footer}>
          <p className={CartStyle.subtotal}>
            Subtotal:
            <span>
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(
                cart.reduce(
                  (previo, actual) => previo + actual.price * actual.quantity,
                  0
                )
              )}
            </span>
          </p>

          <p className={CartStyle.shipping}>
            Envio: <span>$ {cart.length > 0 ? 500 : 0}</span>
          </p>
          <p className={CartStyle.total}>
            Total:{" "}
            <span>
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(
                cart.reduce(
                  (previo, actual) => previo + actual.price * actual.quantity,
                  0
                ) + (cart.length > 0 ? 500 : 0)
              )}
            </span>
          </p>
          {user && cart.length > 0 && (
            <Link to="/checkout" className={CartStyle.checkout}>
              Checkout
            </Link>
          )}
        </footer>
      </section>
    </>
  );
};

export default Cart;
