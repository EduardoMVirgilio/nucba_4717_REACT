import { createContext, useContext, useState } from "react"


const menuContext = createContext(null)

export const MenuProvider = ({ children }) => {
    const [opened, setOpen] = useState(false);
    const open = () => setOpen(true)
    const close = () => setOpen(false)
    return <menuContext.Provider value={{ opened, open, close }}>{children}</menuContext.Provider>
}

const useMenu = () => useContext(menuContext)

export default useMenu