import { useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";
import { Meta, HeaderTitle, IndexPage } from "../components";

export default function Members() {
  const { isAuthstatus } = useContext(AppContext);

  return (
    <>
      {isAuthstatus == 1 && <IndexPage />}
      {isAuthstatus == 2 && (
        <>
          <Meta title="Login Project" />
          <HeaderTitle title="Welcome" />
          <h1 className="pb-6">
            <div className="pb-6">
              Your are now loged in. Please take a look on the{" "}
              <Link href="/bookmarks">
                <a className="underline hover:no-underline text-blue-600">
                  bookmarks
                </a>
              </Link>{" "}
              page.
            </div>
          </h1>
        </>
      )}
    </>
  );
}
