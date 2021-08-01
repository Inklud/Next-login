import Head from "next/head";
import { HeaderTitle } from "../components";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Login Project</title>
        <meta
          name="description"
          content="A basic login app to learn Next.js, Tailwind and Strapi"
        />
      </Head>
      <HeaderTitle title="Welcome" />
      <div className="pb-6">
        <Link href="/login">
          <a className="underline hover:no-underline text-blue-600">Login</a>
        </Link>{" "}
        or{" "}
        <Link href="/register">
          <a className="underline hover:no-underline text-blue-600">register</a>
        </Link>{" "}
        to get started.
      </div>
    </>
  );
}
