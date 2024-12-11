import { useState, createContext, useContext } from "react";

const Tareas = createContext([]);

export const Provider = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  return (
    <Tareas.Provider value={{ tareas, setTareas }}>{children}</Tareas.Provider>
  );
};

export const useTareas = () => useContext(Tareas);
