import Head from "next/head";
import LoadingLayout from "../layouts/LoadingLayout";

export default function Loading() {
  return (
    <LoadingLayout>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
    </LoadingLayout>
  );
}
