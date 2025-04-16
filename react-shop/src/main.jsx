import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './context/useMenu.jsx'
import { CartProvider } from './context/useCart.jsx'
import { FilterProvider } from './context/useFilter.jsx'

createRoot(document.getElementById('root')).render(
  <MenuProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </MenuProvider>)
