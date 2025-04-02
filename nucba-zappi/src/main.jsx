import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Page404 from "./Page404.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Registro/Registro.jsx";
import Logout from "./Logout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
