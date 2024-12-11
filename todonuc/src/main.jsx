import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const $app = document.getElementById("app");
createRoot($app).render(<App />);
