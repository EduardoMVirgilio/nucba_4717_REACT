import { useEffect, useRef, useState } from "react";
import style from "../styles/Edit.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useNews } from "../context/News";

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const setNews = usePost(({ setNews }) => setNews)
  const news = usePost(({ news }) => news)
  const [post, setPost] = useState(null)
  const title = useRef(null)
  const content = useRef(null)
  useEffect(() => setPost(news.find((post) => post.id == id)), [])
  const update = (id) => {
    setNews(news.map((post) => {
      if (post.id == id) {
        return ({ ...post, content: content.current.value, title: title.current.value })
      }
      return post
    }))
    navigate("/news")
  }
  return (
    <section id={style.edit}>
      <header>
        <h2>Edit Post</h2>
      </header>
      <form>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" defaultValue={post?.title} ref={title} />
        <label htmlFor="content">Contenido</label>
        <textarea id="content" defaultValue={post?.content} ref={content}></textarea>
        <button type="button" onClick={() => update(post?.id)}>
          <span>Actualizar</span>
        </button>
      </form>
    </section>
  );
};

export default Edit;
