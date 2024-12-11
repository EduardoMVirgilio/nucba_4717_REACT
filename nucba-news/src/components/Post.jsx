import { useNavigate } from "react-router-dom";
import style from "../styles/Post.module.css";
import { Pen, Trash2 } from "lucide-react";
import { useNews } from "../context/News";
import usePost from "../store/usePosts";
const Post = ({ id, title, content }) => {
  const setNews = usePost(({ setNews }) => setNews)
  const news = usePost(({ news }) => news)
  const navigate = useNavigate()
  const remove = (postId) => {
    setNews(news.filter(({ id }) => id != postId))
    return navigate("/news")
  }
  return (
    <li className={style.post}>
      <details>
        <summary>{title}</summary>
        <p>{content}</p>
      </details>
      <form>
        <button type="button" className={style.edit} onClick={() => navigate(`/edit/${id}`)}>
          <Pen />
        </button>
        <button type="button" className={style.remove} onClick={() => remove(id)}>
          <Trash2 />
        </button>
      </form>
    </li>
  );
};

export default Post;
