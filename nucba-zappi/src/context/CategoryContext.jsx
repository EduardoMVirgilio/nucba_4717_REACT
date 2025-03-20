import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(null)
    return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>
}

export const useCategory = () => useContext(CategoryContext)

export default CategoryProvider