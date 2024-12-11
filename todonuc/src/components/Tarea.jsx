import { Trash2, Pen, Check, X } from "lucide-react";
import { useTareas } from "../context/Tareas";
import style from "../styles/Tarea.module.css";
import { useState, useRef } from "react";
const Tarea = ({ id, tarea, incompleto }) => {
  const { setTareas } = useTareas();
  const [block, toggle] = useState(true);
  const input = useRef(null);
  const borrar = () =>
    setTareas((tareas) => tareas.filter((tarea) => tarea.id != id));
  const change = () => {
    setTareas((tareas) =>
      tareas.map((tarea) => {
        if (tarea.id == id) {
          return { ...tarea, tarea: input.current.value };
        }
        return tarea;
      })
    );
  };
  const completar = () => {
    setTareas((tareas) =>
      tareas.map((tarea) => {
        if (tarea.id == id) {
          return { ...tarea, incompleto: !tarea.incompleto };
        }
        return tarea;
      })
    );
  };
  return (
    <li className={`${style.task} ${incompleto ? style.incomplete : ""}`}>
      <input
        type="text"
        disabled={block}
        ref={input}
        defaultValue={tarea}
        onInput={change}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={borrar}>
          <Trash2 />
        </button>
        <button type="button" onClick={() => toggle(!block)}>
          <Pen />
        </button>
        <button
          type="button"
          onClick={completar}
          className={incompleto ? style.incomplete : ""}
        >
          {!incompleto && <X />}
          {incompleto && <Check />}
        </button>
      </form>
    </li>
  );
};

export default Tarea;
