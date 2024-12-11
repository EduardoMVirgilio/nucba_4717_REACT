import styleProducts from './Products.module.css'
const Products = ({ productos = [], categoria = null }) => {

    let catalogo = categoria ? productos[categoria] : Object.values(productos).flat()

    return (<section id={styleProducts.products}>
        <h2>Productos</h2>
        {catalogo.length == 0 && <p>No hay productos</p>}
        {catalogo.length != 0 && <ul id={styleProducts.productsList}>{catalogo.map((producto) => <li className={styleProducts.productCard} key={producto.id}>
            <img src={producto.img} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>{producto.desc}</p>
            <form>
                <span >${producto.price}</span>
                <button>Agregar</button>
            </form>
        </li>)}</ul>}
    </section>
    )
}
export default Products 