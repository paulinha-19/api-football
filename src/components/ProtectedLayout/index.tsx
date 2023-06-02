import Login from "../../pages/Login";
import {
  getUserLocalStorage,
  getKeyLocalStorage,
  getSubscriptionLocalStorage,
} from "../utils/utilAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const user = getUserLocalStorage();
  const key = getKeyLocalStorage();
  const subscription = getSubscriptionLocalStorage();
  const location = useLocation();
  const navigate = useNavigate();
  if (!user && !key && !subscription) {
    return <Login />;
  }
  if (location.pathname === "/") {
    navigate("/home");
  }
  return children;
};

export default ProtectedLayout;
