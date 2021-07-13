import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

//import "../assets/css/Layout.less";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF"></meta>
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
