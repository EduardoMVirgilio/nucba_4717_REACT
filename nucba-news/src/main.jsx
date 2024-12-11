import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const $app = document.querySelector("#app");
const root = createRoot($app);
root.render(<App />);
