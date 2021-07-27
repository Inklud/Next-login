import React, { useContext } from "react";
import Head from "next/head";
import AppContext from "../context/AppContext";
import Layout from "../layouts/Layout";
import { HeaderTitle, Loading, IndexPage } from "../components";
export default function Members(props) {
  const { user, isAuthstatus } = useContext(AppContext);

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <IndexPage />}
      {isAuthstatus == 2 && (
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
      )}
    </>
  );
}
