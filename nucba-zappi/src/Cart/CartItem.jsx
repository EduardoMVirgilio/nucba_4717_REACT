import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, removeFromCart, removeQuantity } from "../store";
import CartStyle from "./Cart.module.css"
import { Minus, Plus, Trash } from "lucide-react";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return <li key={item.id} className={CartStyle.item}>
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
  </li>;
};

export default CartItem;
