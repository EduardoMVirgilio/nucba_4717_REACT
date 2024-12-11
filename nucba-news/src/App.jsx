import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import List from "./components/List";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/Auth";
import Private from "./components/Private";
import { NewsProvider } from "./context/News";

const routes = createBrowserRouter([{

}])


const App = () => {
  return (
    <>
      {/* <RouterProvider router={routes} /> */}
      <NewsProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="news" element={<Private><List /></Private>} />
                <Route path="create" element={<Private><Create /></Private>} />
                <Route path="edit/:id" element={<Private><Edit /></Private>} />
                <Route path="*" element={<><h1>No se encontro la ruta</h1></>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </NewsProvider>
    </>
  );
};

export default App;
