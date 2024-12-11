import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addCart = (producto) => setCart((previo) => {
        const find = previo.find(({ product }) => product.id == producto.id)
        if (find) {
            return previo.map(({ product, quantity }) => {
                if (product.id == producto.id) {
                    return ({ product, quantity: quantity + 1 })
                }
                return ({ product, quantity })
            })
        } else {
            return [...previo, { product: producto, quantity: 1 }]
        }
    })
    const reduceCart = (id) => setCart((previo) => previo.map(({ product, quantity }) => product.id == id ? ({ product, quantity: quantity - 1 }) : ({ product, quantity })).filter(({ quantity }) => quantity > 0))
    const removeCart = (id) => setCart((previo) => previo.filter(({ product }) => product.id != id))
    const resetCart = () => setCart([])
    return <CartContext.Provider value={{ cart, addCart, reduceCart, removeCart, resetCart }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)