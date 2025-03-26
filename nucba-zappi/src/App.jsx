import { useState } from 'react'
import categorias from './data/categorias.json'
import productos from './data/productos.json'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Categories from './Categories/Categories'
import Products from './Products/Products'
import { useCategory } from './context/CategoryContext'
const App = () => {
  // const { category } = useCategory()
  return (<>
    <Hero />
    <Categories categorias={categorias} />
    <Products productos={productos.productos} />
  </>)
}

export default App
