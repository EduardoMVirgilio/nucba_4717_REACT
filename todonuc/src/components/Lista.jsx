import { useTareas } from "../context/Tareas";
import Tarea from "./Tarea";
import style from "../styles/Lista.module.css";
const Lista = () => {
  const { tareas } = useTareas();
  return (
    <ul id={style.list}>
      {tareas.map((datos) => (
        <Tarea key={datos.id} {...datos} />
      ))}
    </ul>
  );
};
export default Lista;
