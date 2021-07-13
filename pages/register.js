import Head from "next/head";
import HeaderTitle from "../components/HeaderTitle";
import Registerform from "../components/auth/Registerform";
import Layout from "../layouts/Layout";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
      <HeaderTitle title="Register" />
      <Registerform />
    </Layout>
  );
}
