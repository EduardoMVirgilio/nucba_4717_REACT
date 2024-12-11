import { useRef } from "react";
import { useTareas } from "../context/Tareas";
import style from "../styles/Agregar.module.css";
const Agregar = () => {
  const { setTareas } = useTareas();
  const text = useRef(null);
  const save = (e) => {
    e.preventDefault();
    let tarea = String(text.current.value).trim();
    if (tarea.length <= 4) {
      return alert("La tarea no se puede agregar, debe tener 5 caracteres.");
    }
    if (tarea.length > 4) {
      setTareas((tareas) => [
        ...tareas,
        { id: Date.now(), tarea, incompleto: true },
      ]);
      return e.target.reset();
    }
  };
  return (
    <form onSubmit={save} id={style.add}>
      <input
        type="text"
        ref={text}
        placeholder="Ingrese su tarea a completar"
      />
      <button>agregar</button>
    </form>
  );
};

export default Agregar;
