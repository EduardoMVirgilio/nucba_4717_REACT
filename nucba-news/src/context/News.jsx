import { createContext, useContext, useState } from "react";


const News = createContext([])

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([])
    return <News.Provider value={{ news, setNews }}>{children}</News.Provider>
}



export const useNews = () => useContext(News)