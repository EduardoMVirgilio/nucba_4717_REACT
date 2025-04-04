import { useDispatch, useSelector } from "react-redux";
import styleProducts from "./Products.module.css";
import { useState } from "react";
import { addToCart } from "../store";
const Products = ({ productos = [] }) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(3);
  const categoria = useSelector((state) => state.category.category);
  let catalogo = categoria
    ? productos[categoria]
    : Object.values(productos).flat();
  return (
    <section id={styleProducts.products}>
      <h2>Productos</h2>
      {catalogo.length == 0 && <p>No hay productos</p>}
      {catalogo.length != 0 && (
        <ul id={styleProducts.productsList}>
          {!categoria &&
            Object.values(productos)
              .flat()
              .slice(0, offset)
              .map((producto) => (
                <li className={styleProducts.productCard} key={producto.id}>
                  <img src={producto.img} alt={producto.title} />
                  <h2>{producto.title}</h2>
                  <p>{producto.desc}</p>
                  <form>
                    <span>${producto.price}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(addToCart(producto))}
                    >
                      Agregar
                    </button>
                  </form>
                </li>
              ))}
          {categoria &&
            productos[categoria].map((producto) => (
              <li className={styleProducts.productCard} key={producto.id}>
                <img src={producto.img} alt={producto.title} />
                <h2>{producto.title}</h2>
                <p>{producto.desc}</p>
                <form>
                  <span>${producto.price}</span>
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(producto))}
                  >
                    Agregar
                  </button>
                </form>
              </li>
            ))}
        </ul>
      )}
      <form id={styleProducts.paginate}>
        <button
          type="button"
          className={styleProducts.btnPage}
          disabled={offset <= 3}
          onClick={() => setOffset((p) => (p - 3 < 3 ? 3 : p - 3))}
        >
          Ver menos
        </button>
        <button
          type="button"
          className={styleProducts.btnPage}
          disabled={offset + 3 >= catalogo.length}
          onClick={() =>
            setOffset((p) => (p + 3 >= catalogo.length ? p : p + 3))
          }
        >
          Ver más
        </button>
      </form>
    </section>
  );
};
export default Products;
