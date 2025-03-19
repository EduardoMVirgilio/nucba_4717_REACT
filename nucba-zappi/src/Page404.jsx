import { Link } from "react-router"
const Page404 = () => {
    return (
        <>
            <h2>Te saliste de la pizza.</h2>
            <p>Puedes volver haciendo <Link to={"/"}>click acá</Link></p>
        </>
    )
}

export default Page404