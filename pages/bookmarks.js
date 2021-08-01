import { useContext } from "react";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import {
  Loading,
  HeaderTitle,
  Meta,
  RedirectLogin,
  AddTableItem,
  LinksTable,
} from "../components";

export default function List() {
  const { user, isAuthstatus } = useContext(AppContext);
  // console.log(user);

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <RedirectLogin />}
      {isAuthstatus == 2 && (
        <Layout>
          <Meta title="Login Project" />
          <HeaderTitle title="Bookmarks" />
          <div className="mt-3 mb-12">
            <AddTableItem />
            <LinksTable links={user.links} />
          </div>
        </Layout>
      )}
    </>
  );
}
