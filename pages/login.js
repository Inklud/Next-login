import Head from "next/head";
import Layout from "../layouts/Layout";

import { HeaderTitle, LoginForm } from "../components";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
      <HeaderTitle title="Login" />
      <LoginForm />
    </Layout>
  );
}
