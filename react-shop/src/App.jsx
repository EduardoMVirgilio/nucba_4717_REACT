import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./Layout"
import { FilterProvider } from "./context/useFilter"
import Products from "./pages/Products"
const App = () => <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<FilterProvider><Products /></FilterProvider>} />
    </Route>
    <Route path="*" element={<article><p>Volve a la web</p><Link to={"/"}>Home</Link></article>} />
  </Routes>
</BrowserRouter>

export default App