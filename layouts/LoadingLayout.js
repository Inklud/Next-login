import Head from "next/head";
import { LoadingHeader } from "../components";

//import "../assets/css/Layout.less";

const LoadingLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF"></meta>
      </Head>
      <LoadingHeader />
    </>
  );
};

export default LoadingLayout;
