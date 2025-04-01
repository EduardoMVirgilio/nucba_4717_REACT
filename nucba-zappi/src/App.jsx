import categorias from "./data/categorias.json";
import productos from "./data/productos.json";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
const App = () => {
  return (
    <>
      <Hero />
      <Categories categorias={categorias} />
      <Products productos={productos.productos} />
    </>
  );
};

export default App;
