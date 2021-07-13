import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import AppContext from "../context/AppContext";
import Head from "next/head";
import HeaderTitle from "../components/HeaderTitle";
import Layout from "../layouts/Layout";

const SigninComponent = () => {
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user.email) {
      Router.push(`/`);
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) {
    return (
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderTitle title="Members only" />
        <h1 className="pb-6">Members only</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderTitle title="Members only" />
        <h1 className="pb-6">Loading</h1>
      </Layout>
    );
  }
};

export default SigninComponent;
