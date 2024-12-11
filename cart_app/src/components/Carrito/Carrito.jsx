import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "../../context/CartContext"
import style from "./Carrito.module.css"
import { useState } from "react"
const Carrito = () => {
    const [open, setOpen] = useState(false)
    const { cart, addCart, reduceCart, removeCart, resetCart } = useCart()
    return <>
        <button type="button" className={style.btnCart} onClick={() => setOpen(!open)}><ShoppingCart /></button>
        <section className={`${style.cart} ${open ? style.active : ''}`}>
            <header>
                <h2>Carrito</h2>
                <form>
                    <button type="button" onClick={() => resetCart()}><Trash2 /></button></form>
            </header>
            {cart.length > 0 && <ul>{cart.map(item => (<li key={item.product.id}>
                <picture><img src={item.product.image} alt={item.product.name} /></picture>
                <dl>
                    <dt>{item.product.name}</dt>
                    <dd>${item.product.price} - (${item.product.price * item.quantity})</dd>
                </dl>
                <form>
                    <button type="button" onClick={() => addCart(item.product)}>
                        <Plus />
                    </button>
                    <button type="button" onClick={() => reduceCart(item.product.id)}>
                        <Minus />
                    </button>
                    <button type="button" onClick={() => removeCart(item.product.id)}>
                        <Trash2 />
                    </button>
                </form>
            </li>))}</ul>}
            {!cart.length > 0 && <p>El carrito esta vacio</p>}
        </section>
    </>
}
export default Carrito