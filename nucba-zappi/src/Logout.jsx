import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearUser } from "./store";

const Logout = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      dispatch(clearUser());
      return navigate("/");
    }
  }, [user, dispatch, navigate]);
  return <></>;
};

export default Logout;
