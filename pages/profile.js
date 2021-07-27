import React, { useContext } from "react";
import moment from "moment";
import Head from "next/head";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";
import { Loading, HeaderTitle } from "../components";

export default function Members(props) {
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
          <Head>
            <title>Login Project</title>
            <meta
              name="description"
              content="A basic login app to learn Next.js, Tailwind and Strapi"
            />
          </Head>
          <HeaderTitle title="Profile" />
          <p>Created: {DateCreated}</p>
          <p className="pt-2 pb-12">Email: {user.email}</p>
        </Layout>
      )}
    </>
  );
}
