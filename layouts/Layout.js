import Head from "next/head";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Header, Footer, LoadingHeader } from "../components";

const Layout = ({ children }) => {
  const { isAuthstatus } = useContext(AppContext);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF"></meta>
      </Head>
      {isAuthstatus === 0 && <LoadingHeader />}
      {isAuthstatus !== 0 && <Header />}
      <main className="max-w-5xl mx-auto px-4">{children}</main>
      {isAuthstatus !== 0 && <Footer />}
    </>
  );
};

export default Layout;
