import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Private = ({ children }) => {
  const { auth } = useAuth()
  return auth ? children : <Navigate to={"/login"} />;
};

export default Private;
