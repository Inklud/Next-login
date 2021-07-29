import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="theme-color" content="#FFFFFF"></meta>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="A basic login app to learn Next.js, Tailwind and Strapi"
      />
    </Head>
  );
}
