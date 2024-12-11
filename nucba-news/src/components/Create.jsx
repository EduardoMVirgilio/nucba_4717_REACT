import { useRef } from "react";
import style from "../styles/Create.module.css";
import { useNavigate } from "react-router-dom";
import { useNews } from "../context/News";
import usePost from "../store/usePosts";

const Create = () => {
  const addNew = usePost(({ addNew }) => addNew)
  const news = usePost(({ news }) => news)
  const title = useRef(null)
  const content = useRef(null)
  const navigate = useNavigate()
  const addPost = () => {
    addNew(title.current.value, content.current.value)
    alert("Noticia Guardada");
    navigate("/news")
  }
  return (
    <section id={style.create}>
      <header>
        <h2>New Post</h2>
      </header>
      <form>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" ref={title} />
        <label htmlFor="content">Contenido</label>
        <textarea id="content" ref={content}></textarea>
        <button type="button" onClick={() => addPost()} >
          <span>Guardar</span>
        </button>
      </form>
    </section>
  );
};

export default Create;
