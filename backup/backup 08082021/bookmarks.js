import { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  Meta,
  HeaderTitle,
  RedirectLogin,
  AddTableItem,
  LinksTable,
} from "../components";

export default function List() {
  const { user, isAuthstatus } = useContext(AppContext);

  return (
    <>
      {isAuthstatus == 1 && <RedirectLogin />}
      {isAuthstatus == 2 && (
        <>
          <Meta title="Login Project" />
          <HeaderTitle title="Bookmarks" />
          <div className="mt-3 mb-12">
            <AddTableItem userId={user.id} />
            <LinksTable userId={user.id} />
          </div>
        </>
      )}
    </>
  );
}
