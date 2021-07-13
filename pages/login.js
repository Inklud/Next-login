import Head from "next/head";
import Layout from "../layouts/Layout";
import Loginform from "../components/auth/Loginform";
import HeaderTitle from "../components/HeaderTitle";

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
      <Loginform />
    </Layout>
  );
}
