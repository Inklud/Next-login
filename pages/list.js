import { useContext } from "react";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";
import { Loading, HeaderTitle, Meta } from "../components";
import LinksTable from "../components/LinksTable";

export default function List() {
  const { user, isAuthstatus } = useContext(AppContext);
  // console.log(user);

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <Login />}
      {isAuthstatus == 2 && (
        <Layout>
          <Meta title="Login Project" />
          <HeaderTitle title="List" />
          <div className="mt-3 mb-12">
            <LinksTable links={user.links} />
          </div>
        </Layout>
      )}
    </>
  );
}
