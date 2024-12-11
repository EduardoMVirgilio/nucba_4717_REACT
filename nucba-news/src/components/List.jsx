import { } from "react";
import style from "../styles/List.module.css";

import Post from "./Post";
import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNews } from "../context/News";
import usePost from "../store/usePosts";
const List = () => {
  const news = usePost(({ news }) => news)
  return (
    <section id={style.news}>
      <header>
        <h2>Noticias</h2>
        <NavLink to={"/create"} className={({ isActive }) => isActive ? style.active : ''}>
          <Plus />
        </NavLink>
      </header>
      <ul>
        {news?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default List;
