import CategoryProvider from "./context/CategoryContext"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Link, Outlet } from "react-router"
const Layout = () => {
    return (
        <>
            <Header />
            <CategoryProvider>
                <Outlet />
            </CategoryProvider>
            <Footer />
        </>
    )
}
export default Layout