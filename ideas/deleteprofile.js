import React, { useContext } from "react";
import { deleteUser } from "../../lib/auth";
// import axios from "axios";
import { logoutgohome } from "../../lib/auth";
import AppContext from "../../context/AppContext";
// import Cookie from "js-cookie";

/*async function deleteuser(props) {
  const { setUser, setIsAuthstatus } = useContext(AppContext);
  const token = Cookie.get("token");
  try {
    await axios.delete("https://login.apiblic.com/users/" + props.userid, {
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
}*/

export default function DeleteProfile(props) {
  const { setUser, setIsAuthstatus } = useContext(AppContext);
  function removeUser(props) {
    console.log(props);
    deleteUser(props)
      .then((res) => {
        // set authed user in global context object
        //console.log(res);
        logoutgohome();
        setIsAuthstatus(1);
        setUser(null);
        //console.log("Deleted");
      })
      .catch((error) => {
        /*  if (error.response.data) {
        setError(error.response.data);
      } else {
        setError("login successful");
      }*/
        console.log(error);
        //console.log("Failed");
        //setLoading(false);
      });
  }
  return (
    <button
      className="p-3 inline bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
      onClick={() => {
        removeUser(props.userid);
      }}
    >
      Delete user
    </button>
  );
}
