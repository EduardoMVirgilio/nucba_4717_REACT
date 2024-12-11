import { Plus } from 'lucide-react'
import style from "./Catalogo.module.css"
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
const Catalogo = () => {
    const { addCart } = useCart()
    const products = Array.from({ length: 6 }, (_, i) => (
        {
            id: i + 1,
            name: `Producto N-${i + 1}`,
            image: `http://placehold.co/400?text=${i + 1}`,
            price: 100 * (i + 1)
        }
    ))
    const [data, setData] = useState(products)
    return (<ul className={style.list}>
        {data.map(({ id, name, image, price }) => (
            <li key={id}>
                <picture><img src={image} alt={name} /></picture>
                <dl>
                    <dt>{name}</dt>
                    <dd>${price}</dd>
                </dl>
                <form>
                    <button type="button" onClick={() => addCart({ id, name, image, price })}>
                        <Plus />
                    </button>
                </form>
            </li>
        ))}
    </ul>)
}
export default Catalogo