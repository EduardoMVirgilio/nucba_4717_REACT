import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('app')).render(<CartProvider><App /></CartProvider>)
