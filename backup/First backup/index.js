import React, { useContext } from "react";
import Head from "next/head";
import AppContext from "../context/AppContext";
import Layout from "../layouts/Layout";
import HeaderTitle from "../components/HeaderTitle";
import Loading from "../components/Loading";
import Indexpage from "../components/Indexpage";

export default function Members(props) {
  const { isLoading, user } = useContext(AppContext);

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
        <HeaderTitle title="Welcome" />
        <h1 className="pb-6">
          <div className="pb-6">Your email: {user.email}</div>
        </h1>
      </Layout>
    );
  }

  return <>{isLoading ? <Indexpage /> : <Loading />}</>;
}
