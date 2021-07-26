import Head from "next/head";
import Layout from "../layouts/Layout";
import { HeaderTitle, RegisterForm } from "../components";

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
      <RegisterForm />
    </Layout>
  );
}
