import { createContext, useContext, useState } from "react";

const Auth = createContext(false)

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    return <Auth.Provider value={{ auth, setAuth }}>{children}</Auth.Provider>
}

export const useAuth = () => useContext(Auth)