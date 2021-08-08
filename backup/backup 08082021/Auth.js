import { useContext } from "react";
import AppContext from "../context/AppContext";
import { RedirectLogin } from "../components";

const Layout = ({ children }) => {
  const { isAuthstatus } = useContext(AppContext);
  return (
    <>
      {isAuthstatus == 1 && <RedirectLogin />}
      {isAuthstatus == 2 && <>{children}</>}
    </>
  );
};

export default Layout;
