import React, { useContext } from "react";
import Head from "next/head";
import HeaderTitle from "../components/HeaderTitle";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";

export default function Members(props) {
  const appContext = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);

  if (user) {
    return (
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
    );
  }

  if (appContext.isLoading) {
    return <Login />;
  }

  return <></>;
}
