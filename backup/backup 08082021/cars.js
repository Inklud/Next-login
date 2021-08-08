import { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  Meta,
  HeaderTitle,
  RedirectLogin,
  AddCar,
  CarsTable,
} from "../components";

export default function List() {
  const { user, isAuthstatus } = useContext(AppContext);

  return (
    <>
      {isAuthstatus == 1 && <RedirectLogin />}
      {isAuthstatus == 2 && (
        <>
          <Meta title="Login Project" />
          <HeaderTitle title="Cars" />
          <div className="mt-3 mb-12">
            <AddCar userId={user.id} />
            <CarsTable userId={user.id} />
          </div>
        </>
      )}
    </>
  );
}
