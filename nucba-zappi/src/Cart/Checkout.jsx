import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from "../store";
import { useForm } from "react-hook-form"
import CartStyle from "./Cart.module.css"
import { useNavigate } from 'react-router';
import CartItem from './CartItem';
const Checkout = () => {
    const { user } = useSelector((state) => state.user);
    const { cart } = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { register, formState, handleSubmit, setError } = useForm();
    const { errors, isSubmitting } = formState;
    const createOrder = async (data) => {
        console.clear()
        try {
            let subTotal = cart.reduce(
                (previo, actual) => previo + actual.price * actual.quantity,
                0
            )
            let req = await fetch(`https://nucbaz-api.vercel.app/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    "x-token": user.token
                },
                body: JSON.stringify({
                    price: subTotal,
                    shippingCost: 500,
                    total: subTotal + 500,
                    shippingDetails: data,
                    items: cart
                })
            })
            if (!req.ok) throw new Error('No se ha podido crear la orden de compra')
            dispatch(clearCart())
            return navigate("/")
        } catch (error) {
            setError('root', { type: "any", message: error.message })
        }
    }
    return (
        <main id={CartStyle.pageCheckout}>
            <form id={CartStyle.shippingForm} onSubmit={handleSubmit(createOrder)}>
                <h2>Ingresá tus datos</h2>
                <fieldset>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id='nombre' {...register('name', { required: { value: true, message: "Completa tu nombre" }, minLength: { value: 3, message: 'Minimo 3 caracteres' } })} className={`${errors && errors.name ? CartStyle.error : ""}`} />
                    {errors && errors.name && <small>{errors.name.message}</small>}
                </fieldset>
                <fieldset>
                    <label htmlFor="celular">Celular</label>
                    <input type="tel" id='celular' {...register('cellphone', { required: { value: true, message: "Completa tu celular" }, minLength: { value: 10, message: "El formato es incorrecto" } }
                    )} className={`${errors && errors.cellphone ? CartStyle.error : ""}`} />
                    {errors && errors.cellphone && <small>{errors.cellphone.message}</small>}
                </fieldset>
                <fieldset>
                    <label htmlFor="localidad">Localidad</label>
                    <input type="text" id='localidad' {...register('location', { required: { value: true, message: "Completa tu localidad" }, minLength: { value: 3, message: 'Minimo 3 caracteres' } })} className={`${errors && errors.location ? CartStyle.error : ""}`} />
                    {errors && errors.location && <small>{errors.location.message}</small>}
                </fieldset>
                <fieldset>
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id='direccion' {...register('address', { required: { value: true, message: "Completa tu dirección" }, minLength: { value: 3, message: 'Minimo 3 caracteres' } })} className={`${errors && errors.address ? CartStyle.error : ""}`} />
                    {errors && errors.address && <small>{errors.address.message}</small>}
                </fieldset>
                <button disabled={isSubmitting}>
                    {!isSubmitting ? "Finalizar el Pedido" : "Cargando..."}
                </button>
            </form>
            <article>
                <h2>Tu Pedido</h2>
                {cart.length <= 0 && <p className={CartStyle.empty}>No seas amarrete, compra algo</p>}
                {cart.length > 0 && (
                    <>
                        <ul className={CartStyle.list}>
                            {cart.map((item) => <CartItem item={item} />)}
                        </ul>
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
                    </>
                )}
            </article>
        </main>
    )
}

export default Checkout