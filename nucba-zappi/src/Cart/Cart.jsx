import { useState } from "react";
import CartStyle from "./Cart.module.css";
import { ShoppingCart, X } from "lucide-react";
const Cart = () => {
  const [opened, setOpened] = useState(false);
  const toggle = () => {
    setOpened(!opened);
    document.body.classList.toggle("active");
  };
  return (
    <>
      <button type="button" onClick={toggle} id={CartStyle.btnCart}>
        <ShoppingCart />
      </button>
      <section
        className={`${CartStyle.cart} ${!opened ? "" : CartStyle.opened}`}
      >
        <form>
          <button type="button" onClick={toggle}>
            <X />
          </button>
        </form>
      </section>
    </>
  );
};

export default Cart;
