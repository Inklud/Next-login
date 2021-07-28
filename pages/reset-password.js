import Head from "next/head";
import Layout from "../layouts/Layout";
import { HeaderTitle, Resetpassform } from "../components";
import { useRouter } from "next/router";

export default function ResetPass() {
  const router = useRouter();
  console.log(router.query.code);

  return (
    <Layout>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
      <HeaderTitle title="Reset password" />
      <Resetpassform code={router.query.code} />
    </Layout>
  );
}
