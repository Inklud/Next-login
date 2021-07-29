import React, { useContext } from "react";
import { deleteUser } from "../../lib/auth";
import { logoutgohome } from "../../lib/auth";
import AppContext from "../../context/AppContext";

export default function DeleteProfile(props) {
  const { setUser, setIsAuthstatus } = useContext(AppContext);
  function removeUser(props) {
    console.log(props);
    deleteUser(props)
      .then((res) => {
        logoutgohome();
        setIsAuthstatus(1);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
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
