import React, { useContext } from "react";
import Head from "next/head";
import HeaderTitle from "../components/HeaderTitle";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";

export default function Members(props) {
  const { user, setUser } = useContext(AppContext);
  if (user == null) {
    return <>Hello</>;
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTitle title="Members only" />
      <h1 className="pb-6">
        Members only should see this page {user.email}, otherwise redirect to
        home
      </h1>
    </Layout>
  );
}
