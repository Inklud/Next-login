import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AppContext from "../context/AppContext";
import Router from "next/router";

function Protected(props) {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext);
  if (user == null) {
    useEffect(() => {
      Router.push("/");
    });
    return <>No way</>;
  }
  return <> {user != null && <>{props.children}</>}</>;
}

export default Protected;
