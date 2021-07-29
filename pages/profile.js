import { useContext } from "react";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";
import {
  Loading,
  HeaderTitle,
  ExportProfile,
  Meta,
  DeleteProfile,
} from "../components";
import moment from "moment";

export default function Members() {
  const { user, isAuthstatus } = useContext(AppContext);

  if (isAuthstatus == 2) {
    var ProfileDateCreated = user.created_at;
    var DateCreated = moment(String(ProfileDateCreated)).format(
      "MM/DD/YYYY hh:mm"
    );
  }

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <Login />}
      {isAuthstatus == 2 && (
        <Layout>
          <Meta title="Login Project" />
          <HeaderTitle title="Profile" />
          <p>Created: {DateCreated}</p>
          <p className="pb-3">Email: {user.email}</p>
          <div className="mt-3 mb-12">
            <ExportProfile user={user} />
            <DeleteProfile userid={user.id} />
          </div>
        </Layout>
      )}
    </>
  );
}
