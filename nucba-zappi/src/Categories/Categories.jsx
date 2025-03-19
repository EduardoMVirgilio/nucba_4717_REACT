import { Fragment } from "react"
import styleCategory from './Categories.module.css'
import { useCategory } from "../context/CategoryContext"
const Categories = ({ categorias = {} }) => {
    const { category, setCategory } = useCategory()
    return (
        <section id={styleCategory.categoryContainer}>
            <h2>Categorias</h2>
            <form id={styleCategory.formCategory}>
                {Object.keys(categorias).map((categoria) => <Fragment key={categoria}>
                    <input type="radio" name="categoria" id={categoria} value={categoria} onChange={(e) => setCategory(e.target.value)} />
                    <label htmlFor={categoria} className={`${styleCategory.category} ${category == categoria ? styleCategory.active : ""}`}>
                        <img src={categorias[categoria].img} alt="" />
                        {categorias[categoria].title}
                    </label>
                </Fragment>)}
            </form>
        </section>
    )

}
export default Categories
