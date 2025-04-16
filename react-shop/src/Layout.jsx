import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout