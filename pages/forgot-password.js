import Head from "next/head";
import Layout from "../layouts/Layout";
import { HeaderTitle, Forgottenpassform } from "../components";

export default function ForgottenPassword() {
  return (
    <Layout>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
      <HeaderTitle title="Forgotten password" />
      <Forgottenpassform />
    </Layout>
  );
}
