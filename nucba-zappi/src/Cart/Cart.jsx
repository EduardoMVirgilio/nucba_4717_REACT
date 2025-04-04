import { useState, useEffect } from "react";
import CartStyle from "./Cart.module.css";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  removeFromCart,
  clearCart,
} from "../store";
import { Link } from "react-router";
const Cart = () => {
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
            {cart.map((item) => (
              <li key={item.id} className={CartStyle.item}>
                <picture>
                  <img src={item.img} alt="" />
                </picture>
                <dl>
                  <dt>{item.title}</dt>
                  <dd>{item.desc}</dd>
                  <dd>
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(item.price)}
                  </dd>
                </dl>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className={CartStyle.itemForm}
                >
                  {item.quantity == 1 && (
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item))}
                      className={CartStyle.itemButtonRemove}
                    >
                      <Trash />
                    </button>
                  )}
                  {item.quantity > 1 && (
                    <button
                      type="button"
                      onClick={() => dispatch(removeQuantity(item))}
                      className={CartStyle.itemButtonRemove}
                    >
                      <Minus />
                    </button>
                  )}
                  <output>{item.quantity}</output>
                  <button
                    type="button"
                    onClick={() => dispatch(addQuantity(item))}
                    className={CartStyle.itemButtonAdd}
                  >
                    <Plus />
                  </button>
                </form>
              </li>
            ))}
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
