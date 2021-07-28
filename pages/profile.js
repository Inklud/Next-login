import React, { useContext } from "react";
import moment from "moment";
import Head from "next/head";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Login from "../pages/login";
import { Loading, HeaderTitle, ExportProfile } from "../components";
import axios from "axios";
import Cookie from "js-cookie";
import { logoutgohome } from "../lib/auth";

export default function Members(props) {
  const token = Cookie.get("token");
  const { user, setUser, isAuthstatus, setIsAuthstatus } =
    useContext(AppContext);

  if (isAuthstatus == 2) {
    var ProfileDateCreated = user.created_at;
    var DateCreated = moment(String(ProfileDateCreated)).format(
      "MM/DD/YYYY hh:mm"
    );
  }

  async function deleteuser() {
    try {
      await axios.delete("https://login.apiblic.com/users/" + user.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      error = null;
      logoutgohome();
      setIsAuthstatus(1);
      setUser(null);
    } catch (e) {
      if (e.response.data.message) {
        var error = e.response.data.message;
        console.log(error);
      } else console.log("We was not able to delete your profile");
    }
  }

  return (
    <>
      {isAuthstatus == 0 && <Loading />}
      {isAuthstatus == 1 && <Login />}
      {isAuthstatus == 2 && (
        <Layout>
          <Head>
            <title>Login Project</title>
            <meta
              name="description"
              content="A basic login app to learn Next.js, Tailwind and Strapi"
            />
          </Head>
          <HeaderTitle title="Profile" />
          <p>Created: {DateCreated}</p>
          <p className="pb-3">Email: {user.email}</p>

          <ExportProfile user={user} />
          <button
            className="p-3 mb-12 mt-3 inline bg-gray-800 hover:bg-gray-900 text-white rounded
          shadow"
            onClick={() => {
              deleteuser();
            }}
          >
            Delete user
          </button>
        </Layout>
      )}
    </>
  );
}
