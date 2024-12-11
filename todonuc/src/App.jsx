import Agregar from "./components/Agregar";
import Lista from "./components/Lista";
import { Provider } from "./context/Tareas";

const App = () => {
  return (
    <>
      <h1>To Do | Nucba</h1>
      <Provider>
        <Agregar />
        <Lista />
      </Provider>
    </>
  );
};

export default App;
