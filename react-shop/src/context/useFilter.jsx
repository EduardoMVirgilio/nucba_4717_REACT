import { createContext, useContext, useState } from "react"


const filterContext = createContext(null)

export const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState(null);
    const set = (category) => setCategory(category);
    const clear = () => setCategory(null)
    return <filterContext.Provider value={{ category, set, clear }}>{children}</filterContext.Provider>
}

const useFilter = () => useContext(filterContext)

export default useFilter