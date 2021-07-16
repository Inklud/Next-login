import LoadingHeader from "../components/LoadingHeader";
import Footer from "../components/Footer";
import Head from "next/head";

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
