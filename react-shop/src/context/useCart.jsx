import { createContext, useContext, useEffect, useState } from "react"


const cartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }
        return []
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const [active, setActive] = useState(false)
    const open = () => setActive(true)
    const close = () => setActive(false)
    const add = (producto) => { }
    const remove = (producto) => { }
    const clear = () => setCart([])
    return <cartContext.Provider value={{ cart, active, open, close, add, remove, clear }}>{children}</cartContext.Provider>
}

const useCart = () => useContext(cartContext)

export default useCart