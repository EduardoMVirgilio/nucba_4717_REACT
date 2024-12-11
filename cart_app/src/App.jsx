import Carrito from "./components/Carrito/Carrito"
import Catalogo from "./components/Catalogo/Catalogo"
import { useCart } from "./context/CartContext"

const App = () => {
  const { cart } = useCart()
  return (<>
    <h1>App Cart {cart.reduce((previo, actual) => previo += actual.quantity, 0)}</h1>
    <Catalogo />
    <Carrito />
  </>)
}

export default App