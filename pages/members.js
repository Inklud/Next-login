import React, { useContext } from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";
import { Loading, HeaderTitle } from "../components";

export default function Members(props) {
  const { user, isAuthstatus } = useContext(AppContext);

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <Login />}
      {isAuthstatus == 2 && (
        <Layout>
          <Head>
            <title>Login Project</title>
            <meta
              name="description"
              content="A basic login app to learn Next.js, Tailwind and Strapi"
            />
          </Head>
          <HeaderTitle title="Members only" />
          <h1 className="pb-6">
            Members only should see this page. Your email is: {user.email}.
          </h1>
        </Layout>
      )}
    </>
  );
}
