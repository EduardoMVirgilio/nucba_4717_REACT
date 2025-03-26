import { Fragment } from "react"
import styleCategory from './Categories.module.css'
import { useSelector, useDispatch } from "react-redux"
import { setCategory } from "../store"

const Categories = ({ categorias = {} }) => {
    const category = useSelector((state) => state.category.category)
    const dispatch = useDispatch();
    const selectCategory = (e) => {
        return dispatch(setCategory(e.target.value))
    }
    const unselectCategory = (e) => {
        const hasActive = e.target.classList.contains(`${styleCategory.active}`)
        if (hasActive) {
            return dispatch(setCategory(null))
        }
    }
    return (
        <section id={styleCategory.categoryContainer}>
            <h2>Categorias</h2>
            <form id={styleCategory.formCategory}>
                {/* <input type="radio" name="categoria" id="All" value={""} onInput={selectCategory} />
                <label className={`${styleCategory.category} ${!category ? styleCategory.active : ""}`} htmlFor="All">All</label> */}
                {Object.keys(categorias).map((categoria) => <Fragment key={categoria}>
                    <input type="radio" name="categoria" id={categoria} value={categoria} onInput={selectCategory} />
                    <label htmlFor={categoria} onClick={unselectCategory} className={`${styleCategory.category} ${category == categoria ? styleCategory.active : ""}`}>
                        <img src={categorias[categoria].img} alt="" />
                        {categorias[categoria].title}
                    </label>
                </Fragment>)}
            </form>
        </section>
    )

}
export default Categories
