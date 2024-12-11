import { Fragment } from "react"
import styleCategory from './Categories.module.css'
const Categories = ({ categorias = {}, current = 'Pizzas' }) => {

    return (
        <section id={styleCategory.categoryContainer}>
            <h2>Categorias</h2>
            <form id={styleCategory.formCategory}>
                {Object.keys(categorias).map((categoria) => <Fragment key={categoria}>
                    <input type="radio" name="categoria" id={categoria} value={categoria} />
                    <label htmlFor={categoria} className={`${styleCategory.category} ${current == categoria ? styleCategory.active : ""}`}>
                        <img src={categorias[categoria].img} alt="" />
                        {categorias[categoria].title}
                    </label>
                </Fragment>)}
            </form>
        </section>
    )

}
export default Categories
