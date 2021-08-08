import { useContext } from "react";
import AppContext from "../context/AppContext";
import moment from "moment";
import {
  Meta,
  HeaderTitle,
  ExportProfile,
  DeleteProfile,
  RedirectLogin,
} from "../components";

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
      {isAuthstatus == 1 && <RedirectLogin />}
      {isAuthstatus == 2 && (
        <>
          <Meta title="Login Project" />
          <HeaderTitle title="Profile" />
          <p>Created: {DateCreated}</p>
          <p className="pb-3">Email: {user.email}</p>
          <div className="mt-3 mb-12">
            <ExportProfile user={user} />
            <DeleteProfile userid={user.id} />
          </div>
        </>
      )}
    </>
  );
}
